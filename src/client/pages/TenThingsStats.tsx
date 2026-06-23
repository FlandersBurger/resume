import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import {
  getPlayStats,
  getListLanguageStats,
  getGameStats,
  getListCategoryStats,
  getListRanking,
  getSkipRateTrend,
  getLowQualityLists,
  getCategories,
  getLanguages,
  getList,
  LIST_STAT_KEYS,
  ListStatKey,
  RankRow,
  CategoryOption,
  Language,
  TenThingsList,
} from "../services/tenthings";
import { useApp } from "../context/AppContext";
import { ListEditor } from "./tenthings/ListEditor";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, Filler);

const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  cursor: pointer;
  display: ${({ $visible }) => ($visible ? "block" : "none")};
`;

type PlayRow = { month: number; year: number; uniquePlayers: number; listsPlayed: number };
type SkipTrendRow = { year: number; month: number; skipRate: number; total: number };
type YearLangRow = { _id: { language: string; year: number }; count: number };
type CategoryRow = { _id: string; count: number };

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const PALETTE = [
  "#4e79a7",
  "#f28e2b",
  "#e15759",
  "#76b7b2",
  "#59a14f",
  "#edc948",
  "#b07aa1",
  "#ff9da7",
  "#9c755f",
  "#bab0ac",
];

function uniq<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

const LIST_TABLE_DEFS: { key: ListStatKey; title: string; pct?: boolean }[] = [
  { key: "mostplayed", title: "Most Played" },
  { key: "mostskipped", title: "Most Skipped", pct: true },
  { key: "mosthinted", title: "Most Hints Asked", pct: true },
  { key: "mostliked", title: "Most Liked", pct: true },
  { key: "leastliked", title: "Least Liked", pct: true },
  { key: "mostbanned", title: "Most Banned" },
  { key: "mostupvoted", title: "Most Upvoted" },
  { key: "mostdownvoted", title: "Most Downvoted" },
];

function StatTable({
  title,
  rows,
  pct,
  onRowClick,
}: {
  title: string;
  rows: RankRow[];
  pct?: boolean;
  onRowClick?: (id: string) => void;
}) {
  return (
    <table className="table table-sm table-bordered" style={{ fontSize: 12, marginBottom: 0 }}>
      <thead className="table-dark">
        <tr>
          <th colSpan={3} style={{ textAlign: "center", padding: "4px 6px" }}>
            {title}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            style={onRowClick && row._id ? { cursor: "pointer" } : undefined}
            onClick={onRowClick && row._id ? () => onRowClick(row._id!) : undefined}
          >
            <td style={{ width: 22, color: "#999", padding: "2px 4px" }}>{i + 1}</td>
            <td
              style={{
                maxWidth: 160,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                padding: "2px 4px",
              }}
              title={row.name}
            >
              {row.name}
            </td>
            <td style={{ width: 56, textAlign: "right", padding: "2px 4px" }}>
              {pct ? `${row.value}%` : row.value.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function TenThingsStats() {
  const { currentUser, isAdmin } = useApp();
  const [playStats, setPlayStats] = useState<PlayRow[]>([]);
  const [langStats, setLangStats] = useState<YearLangRow[]>([]);
  const [gameStats, setGameStats] = useState<YearLangRow[]>([]);
  const [categoryStats, setCategoryStats] = useState<CategoryRow[]>([]);
  const [skipTrend, setSkipTrend] = useState<SkipTrendRow[]>([]);
  const [lowQualityLists, setLowQualityLists] = useState<RankRow[]>([]);
  const [listRankings, setListRankings] = useState<Record<string, RankRow[]>>({});
  const [categoryOptions, setCategoryOptions] = useState<CategoryOption[]>([]);
  const [languageOptions, setLanguageOptions] = useState<Language[]>([]);
  const [languageFilter, setLanguageFilter] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [myListsOnly, setMyListsOnly] = useState(false);
  const [selectedList, setSelectedList] = useState<TenThingsList | null>(null);
  const [editorVisible, setEditorVisible] = useState(false);
  const [editorMounted, setEditorMounted] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    getPlayStats().then((d) => setPlayStats(d || []));
    getListLanguageStats().then((d) => setLangStats(d || []));
    getGameStats().then((d) => setGameStats(d || []));
    getSkipRateTrend().then((d) => setSkipTrend(d || []));
    getLowQualityLists().then((d) => setLowQualityLists(d || []));
    getCategories()
      .then(setCategoryOptions)
      .catch(() => setCategoryOptions([]));
    getLanguages()
      .then(setLanguageOptions)
      .catch(() => setLanguageOptions([]));
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) return;
    setListRankings({});
    const opts = {
      language: languageFilter,
      categories: categoryFilter,
      creator: myListsOnly ? currentUser._id : undefined,
    };
    getListCategoryStats(opts)
      .then((d) => setCategoryStats(d || []))
      .catch(() => setCategoryStats([]));
    (async () => {
      for (const stat of LIST_STAT_KEYS) {
        try {
          const rows = await getListRanking(stat, opts);
          setListRankings((prev) => ({ ...prev, [stat]: rows }));
        } catch {
          // leave this stat empty rather than stopping the whole loop
        }
      }
    })();
  }, [languageFilter, categoryFilter, myListsOnly, currentUser]);

  const handleRowClick = async (id: string) => {
    const data = await getList(id);
    setSelectedList(data);
    setEditorMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setEditorVisible(true)));
  };

  const handleEditorClose = () => {
    setEditorVisible(false);
    setTimeout(() => {
      setSelectedList(null);
      setEditorMounted(false);
    }, 320);
  };

  if (!currentUser) return <h2 className="text-muted">Log in to view stats.</h2>;

  // ── Play stats ──
  const playYears = uniq(playStats.map((r) => r.year)).sort();
  const playData = {
    labels: MONTH_LABELS,
    datasets: playYears.map((year, i) => ({
      label: String(year),
      data: MONTH_LABELS.map((_, mi) => {
        const row = playStats.find((r) => r.year === year && r.month === mi + 1);
        return row ? Math.round(row.uniquePlayers) : null;
      }),
      borderColor: PALETTE[i % PALETTE.length],
      backgroundColor: PALETTE[i % PALETTE.length] + "33",
      tension: 0.3,
      spanGaps: true,
    })),
  };

  const listsPlayedData = {
    labels: MONTH_LABELS,
    datasets: playYears.map((year, i) => ({
      label: String(year),
      data: MONTH_LABELS.map((_, mi) => {
        const row = playStats.find((r) => r.year === year && r.month === mi + 1);
        return row ? Math.round(row.listsPlayed) : null;
      }),
      borderColor: PALETTE[i % PALETTE.length],
      backgroundColor: PALETTE[i % PALETTE.length] + "33",
      tension: 0.3,
      spanGaps: true,
    })),
  };

  // ── Language stats ──
  const langYears = uniq(langStats.map((r) => r._id.year)).sort();
  const langLanguages = uniq(langStats.map((r) => r._id.language)).sort();
  const langData = {
    labels: langYears.map(String),
    datasets: langLanguages.map((lang, i) => ({
      label: lang,
      data: langYears.map(
        (year) => langStats.find((r) => r._id.language === lang && r._id.year === year)?.count ?? null,
      ),
      borderColor: PALETTE[i % PALETTE.length],
      backgroundColor: PALETTE[i % PALETTE.length] + "33",
      tension: 0.3,
      spanGaps: true,
    })),
  };

  // ── Game stats ──
  const gameYears = uniq(gameStats.map((r) => r._id.year)).sort();
  const gameLanguages = uniq(gameStats.map((r) => r._id.language)).sort();
  const gameData = {
    labels: gameYears.map(String),
    datasets: gameLanguages.map((lang, i) => ({
      label: lang,
      data: gameYears.map(
        (year) => gameStats.find((r) => r._id.language === lang && r._id.year === year)?.count ?? null,
      ),
      borderColor: PALETTE[i % PALETTE.length],
      backgroundColor: PALETTE[i % PALETTE.length] + "33",
      tension: 0.3,
      spanGaps: true,
    })),
  };

  // ── Skip rate trend ──
  const skipTrendLabels = skipTrend.map((r) => `${MONTH_LABELS[r.month - 1]} ${r.year}`);
  const skipTrendData = {
    labels: skipTrendLabels,
    datasets: [
      {
        label: "Global Skip Rate %",
        data: skipTrend.map((r) => r.skipRate),
        backgroundColor: PALETTE[2] + "cc",
        borderColor: PALETTE[2],
        borderWidth: 1,
      },
    ],
  };

  // ── Category stats ──
  const topCats = [...categoryStats].sort((a, b) => b.count - a.count).slice(0, 30);
  const catData = {
    labels: topCats.map((r) => r._id),
    datasets: [
      {
        label: "Lists",
        data: topCats.map((r) => r.count),
        backgroundColor: topCats.map((_, i) => PALETTE[i % PALETTE.length] + "cc"),
      },
    ],
  };

  const lineOpts = (title: string) => ({
    responsive: true,
    plugins: { legend: { position: "top" as const }, title: { display: true, text: title } },
  });

  return (
    <div className="page container-fluid">
      <h1 style={{ marginTop: 0 }}>Ten Things Stats</h1>

      {/* ── List Rankings ─────────────────────────────────────────── */}
      <h4 style={{ marginBottom: 12 }}>List Rankings</h4>

      {(categoryOptions.length > 0 || languageOptions.length > 0) && (
        <div className="panel panel-default" style={{ marginBottom: 16 }}>
          <div className="panel-body" style={{ padding: "8px 12px" }}>
            <div style={{ marginBottom: 6 }}>
              <button
                className={`btn btn-xs ${myListsOnly ? "btn-warning" : "btn-default"}`}
                onClick={() => setMyListsOnly((v) => !v)}
              >
                <i className="fas fa-user" /> My Lists
              </button>
            </div>
            {languageOptions.length > 0 && (
              <div style={{ marginBottom: 6 }}>
                <strong style={{ marginRight: 8 }}>Language:</strong>
                {languageOptions.map((lang) => {
                  const active = languageFilter.includes(lang.code);
                  return (
                    <button
                      key={lang.code}
                      className={`btn btn-xs ${active ? "btn-primary" : "btn-default"}`}
                      style={{ margin: "2px 3px" }}
                      onClick={() =>
                        setLanguageFilter(
                          active ? languageFilter.filter((c) => c !== lang.code) : [...languageFilter, lang.code],
                        )
                      }
                    >
                      {lang.code}
                    </button>
                  );
                })}
                {languageFilter.length > 0 && (
                  <button
                    className="btn btn-xs btn-danger"
                    style={{ margin: "2px 3px" }}
                    onClick={() => setLanguageFilter([])}
                  >
                    <i className="fas fa-times" /> Clear
                  </button>
                )}
              </div>
            )}
            {categoryOptions.length > 0 && (
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <strong style={{ marginRight: 8, whiteSpace: "nowrap", lineHeight: "22px" }}>Category:</strong>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {categoryOptions.map((cat) => {
                    const active = categoryFilter.includes(cat.value);
                    return (
                      <button
                        key={cat.value}
                        className={`btn btn-xs ${active ? "btn-info" : "btn-default"}`}
                        style={{ margin: "2px 3px" }}
                        onClick={() =>
                          setCategoryFilter(
                            active ? categoryFilter.filter((c) => c !== cat.value) : [...categoryFilter, cat.value],
                          )
                        }
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                  {categoryFilter.length > 0 && (
                    <button
                      className="btn btn-xs btn-danger"
                      style={{ margin: "2px 3px" }}
                      onClick={() => setCategoryFilter([])}
                    >
                      <i className="fas fa-times" /> Clear
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="row" style={{ marginBottom: 16 }}>
        {LIST_TABLE_DEFS.map(({ key, title, pct }) => (
          <div key={key} className="col-md-4" style={{ marginBottom: 16 }}>
            <StatTable title={title} rows={listRankings[key] ?? []} pct={pct} onRowClick={handleRowClick} />
          </div>
        ))}
      </div>

      {categoryStats.length > 0 && (
        <div className="row" style={{ marginBottom: 32 }}>
          <div className="col-md-12">
            <Bar
              data={catData}
              options={{
                indexAxis: "y",
                responsive: true,
                plugins: {
                  legend: { display: false },
                  title: { display: true, text: "Top 30 Categories by List Count" },
                },
              }}
            />
          </div>
        </div>
      )}

      {/* ── Charts ───────────────────────────────────────────────── */}
      <h4 style={{ marginBottom: 12 }}>Charts</h4>

      <div className="row" style={{ marginBottom: 32 }}>
        <div className="col-md-6">
          <Line data={playData} options={lineOpts("Unique Players per Month")} />
        </div>
        <div className="col-md-6">
          <Line data={listsPlayedData} options={lineOpts("Lists Played per Month")} />
        </div>
      </div>

      <div className="row" style={{ marginBottom: 32 }}>
        <div className="col-md-6">
          <Line data={langData} options={lineOpts("Lists Created by Language (per Year)")} />
        </div>
        <div className="col-md-6">
          <Line data={gameData} options={lineOpts("Games Played by Language (per Year)")} />
        </div>
      </div>

      {skipTrend.length > 0 && (
        <div className="row" style={{ marginBottom: 32 }}>
          <div className="col-md-12">
            <Bar
              data={skipTrendData}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                  title: { display: true, text: "Global Skip Rate by Month (%)" },
                },
                scales: { y: { min: 0, max: 100 } },
              }}
            />
          </div>
        </div>
      )}

      {lowQualityLists.length > 0 && (
        <>
          <h4 style={{ marginBottom: 12 }}>Low Quality Lists</h4>
          <div className="row" style={{ marginBottom: 32 }}>
            <div className="col-md-4">
              <StatTable
                title="Highest Global Skip Rate"
                rows={lowQualityLists.slice(0, 10)}
                pct
                onRowClick={handleRowClick}
              />
            </div>
          </div>
        </>
      )}

      {/* ── ListEditor ───────────────────────────────────────────── */}
      {editorMounted && selectedList && (
        <ListEditor
          list={selectedList}
          active={editorVisible}
          isAdmin={isAdmin}
          readOnly={false}
          languageOptions={languageOptions}
          categoryOptions={categoryOptions}
          onClose={handleEditorClose}
          onChange={setSelectedList}
          onBlur={() => {}}
          onDelete={() => {}}
        />
      )}
      {editorMounted && <Overlay $visible={editorVisible} onClick={handleEditorClose} />}
    </div>
  );
}
