import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useApp } from "../context/AppContext";
import { getSass, createSass, updateSass, deleteSass, SassEntry } from "../services/tenthings";

const isImageUrl = (s: string) => /^https?:\/\//i.test(s) && /\.(jpe?g|png|gif|webp)(\?.*)?$/i.test(s);

const EditPanel = styled.div<{ $active?: boolean }>`
  top: 50px;
  position: fixed;
  height: calc(100% - 50px);
  overflow-y: scroll;
  overflow-x: hidden;
  right: ${({ $active }) => ($active ? "0" : "-100%")};
  width: 95%;
  transition: right 0.3s ease-in-out;
  background-color: white;
  z-index: 100;
  border: solid;
  border-color: black;
  padding: 0 20px 20px;
`;

const EditPanelHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  margin: 0 -20px;
  padding: 0 20px;
  border-bottom: solid;
  border-bottom-color: black;
`;

const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  cursor: pointer;
  display: ${({ $visible }) => ($visible ? "block" : "none")};
`;

const ResponseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
  margin-bottom: 8px;
`;

const ResponseCard = styled.div`
  position: relative;
  border: 1px solid #ddd;
  background: white;
  padding: 8px;
  display: flex;
  flex-direction: column;
  img {
    display: block;
    width: 100%;
    height: 120px;
    object-fit: contain;
    background: #f7f7f7;
    border: 1px solid #eee;
    margin-bottom: 6px;
  }
  textarea {
    resize: vertical;
    flex: 1;
  }
`;

const RemoveResponseBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 1;
`;

const BtnIcon = styled.button`
  padding: 10px;
`;

const BtnLabel = styled.span`
  display: none;
  @media (min-width: 992px) {
    display: inline;
  }
`;

// Single-field equivalent of ListEditor's AutoTextarea: collapsed by default,
// expands while focused/typing, collapses again on blur.
function AutoGrowTextarea({
  value,
  onChange,
  onKeyDown,
  placeholder,
  forwardedRef,
}: {
  value: string;
  onChange: (v: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  forwardedRef?: React.Ref<HTMLTextAreaElement>;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const COLLAPSED = 43;
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
          if (typeof forwardedRef === "function") forwardedRef(el);
          else forwardedRef.current = el;
        }
      }}
      className="form-control"
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value);
        expand();
      }}
      onFocus={expand}
      onBlur={collapse}
      onKeyDown={onKeyDown}
      style={{ resize: "none", overflow: "hidden", height: COLLAPSED }}
    />
  );
}

type Draft = Omit<SassEntry, "_id" | "triggers"> & {
  _id?: string;
  triggersText: string;
};

const toDraft = (entry?: SassEntry): Draft => ({
  _id: entry?._id,
  label: entry?.label ?? "",
  triggersText: entry?.triggers?.join(", ") ?? "",
  responses: entry?.responses ? [...entry.responses] : [],
  requiresBotMention: entry?.requiresBotMention ?? true,
  enabled: entry?.enabled ?? true,
  order: entry?.order ?? 0,
  date: entry?.date,
  modifyDate: entry?.modifyDate,
});

export default function TenThingsSass() {
  const { isAdmin } = useApp();
  const [entries, setEntries] = useState<SassEntry[]>([]);
  const [editing, setEditing] = useState<Draft | null>(null);
  const [editorMounted, setEditorMounted] = useState(false);
  const [editorVisible, setEditorVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newResponse, setNewResponse] = useState("");

  // Stable refs so blur handlers always read the latest draft, and so a brand-new
  // entry is only POSTed once even if multiple fields blur in quick succession.
  const editingRef = useRef(editing);
  editingRef.current = editing;
  const creatingRef = useRef<Promise<SassEntry> | null>(null);

  const loadData = () => {
    if (!isAdmin) return;
    getSass().then(setEntries);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  if (!isAdmin) return <h2 className="text-danger">Admin only</h2>;

  const openEditor = (entry?: SassEntry) => {
    setEditing(toDraft(entry));
    setError(null);
    setNewResponse("");
    creatingRef.current = null;
    setEditorMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setEditorVisible(true)));
  };

  const closeEditor = () => {
    setEditorVisible(false);
    setTimeout(() => {
      setEditing(null);
      setEditorMounted(false);
    }, 320);
  };

  const findConflictingCatchAll = (requiresBotMention: boolean, excludeId?: string) =>
    entries.find((e) => e.requiresBotMention === requiresBotMention && e.triggers.length === 0 && e._id !== excludeId);

  // Saves the given draft (or the latest one in editingRef) immediately — used as the
  // autosave-on-blur handler, mirroring ListEditor's onBlur-saves-the-whole-entity pattern.
  const persist = async (draft = editingRef.current) => {
    if (!draft) return;
    const triggers = draft.triggersText
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    if (triggers.length === 0) {
      const conflict = findConflictingCatchAll(draft.requiresBotMention, draft._id);
      if (conflict) {
        setError(
          `"${conflict.label || "(unlabeled)"}" is already the catch-all for this bucket. Only one is allowed — add at least one trigger, or edit that entry instead.`,
        );
        return;
      }
    }
    setError(null);

    const payload = {
      label: draft.label,
      requiresBotMention: draft.requiresBotMention,
      enabled: draft.enabled,
      order: draft.order,
      triggers,
      responses: draft.responses.map((r) => r.trim()).filter(Boolean),
    };

    try {
      let id = draft._id;
      if (!id) {
        if (!creatingRef.current) creatingRef.current = createSass(payload);
        const created = await creatingRef.current;
        id = created._id;
        setEditing((prev) => (prev ? { ...prev, _id: prev._id ?? id! } : prev));
      }
      await updateSass({ ...payload, _id: id! });
    } catch {
      setError("Could not save — a catch-all entry for this bucket may already exist.");
      return;
    }
    loadData();
  };

  const updateResponse = (index: number, value: string) => {
    if (!editing) return;
    setEditing({ ...editing, responses: editing.responses.map((r, i) => (i === index ? value : r)) });
  };

  const removeResponse = (index: number) => {
    if (!editing) return;
    const updated = { ...editing, responses: editing.responses.filter((_, i) => i !== index) };
    setEditing(updated);
    persist(updated);
  };

  const addResponse = () => {
    if (!editing || !newResponse.trim()) return;
    const updated = { ...editing, responses: [...editing.responses, newResponse.trim()] };
    setEditing(updated);
    setNewResponse("");
    persist(updated);
  };

  const handleDelete = async (entry: SassEntry) => {
    if (!window.confirm(`Delete "${entry.label || "(unlabeled)"}"?`)) return;
    await deleteSass(entry._id);
    loadData();
  };

  const handleMove = async (entry: SassEntry, direction: -1 | 1) => {
    const siblings = entries
      .filter((e) => e.requiresBotMention === entry.requiresBotMention)
      .sort((a, b) => a.order - b.order);
    const index = siblings.findIndex((e) => e._id === entry._id);
    const swapWith = siblings[index + direction];
    if (!swapWith) return;
    await Promise.all([
      updateSass({ ...entry, order: swapWith.order }),
      updateSass({ ...swapWith, order: entry.order }),
    ]);
    loadData();
  };

  const sorted = [...entries].sort(
    (a, b) => Number(b.requiresBotMention) - Number(a.requiresBotMention) || a.order - b.order,
  );

  return (
    <div className="page container-fluid">
      <h1 style={{ marginTop: 0 }}>Ten Things Sass</h1>

      <div className="btn-group" style={{ marginBottom: 16 }}>
        <button className="btn btn-default" onClick={loadData} title="Refresh">
          <i className="fas fa-sync" />
        </button>
        <button className="btn btn-success" onClick={() => openEditor()}>
          Add entry
        </button>
      </div>

      <table className="table table-striped table-condensed">
        <thead>
          <tr>
            <th>Order</th>
            <th>Enabled</th>
            <th>Label</th>
            <th>Requires "bot"</th>
            <th>Triggers</th>
            <th>Responses</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {sorted.map((entry) => (
            <tr key={entry._id}>
              <td>
                {entry.order}{" "}
                <button className="btn btn-xs btn-default" onClick={() => handleMove(entry, -1)} title="Move up">
                  <i className="fas fa-arrow-up" />
                </button>{" "}
                <button className="btn btn-xs btn-default" onClick={() => handleMove(entry, 1)} title="Move down">
                  <i className="fas fa-arrow-down" />
                </button>
              </td>
              <td>
                <i className={`fas ${entry.enabled ? "fa-check text-success" : "fa-times text-muted"}`} />
              </td>
              <td style={{ cursor: "pointer" }} onClick={() => openEditor(entry)}>
                {entry.label || <em className="text-muted">(unlabeled)</em>}
              </td>
              <td>{entry.requiresBotMention ? "Yes" : "No"}</td>
              <td>{entry.triggers.length ? entry.triggers.join(", ") : <em className="text-muted">catch-all</em>}</td>
              <td>{entry.responses.length}</td>
              <td>
                <button className="btn btn-sm btn-default" onClick={() => openEditor(entry)}>
                  <i className="fas fa-pencil-alt" />
                </button>{" "}
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(entry)}>
                  <i className="fas fa-trash-alt" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editorMounted && editing && (
        <EditPanel $active={editorVisible}>
          <EditPanelHeader>
            <h1>{editing._id ? editing.label || "Edit entry" : "New entry"}</h1>
            <i className="fas fa-times fa-3x" style={{ cursor: "pointer" }} onClick={closeEditor} />
          </EditPanelHeader>

          <br />

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-group">
            <label>Label</label>
            <input
              className="form-control"
              value={editing.label}
              onChange={(e) => setEditing({ ...editing, label: e.target.value })}
              onBlur={() => persist()}
            />
          </div>
          <div className="form-group">
            <label>Triggers (comma separated; leave empty for a catch-all)</label>
            <div className="input-group">
              <input
                className="form-control"
                value={editing.triggersText}
                onChange={(e) => {
                  setError(null);
                  setEditing({ ...editing, triggersText: e.target.value });
                }}
                onBlur={() => persist()}
              />
              <span className="input-group-btn">
                <BtnIcon
                  type="button"
                  className={`btn ${editing.requiresBotMention ? "btn-primary" : "btn-default"}`}
                  title='Requires "bot" to be mentioned'
                  onClick={() => {
                    setError(null);
                    const updated = { ...editing, requiresBotMention: !editing.requiresBotMention };
                    setEditing(updated);
                    persist(updated);
                  }}
                >
                  <i className="fas fa-robot" /> <BtnLabel>Bot mention?</BtnLabel>
                </BtnIcon>
                <BtnIcon
                  type="button"
                  className={`btn ${editing.enabled ? "btn-primary" : "btn-default"}`}
                  title={editing.enabled ? "Enabled" : "Disabled"}
                  onClick={() => {
                    const updated = { ...editing, enabled: !editing.enabled };
                    setEditing(updated);
                    persist(updated);
                  }}
                >
                  <i className={`fas ${editing.enabled ? "fa-toggle-on" : "fa-toggle-off"}`} />{" "}
                  <BtnLabel>Enabled?</BtnLabel>
                </BtnIcon>
              </span>
            </div>
          </div>
          <div className="form-group">
            <label>Responses (gif/image URLs are previewed on their own card)</label>

            <div className="input-group" style={{ marginBottom: 12 }}>
              <AutoGrowTextarea
                value={newResponse}
                onChange={setNewResponse}
                placeholder="New response text or gif/image URL"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    addResponse();
                  }
                }}
              />
              <span className="input-group-btn">
                <button type="button" className="btn btn-default" onClick={addResponse} disabled={!newResponse.trim()}>
                  <i className="fas fa-plus" /> Add
                </button>
              </span>
            </div>

            <ResponseGrid>
              {editing.responses.map((response, i) => (
                <ResponseCard key={i}>
                  <RemoveResponseBtn
                    type="button"
                    className="btn btn-xs btn-danger"
                    title="Remove"
                    onClick={() => removeResponse(i)}
                  >
                    <i className="fas fa-times" />
                  </RemoveResponseBtn>
                  {isImageUrl(response.trim()) && <img src={response.trim()} alt="" />}
                  <textarea
                    className="form-control"
                    rows={isImageUrl(response.trim()) ? 2 : 4}
                    value={response}
                    placeholder="Response text or gif/image URL"
                    onChange={(e) => updateResponse(i, e.target.value)}
                    onBlur={() => persist()}
                  />
                </ResponseCard>
              ))}
            </ResponseGrid>
          </div>
        </EditPanel>
      )}

      {editorMounted && <Overlay $visible={editorVisible} onClick={closeEditor} />}
    </div>
  );
}
