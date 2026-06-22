import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  CategoryOption,
  Language,
  MyGame,
  TenThingsList,
  getCategories,
  getGame,
  getLanguages,
  getList,
  getMyGames,
  updateGameCategory,
  updateGameSettings,
  updateList,
} from "../services/tenthings";
import moment from "moment";
import { useApp } from "../context/AppContext";
import { ListEditor } from "./tenthings/ListEditor";

const MetricRow = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 4px 8px;
  margin-bottom: 8px;
  align-items: center;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const SwitchInput = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

const SwitchSlider = styled.span<{ checked: boolean }>`
  display: inline-block;
  width: 38px;
  height: 22px;
  background: ${({ checked }) => (checked ? "#4caf50" : "#ccc")};
  border-radius: 22px;
  position: relative;
  transition: background 0.2s;
  margin-left: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  &:before {
    content: "";
    position: absolute;
    left: 3px;
    top: 3px;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 50%;
    transition: transform 0.2s;
    transform: ${({ checked }) => (checked ? "translateX(16px)" : "none")};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.13);
  }
`;

const PageContainer = styled.div`
  max-width: 1600px;
`;

const CompactPanel = styled.div`
  margin-bottom: 12px;
`;

const HeaderCompact = styled.div`
  margin-top: 10px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const HeaderTitle = styled.h2`
  margin: 0;
`;

const SettingsBody = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const CategoryDropdownRoot = styled.div`
  position: relative;
`;

const CategoryMenu = styled.div`
  padding: 8px 12px;
  width: min(92vw, 700px);
  max-height: 320px;
  overflow-y: auto;
  left: 0;
`;

const CategoryMenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CategoryRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

const CategoryMainButton = styled.button`
  font-weight: bold;
  min-width: 110px;
  flex-shrink: 0;
`;

const CategoryArrow = styled.span`
  color: #aaa;
  font-size: 12px;
  margin: 0 2px;
  flex-shrink: 0;
`;

const CategorySubgroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex: 1;
`;

const SectionBody = styled.div`
  padding-top: 10px;
  padding-bottom: 8px;
`;

const MiniGameRow = styled.div`
  margin-bottom: 10px;
`;

const MiniGameWell = styled.div`
  margin-bottom: 8px;
`;

const MiniGameMeta = styled.div`
  font-size: 12px;
`;

const ListTitle = styled.h4`
  margin-top: 0;
`;

const ListTitleButton = styled.button`
  padding: 0;
  font-size: inherit;
  line-height: inherit;
  vertical-align: baseline;
`;

const CategoriesText = styled.p`
  margin-bottom: 10px;
`;

const GuessedText = styled.p`
  margin-bottom: 8px;
`;

const ValuesScroll = styled.div`
  max-height: 360px;
  overflow-y: auto;
`;

const ValuesRow = styled.div`
  margin: 0;
`;

const ValuesColLeft = styled.div`
  padding-left: 0;
  padding-right: 6px;
`;

const ValuesColRight = styled.div`
  padding-left: 6px;
  padding-right: 0;
`;

const ValueItem = styled.div`
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ValueStatus = styled.span`
  min-width: 60px;
  text-align: center;
`;

const ValueText = styled.span<{ $guessed: boolean }>`
  font-weight: ${({ $guessed }) => ($guessed ? 600 : 400)};
`;

const ListGroupNoMargin = styled.div`
  margin-bottom: 0;
`;

const PlayersBody = styled.div`
  padding: 0;
`;

const PlayersScroll = styled.div`
  max-height: 520px;
  overflow: auto;
`;

const PlayersTable = styled.table`
  margin-bottom: 0;
`;

const EditorBackdrop = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: ${({ $visible }) => ($visible ? "block" : "none")};
`;

export default function TenThingsGame() {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const { currentUser, toast, isAdmin } = useApp();
  const [game, setGame] = useState<any>(null);
  const [myGames, setMyGames] = useState<MyGame[]>([]);
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [showCategories, setShowCategories] = useState(false);
  const [editorList, setEditorList] = useState<TenThingsList | null>(null);
  const [editorMounted, setEditorMounted] = useState(false);
  const [editorVisible, setEditorVisible] = useState(false);
  const [settingsSaving, setSettingsSaving] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);
  const [showGameDropdown, setShowGameDropdown] = useState(false);
  const [playerSortField, setPlayerSortField] = useState("lastPlayDate");
  const [playerSortDir, setPlayerSortDir] = useState<1 | -1>(-1);

  const handlePlayerSort = (field: string) => {
    if (playerSortField === field) setPlayerSortDir((d) => (d === 1 ? -1 : 1));
    else {
      setPlayerSortField(field);
      setPlayerSortDir(-1);
    }
  };

  const playerSortIcon = (field: string) =>
    playerSortField === field ? (
      <i
        className={`fas ${playerSortDir === 1 ? "fa-sort-alpha-down" : "fa-sort-alpha-down-alt"}`}
        style={{ marginLeft: 4 }}
      />
    ) : null;

  const handleSettingToggle = async (key: string) => {
    if (!gameId || !isAdmin) return;
    setSettingsSaving(true);
    try {
      const newSettings = { ...game.settings, [key]: !game.settings[key] };
      const updated = await updateGameSettings(gameId, { [key]: newSettings[key] });
      setGame((prev: any) => ({ ...prev, settings: { ...prev.settings, [key]: updated[key] } }));
    } catch {
      toast("Failed to update setting");
    } finally {
      setSettingsSaving(false);
    }
  };

  const handleSettingChange = async (key: string, value: any) => {
    if (!gameId || !isAdmin) return;
    setSettingsSaving(true);
    try {
      const updated = await updateGameSettings(gameId, { [key]: value });
      setGame((prev: any) => ({ ...prev, settings: { ...prev.settings, [key]: updated[key] } }));
    } catch {
      toast("Failed to update setting");
    } finally {
      setSettingsSaving(false);
    }
  };

  const categoryRef = useRef<HTMLDivElement>(null);
  const gameDropdownRef = useRef<HTMLDivElement>(null);

  // Load user's games list
  useEffect(() => {
    if (!currentUser) return;
    getMyGames()
      .then((games) => {
        setMyGames(games);
        // Auto-navigate to first game if no gameId in URL
        if (!gameId && games.length > 0) {
          const first = games[0];
          navigate(`/tenthings-game/${first.telegramChatId ?? first._id}`, { replace: true });
        }
      })
      .catch(() => {});
  }, [currentUser]);

  // Load game data when gameId changes
  useEffect(() => {
    const load = async () => {
      if (!currentUser || !gameId) return;
      try {
        const [gameData, cats, langs] = await Promise.all([
          getGame(gameId),
          isAdmin ? getCategories() : Promise.resolve([]),
          isAdmin ? getLanguages() : Promise.resolve([]),
        ]);
        setGame(gameData);
        if (cats.length) setCategories(cats);
        if (langs.length) setLanguages(langs);
      } catch {
        toast("Failed to load game");
      }
    };
    load();
  }, [currentUser, gameId]);

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setShowCategories(false);
      }
      if (gameDropdownRef.current && !gameDropdownRef.current.contains(event.target as Node)) {
        setShowGameDropdown(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  const handleSetCategory = async (category: string) => {
    if (!gameId || !isAdmin) return;
    const disabled = await updateGameCategory(gameId, category);
    setGame((prev: any) => ({ ...prev, disabledCategories: disabled }));
  };

  const isDisabled = (category: string): boolean => !!game?.disabledCategories?.includes(category);

  const openListEditor = async () => {
    if (!isAdmin) return;
    const listId = game?.list?._id;
    if (!listId) return;
    try {
      const list = await getList(listId);
      setEditorList(list);
      setEditorMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setEditorVisible(true)));
    } catch {
      toast("Failed to load list editor");
    }
  };

  const closeListEditor = () => {
    setEditorVisible(false);
    setTimeout(() => {
      setEditorList(null);
      setEditorMounted(false);
    }, 320);
  };

  const saveListEditor = async (listToSave: TenThingsList) => {
    try {
      const saved = await updateList(listToSave);
      setEditorList(saved);
      setGame((prev: any) =>
        prev
          ? {
              ...prev,
              list: {
                ...prev.list,
                name: saved.name,
                categories: saved.categories,
              },
            }
          : prev,
      );
    } catch {
      toast("Failed to save list");
    }
  };

  const getDisabledCategoryLabel = () => {
    if (!game?.disabledCategories?.length) return "No disabled categories";

    const mainCategories = game.disabledCategories.filter((c: string) => !c.includes("."));
    if (mainCategories.length > 0) {
      return mainCategories
        .sort()
        .map((main: string) => {
          const option = categories.find((cat) => cat.value === main);
          const label = option?.label ?? main;
          const subLabels = (option?.subcategories ?? [])
            .filter((sub) => game.disabledCategories.includes(sub.value))
            .map((sub) => sub.label)
            .sort();
          return `${label}${subLabels.length ? ` (${subLabels.join(", ")})` : ""}`;
        })
        .join(", ");
    }

    const disabledLabels = game.disabledCategories
      .map((value: string) => {
        const [main, sub] = value.split(".");
        const mainOption = categories.find((cat) => cat.value === main);
        if (!sub) return mainOption?.label ?? value;
        const subLabel = mainOption?.subcategories?.find((s) => s.value === value)?.label ?? sub;
        return `${mainOption?.label ?? main}: ${subLabel}`;
      })
      .sort();

    return disabledLabels.join(", ");
  };

  const formatDate = (value?: string) => (value ? moment(value).format("DD-MMM-YYYY HH:mm") : "");
  const formatShortDate = (value?: string) => (value ? moment(value).format("DD-MMM-YYYY") : "");

  if (!currentUser) return <h2 className="text-muted">Log in to view your game.</h2>;
  if (!currentUser.telegramId && !isAdmin)
    return <h2 className="text-muted">Link your Telegram account in your profile to view your game.</h2>;

  const gameUrlId = (g: MyGame) => (g.telegramChatId ? String(g.telegramChatId) : g._id);
  const gameLabel = (g: MyGame) => {
    const name = g.platform ? g.platform.charAt(0).toUpperCase() + g.platform.slice(1) : "Game";
    return g.telegramChatId ? `${name} ${g.telegramChatId}` : name;
  };
  const currentGame = myGames.find((g) => gameUrlId(g) === gameId);
  const currentGameLabel = currentGame ? gameLabel(currentGame) : gameId ? `Game ${gameId}` : "Select game";

  return (
    <PageContainer id="tenthingsgame-page" className="container-fluid">
      <HeaderCompact className="page-header">
        <HeaderTitle>
          {game ? (
            <>
              {game.platform ? game.platform.charAt(0).toUpperCase() + game.platform.slice(1) : "Game"}{" "}
              {game.telegramChatId}
              {game.telegramTopicId ? <small> Topic {game.telegramTopicId}</small> : null}
            </>
          ) : (
            "Ten Things Game"
          )}
        </HeaderTitle>

        {myGames.length > 1 && (
          <div ref={gameDropdownRef} className={`dropdown btn-group${showGameDropdown ? " open" : ""}`}>
            <button
              className="btn btn-default btn-sm dropdown-toggle"
              type="button"
              onClick={() => setShowGameDropdown((s) => !s)}
            >
              {currentGameLabel} <span className="caret" />
            </button>
            <ul className="dropdown-menu">
              {myGames.map((g) => (
                <li key={gameUrlId(g)} className={gameUrlId(g) === gameId ? "active" : ""}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowGameDropdown(false);
                      navigate(`/tenthings-game/${gameUrlId(g)}`);
                    }}
                  >
                    {gameLabel(g)}
                    {g.lastPlayDate && (
                      <span className="text-muted" style={{ marginLeft: 8, fontSize: 12 }}>
                        {formatShortDate(g.lastPlayDate)}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </HeaderCompact>

      {game && (
        <>
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <CompactPanel className="panel panel-default">
                <div className="panel-heading">
                  <strong>Settings</strong>
                </div>
                <SettingsBody className="panel-body">
                  {(["intro", "sass", "snubs", "updates"] as const).map((key) => (
                    <MetricRow key={key}>
                      <b style={{ textTransform: "capitalize" }}>{key}</b>
                      {isAdmin ? (
                        <SwitchLabel>
                          <SwitchInput
                            checked={!!game.settings?.[key]}
                            disabled={settingsSaving}
                            onChange={() => handleSettingToggle(key)}
                          />
                          <SwitchSlider checked={!!game.settings?.[key]} />
                        </SwitchLabel>
                      ) : (
                        <span className={`label ${game.settings?.[key] ? "label-success" : "label-default"}`}>
                          {game.settings?.[key] ? "On" : "Off"}
                        </span>
                      )}
                    </MetricRow>
                  ))}
                  <MetricRow>
                    <b>Bot Language</b>
                    {isAdmin ? (
                      <div className="dropdown btn-group" style={{ maxWidth: 180 }}>
                        <button
                          className="btn btn-default dropdown-toggle"
                          type="button"
                          disabled={settingsSaving}
                          onClick={(e) => {
                            e.preventDefault();
                            setShowLangDropdown((s) => !s);
                          }}
                        >
                          {languages.find((l) => l.code === game.settings?.language)?.native || "Select..."}
                          <span className="caret" style={{ marginLeft: 8 }} />
                        </button>
                        <ul
                          className={`dropdown-menu${showLangDropdown ? " show" : ""}`}
                          style={{ maxHeight: 220, overflowY: "auto", minWidth: 120 }}
                        >
                          {languages.map((l) => (
                            <li key={l.code} className={l.code === game.settings?.language ? "active" : ""}>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleSettingChange("language", l.code);
                                  setShowLangDropdown(false);
                                }}
                              >
                                {l.code} - {l.native}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <span>{game.settings?.language || "-"}</span>
                    )}
                  </MetricRow>
                  <MetricRow>
                    <b>Hints</b>
                    <span>{game.hints}</span>
                  </MetricRow>
                  <MetricRow>
                    <b>Last Played</b>
                    <span>{formatDate(game.lastPlayDate)}</span>
                  </MetricRow>
                  <MetricRow>
                    <b>Lists Played</b>
                    <span>{game.listsPlayed}</span>
                  </MetricRow>
                </SettingsBody>
              </CompactPanel>

              {isAdmin && (
                <CompactPanel className="panel panel-default">
                  <div className="panel-heading">
                    <strong>Disabled Categories</strong>
                  </div>
                  <SettingsBody className="panel-body">
                    <CategoryDropdownRoot
                      ref={categoryRef}
                      className={`dropdown btn-group btn-block${showCategories ? " open" : ""}`}
                    >
                      <button
                        className={`btn dropdown-toggle btn-block text-left ${game.disabledCategories?.length ? "btn-warning" : "btn-default"}`}
                        type="button"
                        onClick={() => setShowCategories((s) => !s)}
                        title="Disabled categories"
                      >
                        {getDisabledCategoryLabel()}
                      </button>
                      <CategoryMenu className="dropdown-menu">
                        <CategoryMenuList>
                          {categories
                            .slice()
                            .sort((a, b) => a.value.localeCompare(b.value))
                            .map((category) => (
                              <CategoryRow key={category.value}>
                                <CategoryMainButton
                                  type="button"
                                  className={`btn btn-xs ${isDisabled(category.value) ? "btn-warning" : "btn-default"}`}
                                  onClick={() => handleSetCategory(category.value)}
                                >
                                  {category.label}
                                </CategoryMainButton>

                                {category.subcategories && category.subcategories.length > 0 && (
                                  <>
                                    <CategoryArrow>›</CategoryArrow>
                                    <CategorySubgroup>
                                      {category.subcategories
                                        .slice()
                                        .sort((a, b) => a.value.localeCompare(b.value))
                                        .map((subcategory) => (
                                          <button
                                            key={subcategory.value}
                                            type="button"
                                            className={`btn btn-xs ${isDisabled(subcategory.value) ? "btn-warning" : "btn-default"}`}
                                            onClick={() => handleSetCategory(subcategory.value)}
                                          >
                                            {subcategory.label}
                                          </button>
                                        ))}
                                    </CategorySubgroup>
                                  </>
                                )}
                              </CategoryRow>
                            ))}
                        </CategoryMenuList>
                      </CategoryMenu>
                    </CategoryDropdownRoot>
                  </SettingsBody>
                </CompactPanel>
              )}
            </div>

            <div className="col-lg-8 col-md-7">
              <CompactPanel className="panel panel-default">
                <div className="panel-heading">
                  <strong>Current List + Mini Games</strong>
                </div>
                <SectionBody className="panel-body">
                  {isAdmin && (
                    <MiniGameRow className="row">
                      <div className="col-sm-6">
                        <MiniGameWell className="well well-sm">
                          <strong>Minigame:</strong> {game.minigame?.answer || "-"}
                          <MiniGameMeta className="text-muted">{game.minigame?.lists?.join(" / ") || ""}</MiniGameMeta>
                        </MiniGameWell>
                      </div>
                      <div className="col-sm-6">
                        <MiniGameWell className="well well-sm">
                          <strong>Tinygame:</strong> {game.tinygame?.answer || "-"}
                          <MiniGameMeta className="text-muted">{game.tinygame?.clues?.join(" / ") || ""}</MiniGameMeta>
                        </MiniGameWell>
                      </div>
                    </MiniGameRow>
                  )}

                  <ListTitle>
                    {game.list?._id && isAdmin ? (
                      <ListTitleButton
                        type="button"
                        className="btn btn-link"
                        title="Open list editor"
                        onClick={openListEditor}
                      >
                        {game.list?.name}
                      </ListTitleButton>
                    ) : (
                      game.list?.name
                    )}
                  </ListTitle>
                  <CategoriesText className="text-muted">
                    Categories: {game.list?.categories?.join(", ")}
                  </CategoriesText>
                  <GuessedText className="text-muted">
                    {(() => {
                      const values = game.list?.values || [];
                      const guessed = values.filter(
                        (v: any) => !!(v.guesser?.username || v.guesser?.first_name || v.guesser?._id),
                      ).length;
                      return `${guessed}/${values.length} guessed`;
                    })()}
                  </GuessedText>
                  <ValuesScroll>
                    {(() => {
                      const sortedValues = (game.list?.values || [])
                        .slice()
                        .sort((a: any, b: any) => String(a.value).localeCompare(String(b.value)));
                      const leftColumn = sortedValues.slice(0, 5);
                      const rightColumn = sortedValues.slice(5, 10);

                      const renderValueRow = (item: any, idx: number) => {
                        const guessed = !!(item.guesser?.username || item.guesser?.first_name || item.guesser?._id);
                        return (
                          <ValueItem key={`${item.value}-${idx}`} className="list-group-item">
                            <ValueStatus className={`label ${guessed ? "label-success" : "label-default"}`}>
                              {guessed ? "Guessed" : "Open"}
                            </ValueStatus>
                            <ValueText $guessed={guessed}>{item.value}</ValueText>
                          </ValueItem>
                        );
                      };

                      return (
                        <ValuesRow className="row">
                          <ValuesColLeft className="col-sm-6">
                            <ListGroupNoMargin className="list-group">
                              {leftColumn.map(renderValueRow)}
                            </ListGroupNoMargin>
                          </ValuesColLeft>
                          <ValuesColRight className="col-sm-6">
                            <ListGroupNoMargin className="list-group">
                              {rightColumn.map((item: any, idx: number) => renderValueRow(item, idx + 5))}
                            </ListGroupNoMargin>
                          </ValuesColRight>
                        </ValuesRow>
                      );
                    })()}
                  </ValuesScroll>
                </SectionBody>
              </CompactPanel>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <CompactPanel className="panel panel-default">
                <div className="panel-heading">
                  <strong>Players ({game.players?.length || 0})</strong>
                </div>
                <PlayersBody className="panel-body">
                  <PlayersScroll>
                    <PlayersTable className="table table-striped table-condensed">
                      <thead>
                        <tr>
                          {[
                            { label: "Name", field: "name" },
                            { label: "Wins", field: "wins" },
                            { label: "Ans", field: "answers" },
                            { label: "High", field: "highScore" },
                            { label: "Score", field: "score" },
                            { label: "Hints", field: "hints" },
                            { label: "Snubs", field: "snubs" },
                            { label: "Skips", field: "skips" },
                            { label: "Vetoes", field: "vetoes" },
                            { label: "Sug", field: "suggestions" },
                            { label: "Search", field: "searches" },
                            { label: "Streak", field: "streak" },
                            { label: "Play (max)", field: "playStreak" },
                            { label: "Hint (max)", field: "hintStreak" },
                            { label: "Last Played", field: "lastPlayDate" },
                          ].map(({ label, field }) => (
                            <th
                              key={field}
                              style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                              onClick={() => handlePlayerSort(field)}
                            >
                              {label}
                              {playerSortIcon(field)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {(game.players || [])
                          .slice()
                          .sort((a: any, b: any) => {
                            const get = (p: any) => {
                              if (playerSortField === "name") return (p.username || p.first_name || "").toLowerCase();
                              if (playerSortField === "lastPlayDate") return new Date(p.lastPlayDate || 0).getTime();
                              return p[playerSortField] ?? 0;
                            };
                            const av = get(a),
                              bv = get(b);
                            if (av < bv) return -playerSortDir;
                            if (av > bv) return playerSortDir;
                            return 0;
                          })
                          .map((player: any) => (
                            <tr key={player._id || player.chat_id || `${player.username}-${player.first_name}`}>
                              <td>{player.username || player.first_name}</td>
                              <td>{player.wins}</td>
                              <td>{player.answers}</td>
                              <td>{player.highScore}</td>
                              <td>{player.score}</td>
                              <td>{player.hints}</td>
                              <td>{player.snubs}</td>
                              <td>{player.skips}</td>
                              <td>{player.vetoes}</td>
                              <td>{player.suggestions}</td>
                              <td>{player.searches}</td>
                              <td>{player.streak}</td>
                              <td>
                                {player.playStreak} ({player.maxPlayStreak})
                              </td>
                              <td>
                                {player.hintStreak} ({player.maxHintStreak})
                              </td>
                              <td>{formatShortDate(player.lastPlayDate)}</td>
                            </tr>
                          ))}
                      </tbody>
                    </PlayersTable>
                  </PlayersScroll>
                </PlayersBody>
              </CompactPanel>
            </div>
          </div>
        </>
      )}

      {!game && gameId && <p className="text-muted">Loading game {gameId}...</p>}

      {!gameId && myGames.length === 0 && (
        <p className="text-muted">
          No games found. Make sure your Telegram account is linked and you are playing in a TenThings group.
        </p>
      )}

      {isAdmin && editorMounted && editorList && (
        <>
          <ListEditor
            list={editorList}
            active={editorVisible}
            isAdmin={isAdmin}
            readOnly={false}
            languageOptions={languages}
            categoryOptions={categories}
            onClose={closeListEditor}
            onChange={setEditorList}
            onBlur={saveListEditor}
            onDelete={() => {}}
          />
          <EditorBackdrop $visible={editorVisible} onClick={closeListEditor} />
        </>
      )}
    </PageContainer>
  );
}
