import { Fragment, useState, useRef, memo, useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import {
  TenThingsList,
  TenThingsValue,
  Language,
  CategoryOption,
  getBlurbs,
  getSimilarLists,
  SimilarLists,
  checkSource,
  searchLists,
  ListNameMatch,
} from "../../services/tenthings";
import { removeAllButLetters } from "@utils/string-helpers";
import { TenThingsTableContainer } from "./SharedStyles";
import { categoryLabel, formatDate, formatPct } from "./format";
import { VetModal } from "./VetModal";
import { getClaudeEnabled } from "../../services/tenthings";
import { answersGivenAway, applySuggestions, PickedSuggestions } from "@utils/list-suggestions";
import { kindCompletions, listNameHints, normalizeListName, standardizeTerms } from "@utils/list-names";
import { wikiFor } from "@utils/fandom-wikis";
import { PasteAnswersModal } from "./PasteAnswersModal";
import { toggleCategory as withCategoryToggled } from "./categories";

const EditListPanel = styled.div<{ $active?: boolean }>`
  top: 50px;
  position: fixed;
  height: calc(100% - 50px);
  overflow-y: scroll;
  overflow-x: hidden;
  right: ${({ $active }) => ($active ? "0" : "-100%")};
  width: 95%;
  transition: right 0.3s ease-in-out;
  background-color: var(--surface);
  color: var(--text);
  z-index: 100;
  border: solid;
  border-color: var(--border);
  padding: 0 20px 20px;
`;

const EditListPanelHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: var(--surface);
  z-index: 10;
  margin: 0 -20px;
  padding: 0 20px;
  .input-group {
    position: relative;
    z-index: 5;
  }
  .btn-toolbar {
    position: relative;
    z-index: 4;
  }
  border-bottom: solid;
  border-bottom-color: var(--border);
`;

const BtnToolbar = styled.div`
  margin: 0 5px 0 -5px;
  > div {
    margin-top: 3px;
  }
`;

const BtnIcon = styled.button`
  padding: 10px;
  img {
    max-width: 20px;
    max-height: 20px;
  }
`;

const EditorTableContainer = styled(TenThingsTableContainer)``;

/** The "Subject - Kind" completions and existing lists with that name, open under the name field while it has focus. */
const NameMenu = styled.ul`
  && {
    display: block;
    top: 100%;
    left: 0;
    min-width: 240px;
    max-height: 360px;
    overflow-y: auto;
  }
  .list-language {
    margin-left: 6px;
    font-size: 0.8em;
    opacity: 0.7;
  }
`;

/** Naming suggestions and similar lists, under the name field. */
const NameNotes = styled.ul`
  list-style: none;
  margin: 4px 0 8px;
  padding: 0;
  font-size: 0.9em;
  color: var(--text-muted);

  .btn-link {
    padding: 0 0 0 6px;
    vertical-align: baseline;
  }
`;

const CategoryMenu = styled.div`
  padding: 10px 12px;
  width: min(680px, 92vw);
  max-height: 75vh;
  overflow-y: auto;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
  gap: 4px;

  .btn {
    font-weight: bold;
  }
`;

const SubcategorySection = styled.div`
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid var(--border);
`;

const SubcategoryHeading = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 4px;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const InputCell = styled.td`
  && {
    padding: 0 5px 0 0 !important;
    text-overflow: ellipsis;
  }
  textarea {
    height: 43px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:focus {
      overflow: visible;
      white-space: pre-wrap;
    }
  }
  && > * {
    background-color: transparent;
    border: none;
    box-shadow: none;
    white-space: nowrap;
    &:focus {
      border: none;
      box-shadow: none;
      white-space: wrap;
    }
  }
`;

const BlurbCell = styled(InputCell)`
  position: relative;
  && > textarea {
    padding-right: 22px;
  }
  && > button {
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 2px 6px;
    color: #999;
    opacity: 0;
    &:hover {
      color: darkred;
    }
  }
  &:hover > button,
  &:focus-within > button {
    opacity: 1;
  }
`;

const ImageCell = styled.td`
  && {
    padding: 0 !important;
  }
  img {
    margin: 5px;
    width: 40px;
    max-height: 33px;
  }
`;

const IconColumn = styled.td`
  && {
    width: 30px;
  }
`;

const DeleteColumn = styled.td<{ $canDelete?: boolean }>`
  cursor: ${({ $canDelete }) => ($canDelete ? "pointer" : "default")};
  &:hover {
    color: ${({ $canDelete }) => ($canDelete ? "darkred" : "inherit")};
  }
`;

const OBJECT_CATEGORIES = ["culture", "nature", "misc", "society", "sports"];

const BLURB_TYPES = [
  { api: "movies", categories: ["movies"], text: "Get movie posters", adminOnly: false },
  { api: "tv", categories: ["television"], text: "Get TV posters", adminOnly: false },
  { api: "actors", categories: ["movies", "television"], text: "Get actor pics", adminOnly: false },
  { api: "books", categories: ["literature"], text: "Get book covers", adminOnly: false },
  { api: "musicvideos", categories: ["music"], text: "Get music videos", adminOnly: true },
  { api: "wiki", categories: OBJECT_CATEGORIES, text: "Get Wiki pics", adminOnly: false },
];

/** "Found 18 of 24 answers without a blurb, 12 of them on other lists." */
const blurbsFound = (missing: number, updated: TenThingsList, fromRelated: number) => {
  const found = missing - updated.values.filter((v) => !v.blurb).length;
  const borrowed = fromRelated ? `, ${fromRelated === found ? "all" : fromRelated} of them on other lists` : "";
  return `Found ${found} of ${missing} answers without a blurb${borrowed}.`;
};

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

/** The blurb's own picture, or its YouTube video's; nothing for text, Spotify and other links. */
export function getThumbnailUrl(v: TenThingsValue): string | undefined {
  if (!v.blurb) return undefined;
  if (v.blurbType === "image") return v.blurb;
  if (v.blurbType === "youtube") {
    const id = v.blurb.match(/[?&]v=([^&]+)/)?.[1] ?? v.blurb.match(/youtu\.be\/([^&?]+)/)?.[1];
    return id ? `https://img.youtube.com/vi/${id.trim()}/default.jpg` : undefined;
  }
  return undefined;
}

function BlurbModal({ item, onClose }: { item: TenThingsValue; onClose: () => void }) {
  const [broken, setBroken] = useState(false);
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
            {item.blurbType === "image" &&
              (broken ? (
                <p className="text-danger" style={{ wordBreak: "break-all" }}>
                  <i className="fas fa-unlink" /> This image can't be loaded: {item.blurb}
                </p>
              ) : (
                <img
                  src={item.blurb}
                  alt={item.value}
                  style={{ maxWidth: "100%", display: "block", margin: "0 auto" }}
                  onError={() => setBroken(true)}
                />
              ))}
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
  /** Every change that should persist; the drawer decides whether and how to save it. */
  onSave: (list: TenThingsList) => void;
  /** Shows the delete button when given. */
  onDelete?: () => void;
  /** Opens another list; when given, existing lists matching the name are offered as it's typed. */
  onOpenList?: (id: string) => void;
}

const fmtCreated = (v: TenThingsValue) => {
  if (v.date) return formatDate(v.date);
  // Fall back to the timestamp embedded in the MongoDB ObjectId
  if (v._id && /^[0-9a-f]{24}$/i.test(v._id)) return formatDate(new Date(parseInt(v._id.substring(0, 8), 16) * 1000));
  return "";
};

function AutoTextarea({
  value,
  onChange,
  onBlur,
  onKeyDown,
  placeholder,
  disabled,
  forwardedRef,
}: {
  value: string;
  onChange?: (v: string) => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  forwardedRef?: React.Ref<HTMLTextAreaElement>;
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
      ref={(el) => {
        ref.current = el;
        if (forwardedRef) {
          if (typeof forwardedRef === "function") {
            forwardedRef(el);
          } else {
            forwardedRef.current = el;
          }
        }
      }}
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
      onKeyDown={onKeyDown}
      style={{ resize: "none", overflow: "hidden", height: COLLAPSED }}
    />
  );
}

const ValueRow = memo(
  function ValueRow({
    v,
    index,
    readOnly,
    total,
    byListCreator,
    onUpdate,
    onRemove,
    onBlurbClick,
  }: {
    v: TenThingsValue;
    index: number;
    /** False when someone other than the list's creator added this answer; it's then shown in blue. */
    byListCreator: boolean;
    readOnly: boolean;
    total: number;
    onUpdate: (index: number, patch: Partial<TenThingsValue>) => void;
    onRemove: (index: number) => void;
    onBlurbClick: (v: TenThingsValue) => void;
  }) {
    const [localValue, setLocalValue] = useState(v.value);
    const [localBlurb, setLocalBlurb] = useState(v.blurb ?? "");
    // Follow the answer when it changes outside this row: a save, fetched blurbs, Claude's fixes.
    // Typing only reaches the list on blur, so this never overwrites an edit in progress.
    const prev = useRef({ value: v.value, blurb: v.blurb ?? "" });
    if (v.value !== prev.current.value) {
      prev.current.value = v.value;
      setLocalValue(v.value);
    }
    if ((v.blurb ?? "") !== prev.current.blurb) {
      prev.current.blurb = v.blurb ?? "";
      setLocalBlurb(v.blurb ?? "");
    }

    const canDelete = total > 10;
    const thumbnail = getThumbnailUrl(v);
    const hasPreview = !!v.blurb && v.blurbType !== "text";
    const [brokenThumbnail, setBrokenThumbnail] = useState<string>();
    return (
      <tr>
        <IconColumn
          className={`hidden-xs hidden-sm visible-md visible-lg${byListCreator ? "" : " text-info"}`}
          title={byListCreator ? v.creator?.username : `${v.creator?.username}, not the list's creator`}
        >
          <i className="fas fa-user" />
        </IconColumn>
        <InputCell>
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
        </InputCell>
        <BlurbCell>
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
          {!readOnly && localBlurb && (
            <button
              type="button"
              className="btn btn-link btn-xs"
              title="Clear blurb"
              aria-label={`Clear blurb of ${v.value}`}
              // Keep the textarea focused so its blur doesn't save the old blurb first.
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                setLocalBlurb("");
                if (v.blurb) onUpdate(index, { blurb: "" });
              }}
            >
              <i className="fas fa-times" />
            </button>
          )}
        </BlurbCell>
        <td className="hidden-xs hidden-sm visible-md visible-lg" style={{ whiteSpace: "nowrap", fontSize: 12 }}>
          {fmtCreated(v)}
        </td>
        <td className="hidden-xs hidden-sm visible-md visible-lg" style={{ whiteSpace: "nowrap", fontSize: 12 }}>
          {formatDate(v.modifyDate)}
        </td>
        <ImageCell
          style={{ width: 36, cursor: hasPreview ? "pointer" : "default" }}
          onClick={() => hasPreview && onBlurbClick(v)}
        >
          {thumbnail && brokenThumbnail !== thumbnail && (
            <img
              src={thumbnail}
              alt=""
              style={{ width: 28, height: 28, objectFit: "cover" }}
              onError={() => setBrokenThumbnail(thumbnail)}
            />
          )}
          {thumbnail && brokenThumbnail === thumbnail && (
            <i className="fas fa-unlink text-danger" title="This image can't be loaded" />
          )}
          {v.blurbType === "spotify" && <i className="fab fa-spotify text-success" />}
          {v.blurbType === "link" && <i className="fas fa-link text-muted" />}
        </ImageCell>
        <DeleteColumn $canDelete={canDelete && !readOnly} onClick={() => canDelete && !readOnly && onRemove(index)}>
          <i className="fas fa-trash" />
        </DeleteColumn>
      </tr>
    );
  },
  (prev, next) =>
    prev.v._id === next.v._id &&
    prev.v.value === next.v.value &&
    prev.v.blurb === next.v.blurb &&
    prev.v.blurbType === next.v.blurbType &&
    prev.readOnly === next.readOnly &&
    prev.byListCreator === next.byListCreator &&
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
  onSave,
  onDelete,
  onOpenList,
}: Props) {
  const [newItem, setNewItem] = useState({ value: "", blurb: "" });
  const [showCategories, setShowCategories] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TenThingsValue | null>(null);
  const [gettingBlurbs, setGettingBlurbs] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showClaude, setShowClaude] = useState(false);
  const [claudeEnabled, setClaudeEnabled] = useState(false);

  useEffect(() => {
    let live = true;
    getClaudeEnabled().then((enabled) => live && setClaudeEnabled(enabled));
    return () => {
      live = false;
    };
  }, []);
  const [showPaste, setShowPaste] = useState(false);
  const [showWiki, setShowWiki] = useState(false);
  const [wikiUrl, setWikiUrl] = useState("");
  const [wikiStatus, setWikiStatus] = useState("");
  const wikiKey = `tenthings-wiki-url:${list._id}`;
  // The source as typed; it only reaches the list once the server has checked the link.
  const [sourceDraft, setSourceDraft] = useState(list.source ?? "");
  const [sourceError, setSourceError] = useState("");
  const [checkingSource, setCheckingSource] = useState(false);
  useEffect(() => {
    setSourceDraft(list.source ?? "");
    setSourceError("");
  }, [list._id, list.source]);
  const saveSource = async () => {
    const source = sourceDraft.trim();
    if (source === (listRef.current.source ?? "")) return setSourceError("");
    if (source) {
      setCheckingSource(true);
      try {
        const check = await checkSource(source);
        if (!check.ok) return setSourceError(check.error);
      } catch {
        return setSourceError("Couldn't check that link.");
      } finally {
        setCheckingSource(false);
      }
    }
    setSourceError("");
    const updated = { ...listRef.current, source };
    onChangeRef.current(updated);
    onSaveRef.current(updated);
  };
  const [showBlurbMenu, setShowBlurbMenu] = useState(false);
  const blurbRef = useRef<HTMLDivElement>(null);
  const blurbSources = BLURB_TYPES.filter(
    (bt) => (isAdmin || !bt.adminOnly) && list.categories.some((c) => bt.categories.includes(c.split(".")[0])),
  );
  const assignedWiki = wikiFor(list);

  type SortCol = "value" | "blurb" | "creator" | "date" | "modifyDate";
  const [sortCol, setSortCol] = useState<SortCol | null>("value");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const handleSort = (col: SortCol) => {
    if (sortCol === col) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortCol(col);
      setSortDir("asc");
    }
  };

  const sortIcon = (col: SortCol) =>
    sortCol === col ? (
      <i
        className={`fas ${sortDir === "asc" ? "fa-sort-alpha-down" : "fa-sort-alpha-down-alt"}`}
        style={{ marginLeft: 4 }}
      />
    ) : null;

  const sortedIndices = useMemo(() => {
    const indices = list.values.map((_, i) => i);
    if (!sortCol) return indices;
    return [...indices].sort((a, b) => {
      const va = list.values[a];
      const vb = list.values[b];
      let av = "",
        bv = "";
      if (sortCol === "value") {
        av = va.value;
        bv = vb.value;
      } else if (sortCol === "blurb") {
        av = va.blurb ?? "";
        bv = vb.blurb ?? "";
      } else if (sortCol === "creator") {
        av = va.creator?.username ?? "";
        bv = vb.creator?.username ?? "";
      } else if (sortCol === "date") {
        av = va.date ?? "";
        bv = vb.date ?? "";
      } else {
        av = va.modifyDate ?? "";
        bv = vb.modifyDate ?? "";
      }
      return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });
  }, [list.values, sortCol, sortDir]);
  const langRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);
  const newValueInputRef = useRef<HTMLTextAreaElement>(null);
  const newBlurbInputRef = useRef<HTMLTextAreaElement>(null);

  // Check if a value already exists (case-insensitive, ignoring special characters)
  const hasDuplicate = (value: string) => {
    const normalized = removeAllButLetters(value);
    return list.values.some((item) => removeAllButLetters(item.value) === normalized);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setShowLanguages(false);
      if (catRef.current && !catRef.current.contains(e.target as Node)) setShowCategories(false);
      if (blurbRef.current && !blurbRef.current.contains(e.target as Node)) setShowBlurbMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Stable refs so callbacks never change identity, keeping ValueRow memo effective
  const listRef = useRef(list);
  listRef.current = list;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const onSaveRef = useRef(onSave);
  onSaveRef.current = onSave;

  /** Tidies the name (dashes, spaces, kind spelling) where the creator can see it, then saves. */
  const commitName = (name: string) => {
    const tidied = { ...listRef.current, name: normalizeListName(name, listRef.current.language) };
    if (tidied.name !== listRef.current.name) onChangeRef.current(tidied);
    onSaveRef.current(tidied);
  };

  const nameHints = useMemo(
    () => listNameHints(list.name, list.language, list.categories),
    [list.name, list.language, list.categories],
  );
  const givenAway = useMemo(
    () =>
      answersGivenAway(
        list.description ?? "",
        list.name,
        list.values.map(({ value }) => value),
      ),
    [list.description, list.name, list.values],
  );
  const [nameFocused, setNameFocused] = useState(false);
  const completions = useMemo(
    () => (nameFocused && !readOnly ? kindCompletions(list.name, list.language) : []),
    [nameFocused, readOnly, list.name, list.language],
  );

  // Existing lists whose name contains what's typed, so a creator can open one instead of starting a duplicate.
  const [nameMatches, setNameMatches] = useState<ListNameMatch[]>([]);
  const searchNames = !readOnly && !!onOpenList;
  useEffect(() => {
    const name = list.name.trim();
    if (!searchNames || name.length < 3) {
      setNameMatches([]);
      return;
    }
    let current = true;
    const timer = setTimeout(() => {
      searchLists(name)
        .then((found) => current && setNameMatches(found.filter(({ _id }) => _id !== list._id)))
        .catch(() => current && setNameMatches([]));
    }, 250);
    return () => {
      current = false;
      clearTimeout(timer);
    };
  }, [list.name, list._id, searchNames]);

  type NameOption = { kind: string } | { list: ListNameMatch };
  const nameOptions = useMemo<NameOption[]>(
    () =>
      nameFocused
        ? [
            ...completions.map((kind) => ({ kind })),
            ...(searchNames ? nameMatches.map((match) => ({ list: match })) : []),
          ]
        : [],
    [nameFocused, completions, nameMatches, searchNames],
  );
  // null until the arrow keys move: a kind is picked by default, an existing list never is,
  // so Enter after typing a name doesn't jump to another list.
  const [activeOption, setActiveOption] = useState<number | null>(null);
  const highlighted = activeOption ?? (nameOptions[0] && "kind" in nameOptions[0] ? 0 : -1);
  const pickNameOption = (option: NameOption) => {
    if ("kind" in option) return commitName(option.kind);
    setNameFocused(false);
    onOpenList?.(option.list._id);
  };
  const onNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!nameOptions.length) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActiveOption((highlighted + step + nameOptions.length) % nameOptions.length);
    } else if (e.key === "Enter" && nameOptions[highlighted]) {
      e.preventDefault();
      pickNameOption(nameOptions[highlighted]);
    } else if (e.key === "Escape") {
      setNameFocused(false);
    }
  };

  const [similar, setSimilar] = useState<SimilarLists>({ lists: [], duplicate: null });
  useEffect(() => {
    const name = list.name.trim();
    if (readOnly || name.length < 3) {
      setSimilar({ lists: [], duplicate: null });
      return;
    }
    let current = true;
    const timer = setTimeout(() => {
      getSimilarLists(name, list.language, list._id === "new" ? undefined : list._id)
        .then((found) => current && setSimilar(found))
        .catch(() => current && setSimilar({ lists: [], duplicate: null }));
    }, 500);
    return () => {
      current = false;
      clearTimeout(timer);
    };
  }, [list.name, list.language, list._id, readOnly]);

  const newItemIsDuplicate = !!newItem.value.trim() && hasDuplicate(newItem.value);

  const addValue = () => {
    if (!newItem.value) return;
    // The add button already says so; Tab from the blurb lands here too.
    if (hasDuplicate(newItem.value)) return;
    const updatedList = {
      ...listRef.current,
      values: [...listRef.current.values, { value: newItem.value, blurb: newItem.blurb }],
    };
    onChangeRef.current(updatedList);
    setNewItem({ value: "", blurb: "" });
    // Refocus on value input for quick entry
    setTimeout(() => newValueInputRef.current?.focus(), 0);
    onSaveRef.current(updatedList);
  };

  const addValues = (values: string[]) => {
    const updatedList = {
      ...listRef.current,
      values: [...listRef.current.values, ...values.map((value) => ({ value, blurb: "" }))],
    };
    onChangeRef.current(updatedList);
    onSaveRef.current(updatedList);
    setShowPaste(false);
  };

  /** Without a URL, the server uses the wiki assigned to the list. */
  const getWikiImages = async (url?: string) => {
    const missing = list.values.filter((v) => !v.blurb).length;
    setGettingBlurbs(true);
    setWikiStatus("");
    try {
      if (url) localStorage.setItem(wikiKey, url);
      const { list: updated, fromRelated } = await getBlurbs(list._id, "fandom", url);
      onChange(updated);
      setWikiStatus(blurbsFound(missing, updated, fromRelated));
    } catch (error: any) {
      setWikiStatus(error?.response?.data?.error ?? "Couldn't read that wiki.");
    } finally {
      setGettingBlurbs(false);
    }
  };

  const blurbCount = list.values.filter((v) => v.blurb).length;
  const clearAllBlurbs = () => {
    if (!window.confirm(`Clear all ${blurbCount} blurbs of this list?`)) return;
    const l = listRef.current;
    const updated = { ...l, values: l.values.map((v) => (v.blurb ? { ...v, blurb: "" } : v)) };
    onChangeRef.current(updated);
    onSaveRef.current(updated);
  };

  const applyClaude = (picked: PickedSuggestions) => {
    const updatedList = applySuggestions(listRef.current, picked, (value, blurb): TenThingsValue => ({ value, blurb }));
    onChangeRef.current(updatedList);
    onSaveRef.current(updatedList);
    setShowClaude(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, field: "value" | "blurb") => {
    if (e.key === "Tab") {
      e.preventDefault();
      if (field === "value") {
        // Tab on value input: focus on blurb input
        newBlurbInputRef.current?.focus();
      } else if (field === "blurb") {
        // Tab on blurb input: create the value
        addValue();
      }
    }
  };

  const updateValue = useCallback((index: number, patch: Partial<TenThingsValue>) => {
    const l = listRef.current;
    const updated = { ...l, values: l.values.map((v, i) => (i === index ? { ...v, ...patch } : v)) };
    onChangeRef.current(updated);
    onSaveRef.current(updated);
  }, []); // stable — reads latest list via ref

  const removeValue = useCallback((index: number) => {
    const l = listRef.current;
    const updated = { ...l, values: l.values.filter((_, i) => i !== index) };
    onChangeRef.current(updated);
    onSaveRef.current(updated);
  }, []); // stable — reads latest list via ref

  const toggleCategory = (cat: string) => {
    const updated = { ...list, categories: withCategoryToggled(list.categories, cat) };
    onChange(updated);
    onSave(updated);
  };

  const getCategoryLabel = () =>
    list.categories.length ? (
      categoryLabel(list.categories, categoryOptions)
    ) : (
      <>
        <i className="fas fa-tags" /> Select...
      </>
    );

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

  return (
    <EditListPanel $active={active}>
      {selectedItem && <BlurbModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
      {showClaude && (
        <VetModal
          list={list}
          categoryOptions={categoryOptions}
          onApply={applyClaude}
          onClose={() => setShowClaude(false)}
        />
      )}
      {showPaste && (
        <PasteAnswersModal
          existing={list.values.map((v) => v.value)}
          onAdd={addValues}
          onClose={() => setShowPaste(false)}
        />
      )}
      {/* Header */}
      <EditListPanelHeader>
        <h1>{list.name || "N/A"}</h1>
        <i className="fas fa-times fa-3x" style={{ cursor: "pointer" }} onClick={onClose} />
      </EditListPanelHeader>

      {/* Stats */}
      {list.creator && (
        <h5>
          <p>
            <b>Created by</b> {list.creator.username}
            {list.date && (
              <>
                {" "}
                / <b>Created on</b> {formatDate(list.date)}
              </>
            )}
            {list.modifyDate && list.modifyDate !== list.date && (
              <>
                {" "}
                / <b>Last modified on</b> {formatDate(list.modifyDate)}
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
              {list.completedRounds != null && (
                <>
                  {" "}
                  / <b>Completed</b> {list.completedRounds}
                </>
              )}
              {list.skippedRounds != null && (
                <>
                  {" "}
                  / <b>Skipped</b> {list.skippedRounds}
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
                  / <b>Play Ratio</b> {formatPct(list.playRatio)}
                </>
              )}
              {list.score != null && (
                <>
                  {" "}
                  / <b>Score</b> {formatPct(list.score)}
                </>
              )}
              {!!(list.upvotes || list.downvotes) && (
                <>
                  {" / "}
                  <b>Upvotes</b> {list.upvotes ?? 0} / <b>Downvotes</b> {list.downvotes ?? 0}
                  {list.likeRatio != null && (
                    <>
                      {" "}
                      / <b>Like Ratio</b> {formatPct(list.likeRatio)}
                    </>
                  )}
                </>
              )}
              {list.calculatedDifficulty != null && (
                <>
                  {" "}
                  / <b>Difficulty</b> {formatPct(list.calculatedDifficulty)}
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
          {list.categories.includes("music") && " Music lists will be scrutinized by admins for global recognition."}
        </kbd>
      )}

      <br />

      {/* Name */}
      <div className="input-group" style={{ position: "relative" }}>
        <span className="input-group-addon">Name</span>
        <input
          className="form-control"
          placeholder="Name"
          value={list.name}
          disabled={readOnly}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={nameOptions.length > 0}
          aria-controls="list-name-options"
          aria-activedescendant={nameOptions[highlighted] ? `list-name-option-${highlighted}` : undefined}
          onChange={(e) => {
            setNameFocused(true);
            setActiveOption(null);
            onChange({ ...list, name: e.target.value });
          }}
          onFocus={() => setNameFocused(true)}
          onKeyDown={onNameKeyDown}
          onBlur={() => {
            setNameFocused(false);
            commitName(listRef.current.name);
          }}
          autoComplete="off"
        />
        {nameOptions.length > 0 && (
          <NameMenu className="dropdown-menu" id="list-name-options" role="listbox" aria-label="Name suggestions">
            {nameOptions.map((option, i) => {
              const isList = "list" in option;
              const label = isList ? option.list.name : option.kind;
              const firstList = isList && (i === 0 || !("list" in nameOptions[i - 1]));
              return (
                <Fragment key={isList ? option.list._id : option.kind}>
                  {firstList && (
                    <li className="dropdown-header" role="presentation">
                      Existing lists: open one to add your answers there
                    </li>
                  )}
                  <li
                    id={`list-name-option-${i}`}
                    role="option"
                    aria-selected={i === highlighted}
                    className={i === highlighted ? "active" : undefined}
                  >
                    <a
                      href="#"
                      tabIndex={-1}
                      // mousedown, not click: picking happens before the input's blur closes the menu
                      onMouseDown={(e) => {
                        e.preventDefault();
                        pickNameOption(option);
                        setNameFocused(false);
                      }}
                      onMouseEnter={() => setActiveOption(i)}
                    >
                      {label}
                      {isList && <span className="list-language">{option.list.language}</span>}
                    </a>
                  </li>
                </Fragment>
              );
            })}
          </NameMenu>
        )}
      </div>
      {!readOnly && (nameHints.length > 0 || similar.lists.length > 0 || similar.duplicate) && (
        <NameNotes>
          {similar.duplicate && (
            <li className="text-danger">There's already a list called "{similar.duplicate.name}" in this language.</li>
          )}
          {nameHints.map(({ message, fix }) => (
            <li key={message}>
              {message}
              {fix && (
                <button type="button" className="btn btn-link btn-xs" onClick={() => commitName(fix)}>
                  Use "{fix}"
                </button>
              )}
            </li>
          ))}
          {!similar.duplicate && similar.lists.length > 0 && (
            <li>
              Lists about the same subject: {similar.lists.map(({ name }) => name).join(", ")}. If yours is one of them,
              add your answers there instead.
            </li>
          )}
        </NameNotes>
      )}

      {/* Description */}
      <div className="input-group">
        <span className="input-group-addon">Description</span>
        <AutoTextarea
          value={list.description ?? ""}
          placeholder="Description displays when the list is introduced to the players."
          disabled={readOnly}
          onChange={(v) => onChange({ ...list, description: v })}
          onBlur={() => {
            const description = standardizeTerms(listRef.current.description ?? "");
            const tidied =
              description === (listRef.current.description ?? "")
                ? listRef.current
                : { ...listRef.current, description };
            if (tidied !== listRef.current) onChangeRef.current(tidied);
            onSaveRef.current(tidied);
          }}
        />
      </div>
      {!readOnly && givenAway.length > 0 && (
        <NameNotes>
          <li className="text-warning">
            Players see the description while they guess, and it gives away{" "}
            {givenAway.map((answer) => `"${answer}"`).join(", ")}.
          </li>
        </NameNotes>
      )}

      {/* Source */}
      <div className="input-group" style={{ marginTop: 6 }}>
        <span className="input-group-addon">Source</span>
        <input
          className="form-control"
          type="url"
          value={sourceDraft}
          placeholder="Link to where the answers come from, e.g. a wiki or Wikipedia page. Players don't see it."
          disabled={readOnly || checkingSource}
          onChange={(e) => setSourceDraft(e.target.value)}
          onBlur={saveSource}
          onKeyDown={(e) => e.key === "Enter" && (e.target as HTMLInputElement).blur()}
          autoComplete="off"
        />
        {list.source && (
          <span className="input-group-btn">
            <a className="btn btn-default" href={list.source} target="_blank" rel="noopener noreferrer" title="Open">
              {checkingSource ? <i className="fas fa-spinner fa-spin" /> : <i className="fas fa-external-link-alt" />}
            </a>
          </span>
        )}
      </div>
      {(sourceError || (list.source && list.sourceChecked === false && sourceDraft === list.source)) && (
        <NameNotes>
          {sourceError ? (
            <li className="text-danger">{sourceError}</li>
          ) : (
            <li>Saved, but unchecked: the site turned the check away or didn't answer.</li>
          )}
        </NameNotes>
      )}

      <br />

      {/* Toolbar */}
      <BtnToolbar role="toolbar">
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
                    onSaveRef.current(updated);
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
          <CategoryMenu className="dropdown-menu">
            <CategoryGrid>
              {categoryOptions.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  className={`btn btn-sm ${list.categories.includes(cat.value) ? "btn-primary" : "btn-default"}`}
                  onClick={() => toggleCategory(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </CategoryGrid>
            {categoryOptions
              .filter((cat) => list.categories.includes(cat.value) && cat.subcategories?.length)
              .map((cat) => (
                <SubcategorySection key={cat.value}>
                  <SubcategoryHeading>{cat.label}</SubcategoryHeading>
                  <ChipRow>
                    {cat.subcategories!.map((sub) => (
                      <button
                        key={sub.value}
                        type="button"
                        className={`btn btn-xs ${list.categories.includes(sub.value) ? "btn-primary" : "btn-default"}`}
                        onClick={() => toggleCategory(sub.value)}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </ChipRow>
                </SubcategorySection>
              ))}
          </CategoryMenu>
        </div>

        {/* Difficulty */}
        <div className="btn-group" role="group">
          {difficultyIcons.map((d, i) => (
            <BtnIcon
              key={i}
              type="button"
              className={`btn ${list.difficulty === i ? "btn-primary" : "btn-default"}`}
              title={d.title}
              disabled={readOnly}
              onClick={() => {
                const updated = { ...list, difficulty: i };
                onChange(updated);
                onSaveRef.current(updated);
              }}
            >
              <i className={`fas ${d.icon}`} />
            </BtnIcon>
          ))}
        </div>

        {/* Frequency */}
        <div className="btn-group" role="group">
          {frequencyIcons.map((f, i) => (
            <BtnIcon
              key={i}
              type="button"
              className={`btn ${list.frequency === i ? "btn-primary" : "btn-default"}`}
              title={f.title}
              disabled={readOnly}
              onClick={() => {
                const updated = { ...list, frequency: i };
                onChange(updated);
                onSaveRef.current(updated);
              }}
            >
              <i className={`fas ${f.icon}`} />
            </BtnIcon>
          ))}
        </div>

        {/* Blurb retrieval: every source in one menu */}
        {list._id !== "new" && (assignedWiki || blurbSources.length > 0 || isAdmin || blurbCount > 0) && (
          <div ref={blurbRef} className={`dropdown btn-group${showBlurbMenu ? " open" : ""}`}>
            <button
              className="btn btn-default dropdown-toggle"
              type="button"
              disabled={gettingBlurbs || readOnly}
              onClick={() => setShowBlurbMenu((s) => !s)}
              title="Fill or clear blurbs"
            >
              {gettingBlurbs ? <i className="fas fa-spinner fa-spin" /> : <i className="fas fa-images" />} Blurbs{" "}
              <span className="caret" />
            </button>
            <ul className="dropdown-menu">
              {assignedWiki && (
                <>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowBlurbMenu(false);
                        getWikiImages();
                      }}
                    >
                      Get pics from {assignedWiki.name}
                    </a>
                  </li>
                  {blurbSources.length > 0 && <li role="separator" className="divider" />}
                </>
              )}
              {blurbSources.map((bt) => (
                <li key={bt.api}>
                  <a
                    href="#"
                    onClick={async (e) => {
                      e.preventDefault();
                      setShowBlurbMenu(false);
                      setGettingBlurbs(true);
                      setWikiStatus("");
                      const missing = list.values.filter((v) => !v.blurb).length;
                      try {
                        const { list: updated, fromRelated } = await getBlurbs(list._id, bt.api);
                        onChange(updated);
                        setWikiStatus(blurbsFound(missing, updated, fromRelated));
                      } catch {
                        setWikiStatus("Couldn't get blurbs right now.");
                      } finally {
                        setGettingBlurbs(false);
                      }
                    }}
                  >
                    {bt.text}
                  </a>
                </li>
              ))}
              {isAdmin && (
                <>
                  {(assignedWiki || blurbSources.length > 0) && <li role="separator" className="divider" />}
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowBlurbMenu(false);
                        if (!wikiUrl)
                          setWikiUrl(
                            /^https:\/\/[^/]+\.fandom\.com(\/|$)/i.test(list.source ?? "")
                              ? list.source!
                              : (localStorage.getItem(wikiKey) ?? ""),
                          );
                        setShowWiki(true);
                      }}
                    >
                      From a Fandom wiki…
                    </a>
                  </li>
                </>
              )}
              {blurbCount > 0 && (
                <>
                  {(assignedWiki || blurbSources.length > 0 || isAdmin) && <li role="separator" className="divider" />}
                  <li>
                    <a
                      href="#"
                      className="text-danger"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowBlurbMenu(false);
                        clearAllBlurbs();
                      }}
                    >
                      <i className="fas fa-eraser" /> Clear all blurbs
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}

        {/* Admin-only bulk tools */}
        {isAdmin && (
          <div className="btn-group" role="group">
            <button
              className="btn btn-default"
              disabled={readOnly || !list.name || list.categories.length === 0}
              onClick={() => setShowPaste(true)}
              title="Add many answers at once from pasted text"
            >
              <i className="fas fa-paste" /> Paste answers
            </button>
          </div>
        )}

        {/* Owner-only: billed to the site's API key. On a new list it fills the answers from the name. */}
        {claudeEnabled && (list._id !== "new" || list.name.trim()) && (
          <div className="btn-group" role="group">
            <button
              className="btn btn-default"
              disabled={readOnly}
              onClick={() => setShowClaude(true)}
              title={
                list._id === "new"
                  ? "Have Claude fill the list from its name: you pick what to add"
                  : "Have Claude check the answers, blurbs, description, categories and settings"
              }
            >
              <i className="fas fa-magic" /> Vet
            </button>
          </div>
        )}

        {/* Delete */}
        {list._id !== "new" && onDelete && (
          <div className="btn-group" role="group">
            <button className="btn btn-danger" onClick={onDelete} disabled={readOnly} title="Delete list">
              <i className="fas fa-trash" />
            </button>
          </div>
        )}
      </BtnToolbar>

      {isAdmin && showWiki && list._id !== "new" && (
        <div style={{ marginTop: 10 }}>
          <div className="input-group">
            <span className="input-group-addon">Wiki page</span>
            <input
              className="form-control"
              placeholder="Any page on the wiki, e.g. https://dragonprince.fandom.com/wiki/Category:Characters"
              value={wikiUrl}
              onChange={(e) => setWikiUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && wikiUrl && !gettingBlurbs && getWikiImages(wikiUrl)}
              autoComplete="off"
            />
            <span className="input-group-btn">
              <button
                className="btn btn-default"
                disabled={!wikiUrl || gettingBlurbs}
                onClick={() => getWikiImages(wikiUrl)}
              >
                {gettingBlurbs ? <i className="fas fa-spinner fa-spin" /> : "Fill empty blurbs"}
              </button>
              <button
                className="btn btn-default"
                title="Close"
                aria-label="Close wiki images"
                onClick={() => {
                  setShowWiki(false);
                  setWikiStatus("");
                }}
              >
                <i className="fas fa-times" />
              </button>
            </span>
          </div>
          {wikiStatus && <small style={{ color: "var(--text-muted)" }}>{wikiStatus}</small>}
        </div>
      )}
      {wikiStatus && !(isAdmin && showWiki) && (
        <div style={{ marginTop: 10 }}>
          <small style={{ color: "var(--text-muted)" }}>{wikiStatus}</small>
        </div>
      )}

      <hr />

      {/* Values table */}
      <EditorTableContainer>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col-1 hidden-xs hidden-sm visible-md visible-lg">
                <i className="fas fa-user" title="Creator" />
              </th>
              <th
                className="col-5"
                style={{ cursor: "pointer", userSelect: "none" }}
                onClick={() => handleSort("value")}
              >
                Answer {sortIcon("value")}
              </th>
              <th
                className="col-6"
                style={{ cursor: "pointer", userSelect: "none" }}
                onClick={() => handleSort("blurb")}
              >
                Blurb {sortIcon("blurb")}
              </th>
              <th
                className="hidden-xs hidden-sm visible-md visible-lg"
                style={{ cursor: "pointer", whiteSpace: "nowrap", userSelect: "none", width: 90 }}
                onClick={() => handleSort("date")}
              >
                Created {sortIcon("date")}
              </th>
              <th
                className="hidden-xs hidden-sm visible-md visible-lg"
                style={{ cursor: "pointer", whiteSpace: "nowrap", userSelect: "none", width: 90 }}
                onClick={() => handleSort("modifyDate")}
              >
                Updated {sortIcon("modifyDate")}
              </th>
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
                <InputCell>
                  <AutoTextarea
                    value={newItem.value}
                    placeholder={`New answer (${list.values.length + 1})`}
                    onChange={(v) => setNewItem({ ...newItem, value: v })}
                    onKeyDown={(e) => handleKeyDown(e, "value")}
                    forwardedRef={newValueInputRef}
                  />
                </InputCell>
                <InputCell>
                  <AutoTextarea
                    value={newItem.blurb}
                    placeholder={`Display after guessing ${newItem.value || "new answer"} (Can be a URL)`}
                    onChange={(v) => setNewItem({ ...newItem, blurb: v })}
                    onKeyDown={(e) => handleKeyDown(e, "blurb")}
                    forwardedRef={newBlurbInputRef}
                  />
                </InputCell>
                <td className="hidden-xs hidden-sm visible-md visible-lg" />
                <td className="hidden-xs hidden-sm visible-md visible-lg" />
                <td colSpan={2} style={{ textAlign: "center" }}>
                  <button
                    className={`btn btn-sm ${newItemIsDuplicate ? "btn-danger" : "btn-default"}`}
                    onClick={addValue}
                    disabled={!newItem.value || newItemIsDuplicate}
                    title={newItemIsDuplicate ? `"${newItem.value}" is already in the list` : "Add answer"}
                  >
                    <i className={`fas ${newItemIsDuplicate ? "fa-ban" : "fa-plus"}`} />
                  </button>
                  {newItemIsDuplicate && <div className="text-danger small">Already in the list</div>}
                </td>
              </tr>
            )}

            {/* Existing items */}
            {sortedIndices.map((i) => {
              const v = list.values[i];
              return (
                <ValueRow
                  key={v._id?.toString() || i}
                  v={v}
                  index={i}
                  readOnly={readOnly}
                  total={list.values.length}
                  byListCreator={!v.creator || !list.creator || String(v.creator._id) === String(list.creator._id)}
                  onUpdate={updateValue}
                  onRemove={removeValue}
                  onBlurbClick={setSelectedItem}
                />
              );
            })}
          </tbody>
        </table>
      </EditorTableContainer>
    </EditListPanel>
  );
}
