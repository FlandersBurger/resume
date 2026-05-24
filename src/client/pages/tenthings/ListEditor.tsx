import { useState, useRef, memo, useCallback, useEffect } from "react";
import { TenThingsList, TenThingsValue, Language, CategoryOption, getBlurbs } from "../../services/tenthings";

const OBJECT_CATEGORIES = ["culture", "nature", "misc", "society", "sports"];

const BLURB_TYPES = [
  { api: "movies", categories: ["movies"], text: "Get movie posters", adminOnly: false },
  { api: "tv", categories: ["television"], text: "Get TV posters", adminOnly: false },
  { api: "actors", categories: ["movies", "television"], text: "Get actor pics", adminOnly: false },
  { api: "books", categories: ["literature"], text: "Get book covers", adminOnly: false },
  { api: "musicvideos", categories: ["music"], text: "Get music videos", adminOnly: true },
  { api: "unsplash", categories: OBJECT_CATEGORIES, text: "Get Unsplash pics", adminOnly: false },
  { api: "pexels", categories: OBJECT_CATEGORIES, text: "Get Pexels pics", adminOnly: false },
  { api: "wiki", categories: OBJECT_CATEGORIES, text: "Get Wiki pics", adminOnly: false },
];

function getEmbedUrl(url: string): string {
  if (url.includes("youtube.com")) {
    const m = url.match(/[?&]v=([^&]+)/);
    return m ? `https://www.youtube.com/embed/${m[1].trim()}` : url;
  } else if (url.includes("youtu.be")) {
    const m = url.match(/youtu\.be\/([^&?]+)/);
    return m ? `https://www.youtube.com/embed/${m[1].trim()}` : url;
  } else if (url.includes("vimeo.com")) {
    const m = url.match(/vimeo\.com\/(\d+)/);
    return m ? `https://player.vimeo.com/video/${m[1].trim()}` : url;
  } else if (url.includes("open.spotify")) {
    const m = url.match(/track\/([^&?]+)/);
    return m ? `https://open.spotify.com/embed/track/${m[1].trim()}` : url;
  }
  return url;
}

function BlurbModal({ item, onClose }: { item: TenThingsValue; onClose: () => void }) {
  return (
    <div
      className="modal fade in"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)", overflowY: "auto" }}
      onClick={onClose}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onClose}>
              &times;
            </button>
            <h3 className="modal-title">{item.value}</h3>
          </div>
          <div className="modal-body" style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
            {item.blurbType === "image" && (
              <img src={item.blurb} alt={item.value} style={{ maxWidth: "100%", display: "block", margin: "0 auto" }} />
            )}
            {(item.blurbType === "youtube" || item.blurbType === "spotify" || item.blurbType === "link") &&
              item.blurb && (
                <iframe width="100%" height="315" frameBorder={0} src={getEmbedUrl(item.blurb)} allowFullScreen />
              )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  list: TenThingsList;
  active: boolean;
  isAdmin: boolean;
  readOnly: boolean;
  languageOptions: Language[];
  categoryOptions: CategoryOption[];
  onClose: () => void;
  onChange: (list: TenThingsList) => void;
  onBlur: (list: TenThingsList) => void;
  onDelete: () => void;
}

const fmt = (d?: string) => {
  if (!d) return "";
  const date = new Date(d);
  return `${String(date.getDate()).padStart(2, "0")}-${date.toLocaleString("en", { month: "short" })}-${date.getFullYear()}`;
};

const pct = (n?: number) => (n != null ? `${Math.round(n * 100)}%` : "");

function AutoTextarea({
  value,
  onChange,
  onBlur,
  placeholder,
  disabled,
}: {
  value: string;
  onChange?: (v: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const COLLAPSED = 43;
  // Read scrollHeight directly — with overflow:hidden, scrollHeight always equals natural content height
  // regardless of the box height, so no need to clear height first (avoids double reflow).
  const expand = () => {
    if (ref.current) {
      const natural = ref.current.scrollHeight;
      if (natural > COLLAPSED) ref.current.style.height = natural + "px";
    }
  };
  const collapse = () => {
    if (ref.current) ref.current.style.height = COLLAPSED + "px";
  };
  return (
    <textarea
      ref={ref}
      className="form-control"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => {
        onChange?.(e.target.value);
        expand();
      }}
      onFocus={expand}
      onBlur={() => {
        collapse();
        onBlur?.();
      }}
      style={{ resize: "none", overflow: "hidden", height: COLLAPSED }}
      maxLength={3500}
    />
  );
}

const ValueRow = memo(
  function ValueRow({
    v,
    index,
    readOnly,
    total,
    onUpdate,
    onRemove,
    onBlurbClick,
  }: {
    v: TenThingsValue;
    index: number;
    readOnly: boolean;
    total: number;
    onUpdate: (index: number, patch: Partial<TenThingsValue>) => void;
    onRemove: (index: number) => void;
    onBlurbClick: (v: TenThingsValue) => void;
  }) {
    const [localValue, setLocalValue] = useState(v.value);
    const [localBlurb, setLocalBlurb] = useState(v.blurb ?? "");
    // Keep local state in sync when parent resets (e.g. after save)
    const prevId = useRef(v._id);
    if (v._id !== prevId.current) {
      prevId.current = v._id;
      setLocalValue(v.value);
      setLocalBlurb(v.blurb ?? "");
    }

    const canDelete = total > 10;
    return (
      <tr>
        <td className="hidden-xs hidden-sm visible-md visible-lg icon-column" title={v.creator?.username}>
          <i className="fas fa-user" />
        </td>
        <td className="hidden-xs hidden-sm visible-md visible-lg icon-column" title={fmt(v.date)}>
          <i className="fas fa-calendar" />
        </td>
        <td className="input-cell">
          {readOnly ? (
            <span>{v.value}</span>
          ) : (
            <AutoTextarea
              value={localValue}
              placeholder={`Answer ${total - index}`}
              onChange={setLocalValue}
              onBlur={() => {
                if (localValue !== v.value) onUpdate(index, { value: localValue });
              }}
            />
          )}
        </td>
        <td className="input-cell">
          {readOnly ? (
            <span>{v.blurb ?? ""}</span>
          ) : (
            <AutoTextarea
              value={localBlurb}
              placeholder={`Display after guessing ${v.value || "answer"} (Can be a URL)`}
              onChange={setLocalBlurb}
              onBlur={() => {
                if (localBlurb !== (v.blurb ?? "")) onUpdate(index, { blurb: localBlurb });
              }}
            />
          )}
        </td>
        <td className="image-cell" style={{ width: 36 }} onClick={() => v.blurb && onBlurbClick(v)}>
          {v.blurb && (
            <img
              src={
                v.blurbType === "image"
                  ? v.blurb
                  : `https://img.youtube.com/vi/${v.blurb?.match(/[?&]v=([^&]+)/)?.[1] ?? ""}/default.jpg`
              }
              alt=""
              style={{ width: 28, height: 28, objectFit: "cover", cursor: "pointer" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          )}
        </td>
        <td
          className={canDelete ? "delete-column" : "disabled-column"}
          onClick={() => canDelete && !readOnly && onRemove(index)}
        >
          <i className="fas fa-trash" />
        </td>
      </tr>
    );
  },
  (prev, next) =>
    prev.v._id === next.v._id &&
    prev.v.value === next.v.value &&
    prev.v.blurb === next.v.blurb &&
    prev.v.blurbType === next.v.blurbType &&
    prev.readOnly === next.readOnly &&
    prev.total === next.total &&
    prev.index === next.index,
  // onUpdate/onRemove/onBlurbClick are stable (empty useCallback deps), no need to compare
);

export function ListEditor({
  list,
  active,
  isAdmin,
  readOnly,
  languageOptions,
  categoryOptions,
  onClose,
  onChange,
  onBlur,
  onDelete,
}: Props) {
  const [newItem, setNewItem] = useState({ value: "", blurb: "" });
  const [showCategories, setShowCategories] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TenThingsValue | null>(null);
  const [gettingBlurbs, setGettingBlurbs] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setShowLanguages(false);
      if (catRef.current && !catRef.current.contains(e.target as Node)) setShowCategories(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Stable refs so callbacks never change identity, keeping ValueRow memo effective
  const listRef = useRef(list);
  listRef.current = list;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const onBlurRef = useRef(onBlur);
  onBlurRef.current = onBlur;

  const addValue = () => {
    if (!newItem.value) return;
    onChangeRef.current({
      ...listRef.current,
      values: [...listRef.current.values, { _id: `tmp-${Date.now()}`, value: newItem.value, blurb: newItem.blurb }],
    });
    setNewItem({ value: "", blurb: "" });
  };

  const updateValue = useCallback((index: number, patch: Partial<TenThingsValue>) => {
    const l = listRef.current;
    const updated = { ...l, values: l.values.map((v, i) => (i === index ? { ...v, ...patch } : v)) };
    onChangeRef.current(updated);
    onBlurRef.current(updated);
  }, []); // stable — reads latest list via ref

  const removeValue = useCallback((index: number) => {
    const l = listRef.current;
    onChangeRef.current({ ...l, values: l.values.filter((_, i) => i !== index) });
  }, []); // stable — reads latest list via ref

  const toggleCategory = (cat: string) => {
    const cats = list.categories.includes(cat) ? list.categories.filter((c) => c !== cat) : [...list.categories, cat];
    const updated = { ...list, categories: cats };
    onChange(updated);
    onBlur(updated);
  };

  const getCategoryLabel = () => {
    if (!list.categories.length)
      return (
        <>
          <i className="fas fa-tags" /> Select...
        </>
      );
    const mainCats = list.categories.filter((c) => !c.includes("."));
    const label = mainCats
      .sort()
      .map((cat) => {
        const opt = categoryOptions.find((o) => o.value === cat);
        const lbl = opt?.label ?? cat;
        const subs = list.categories
          .filter((c) => c.startsWith(cat + "."))
          .map((c) => opt?.subcategories?.find((s) => s.value === c)?.label ?? c.split(".")[1]);
        return lbl + (subs.length ? ` (${subs.sort().join(", ")})` : "");
      })
      .join(", ");
    return <>{label}</>;
  };

  const difficultyIcons = [
    { icon: "fa-smile-beam", title: "Easy" },
    { icon: "fa-grin-beam-sweat", title: "Medium" },
    { icon: "fa-dizzy", title: "Hard" },
  ];

  const frequencyIcons = [
    { icon: "fa-rabbit-fast", title: "Frequently changes" },
    { icon: "fa-turtle", title: "Annually changes" },
    { icon: "fa-snowflake", title: "Rarely changes" },
    { icon: "fa-chimney", title: "Never changes" },
  ];

  const canDelete = list.values.length > 10 && list._id !== "new";

  return (
    <div className={`edit-list-panel${active ? " active" : ""}`}>
      {selectedItem && <BlurbModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
      {/* Header */}
      <div className="edit-list-panel-header">
        <h1>{list.name || "N/A"}</h1>
        <i className="fas fa-times fa-3x" style={{ cursor: "pointer" }} onClick={onClose} />
      </div>

      {/* Stats */}
      {list.creator && (
        <h5>
          <p>
            <b>Created by</b> {list.creator.username}
            {list.date && (
              <>
                {" "}
                / <b>Created on</b> {fmt(list.date)}
              </>
            )}
            {list.modifyDate && list.modifyDate !== list.date && (
              <>
                {" "}
                / <b>Last modified on</b> {fmt(list.modifyDate)}
              </>
            )}
            {" / "}
            <b>Values</b> {list.values.length}
          </p>
          {!!list.plays && (
            <span>
              <b>Plays</b> {list.plays}
              {list.skips != null && (
                <>
                  {" "}
                  / <b>Skips</b> {list.skips}
                </>
              )}
              {!!list.bans && (
                <>
                  {" "}
                  / <b>Bans</b> {list.bans}
                </>
              )}
              {!!list.picks && (
                <>
                  {" "}
                  / <b>Picks</b> {list.picks}
                </>
              )}
              {" / "}
              <b>Hints</b> {list.hints ?? 0}
              {list.playRatio != null && (
                <>
                  {" "}
                  / <b>Play Ratio</b> {pct(list.playRatio)}
                </>
              )}
              {list.score != null && (
                <>
                  {" "}
                  / <b>Score</b> {pct(list.score)}
                </>
              )}
              {(list.upvotes || list.downvotes) && (
                <>
                  {" / "}
                  <b>Upvotes</b> {list.upvotes ?? 0} / <b>Downvotes</b> {list.downvotes ?? 0}
                  {list.likeRatio != null && (
                    <>
                      {" "}
                      / <b>Like Ratio</b> {pct(list.likeRatio)}
                    </>
                  )}
                </>
              )}
              {list.calculatedDifficulty != null && (
                <>
                  {" "}
                  / <b>Difficulty</b> {pct(list.calculatedDifficulty)}
                </>
              )}
            </span>
          )}
        </h5>
      )}

      {/* New list warning */}
      {list._id === "new" && (
        <kbd>
          Please search existing lists first and add answers to them. Subjective, niche and duplicate lists will be
          deleted.
        </kbd>
      )}

      <br />

      {/* Name */}
      <div className="input-group">
        <span className="input-group-addon">Name</span>
        <input
          className="form-control"
          placeholder="Name"
          value={list.name}
          disabled={readOnly}
          onChange={(e) => onChange({ ...list, name: e.target.value })}
          onBlur={() => onBlur(listRef.current)}
          autoComplete="off"
        />
      </div>

      {/* Description */}
      <div className="input-group">
        <span className="input-group-addon">Description</span>
        <AutoTextarea
          value={list.description ?? ""}
          placeholder="Description displays when the list is introduced to the players."
          disabled={readOnly}
          onChange={(v) => onChange({ ...list, description: v })}
          onBlur={() => onBlur(listRef.current)}
        />
      </div>

      <br />

      {/* Toolbar */}
      <div className="btn-toolbar" role="toolbar">
        {/* Language dropdown */}
        <div ref={langRef} className={`dropdown btn-group${showLanguages ? " open" : ""}`}>
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            disabled={readOnly}
            title="Language"
            onClick={() => setShowLanguages((s) => !s)}
          >
            {list.language || "None"}
          </button>
          <ul className="dropdown-menu">
            {languageOptions.map((l) => (
              <li key={l.code} className={l.code === list.language ? "active" : ""}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const updated = { ...list, language: l.code };
                    onChange(updated);
                    onBlur(updated);
                    setShowLanguages(false);
                  }}
                >
                  {l.code} - {l.native}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories button */}
        <div ref={catRef} className={`dropdown btn-group${showCategories ? " open" : ""}`}>
          <button
            className={`btn dropdown-toggle ${list.categories.length === 0 ? "btn-danger" : "btn-default"}`}
            type="button"
            disabled={readOnly}
            onClick={() => setShowCategories((s) => !s)}
            title="Categories"
          >
            {getCategoryLabel()}
          </button>
          <div className="dropdown-menu" style={{ padding: "8px 12px", minWidth: 500 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {categoryOptions.map((cat) => (
                <div key={cat.value} style={{ display: "flex", alignItems: "flex-start", gap: 4 }}>
                  <button
                    type="button"
                    className={`btn btn-xs ${list.categories.includes(cat.value) ? "btn-primary" : "btn-default"}`}
                    style={{ fontWeight: "bold", minWidth: 90, flexShrink: 0 }}
                    onClick={() => toggleCategory(cat.value)}
                  >
                    {cat.label}
                  </button>
                  {list.categories.includes(cat.value) && cat.subcategories && cat.subcategories.length > 0 && (
                    <>
                      <span style={{ color: "#aaa", fontSize: 12, margin: "0 2px", flexShrink: 0 }}>›</span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, flex: 1 }}>
                        {cat.subcategories.map((sub) => (
                          <button
                            key={sub.value}
                            type="button"
                            className={`btn btn-xs ${list.categories.includes(sub.value) ? "btn-primary" : "btn-default"}`}
                            onClick={() => toggleCategory(sub.value)}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Difficulty */}
        <div className="btn-group" role="group">
          {difficultyIcons.map((d, i) => (
            <button
              key={i}
              type="button"
              className={`btn btn-icon ${list.difficulty === i ? "btn-primary" : "btn-default"}`}
              title={d.title}
              disabled={readOnly}
              onClick={() => {
                const updated = { ...list, difficulty: i };
                onChange(updated);
                onBlur(updated);
              }}
            >
              <i className={`fas ${d.icon}`} />
            </button>
          ))}
        </div>

        {/* Frequency */}
        <div className="btn-group" role="group">
          {frequencyIcons.map((f, i) => (
            <button
              key={i}
              type="button"
              className={`btn btn-icon ${list.frequency === i ? "btn-primary" : "btn-default"}`}
              title={f.title}
              disabled={readOnly}
              onClick={() => {
                const updated = { ...list, frequency: i };
                onChange(updated);
                onBlur(updated);
              }}
            >
              <i className={`fas ${f.icon}`} />
            </button>
          ))}
        </div>

        {/* Blurb retrieval */}
        {list._id !== "new" && (
          <div className="btn-group" role="group">
            {BLURB_TYPES.filter(
              (bt) =>
                (isAdmin || !bt.adminOnly) && list.categories.some((c) => bt.categories.includes(c.split(".")[0])),
            ).map((bt) => (
              <button
                key={bt.api}
                className="btn btn-default"
                disabled={gettingBlurbs || readOnly}
                onClick={async () => {
                  setGettingBlurbs(true);
                  try {
                    const updated = await getBlurbs(list._id, bt.api);
                    onChange(updated);
                  } finally {
                    setGettingBlurbs(false);
                  }
                }}
              >
                {gettingBlurbs ? <i className="fas fa-spinner fa-spin" /> : bt.text}
              </button>
            ))}
          </div>
        )}

        {/* Delete */}
        {list._id !== "new" && (
          <div className="btn-group" role="group">
            <button className="btn btn-danger" onClick={onDelete} disabled={readOnly}>
              <i className="fas fa-trash" />
            </button>
          </div>
        )}
      </div>

      <hr />

      {/* Values table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-1 hidden-xs hidden-sm visible-md visible-lg">
              <i className="fas fa-user" title="Creator" />
            </th>
            <th className="col-1 hidden-xs hidden-sm visible-md visible-lg">
              <i className="fas fa-calendar" title="Date added" />
            </th>
            <th className="col-4">Answer</th>
            <th className="col-5">Blurb</th>
            <th className="col-1 hidden-xs hidden-sm visible-md visible-lg" style={{ width: 36 }}>
              <i className="fas fa-link" />
            </th>
            <th className="col-1">
              <i className="fas fa-toolbox" />
            </th>
          </tr>
        </thead>
        <tbody>
          {/* New item row */}
          {!readOnly && list.name && list.categories.length > 0 && (
            <tr>
              <td className="hidden-xs hidden-sm visible-md visible-lg" />
              <td className="hidden-xs hidden-sm visible-md visible-lg" />
              <td className="input-cell">
                <AutoTextarea
                  value={newItem.value}
                  placeholder={`New answer (${list.values.length + 1})`}
                  onChange={(v) => setNewItem({ ...newItem, value: v })}
                />
              </td>
              <td className="input-cell">
                <AutoTextarea
                  value={newItem.blurb}
                  placeholder={`Display after guessing ${newItem.value || "new answer"} (Can be a URL)`}
                  onChange={(v) => setNewItem({ ...newItem, blurb: v })}
                />
              </td>
              <td colSpan={2}>
                <button className="btn btn-sm btn-default" onClick={addValue} disabled={!newItem.value}>
                  <i className="fas fa-plus" />
                </button>
              </td>
            </tr>
          )}

          {/* Existing items */}
          {list.values.map((v, i) => (
            <ValueRow
              key={v._id?.toString() || i}
              v={v}
              index={i}
              readOnly={readOnly}
              total={list.values.length}
              onUpdate={updateValue}
              onRemove={removeValue}
              onBlurbClick={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
