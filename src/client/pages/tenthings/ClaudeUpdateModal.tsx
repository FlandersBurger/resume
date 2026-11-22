import { useState } from "react";
import styled from "styled-components";
import { ListSuggestions, Suggestion } from "@utils/list-suggestions";
import { suggestListChanges } from "../../services/tenthings";

const Group = styled.div`
  margin-top: 12px;
  h4 {
    margin: 0 0 4px;
    font-size: 14px;
    font-weight: bold;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid var(--border);
  }
  li {
    padding: 4px 8px;
    border-bottom: 1px solid var(--border);
    &:last-child {
      border-bottom: none;
    }
  }
  label {
    font-weight: normal;
    margin: 0;
    display: flex;
    gap: 6px;
    align-items: baseline;
    cursor: pointer;
  }
  .reason {
    color: var(--text-muted);
    font-size: 12px;
  }
`;

type Kind = "add" | "remove" | "fix";

const GROUPS: { kind: Kind; title: string }[] = [
  { kind: "add", title: "Add" },
  { kind: "remove", title: "Remove" },
  { kind: "fix", title: "Fix" },
];

const key = (kind: Kind, index: number) => `${kind}:${index}`;

/** Additions and fixes start ticked; removals never happen unless picked. */
const defaultPicks = (suggestions: ListSuggestions) =>
  new Set([...suggestions.add.map((_, i) => key("add", i)), ...suggestions.fix.map((_, i) => key("fix", i))]);

interface Props {
  listId: string;
  /** The list's "how often it changes" setting; lists that change get web search by default. */
  frequency?: number;
  onApply: (picked: Pick<ListSuggestions, "add" | "remove" | "fix">) => void;
  onClose: () => void;
}

/** Asks Claude to review a list, then lets the owner pick which suggested changes to apply. */
export function ClaudeUpdateModal({ listId, frequency, onApply, onClose }: Props) {
  const [instruction, setInstruction] = useState("");
  const [webSearch, setWebSearch] = useState(frequency === 0 || frequency === 1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ suggestions: ListSuggestions; cost: number } | null>(null);
  const [picked, setPicked] = useState<Set<string>>(new Set());

  const suggest = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await suggestListChanges(listId, { instruction, webSearch });
      setResult(data);
      setPicked(defaultPicks(data.suggestions));
    } catch (e: any) {
      setError(e?.response?.data?.error ?? "Claude couldn't review this list.");
    } finally {
      setLoading(false);
    }
  };

  const toggle = (k: string) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (!next.delete(k)) next.add(k);
      return next;
    });

  const chosen = <T extends Suggestion>(kind: Kind, items: T[]) => items.filter((_, i) => picked.has(key(kind, i)));
  const total = result ? picked.size : 0;
  const empty =
    result && !result.suggestions.add.length && !result.suggestions.remove.length && !result.suggestions.fix.length;

  return (
    <div
      className="modal fade in"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)", overflowY: "auto" }}
      onClick={loading ? undefined : onClose}
    >
      <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onClose} disabled={loading}>
              &times;
            </button>
            <h3 className="modal-title">Update with Claude</h3>
          </div>
          <div className="modal-body">
            <textarea
              className="form-control"
              rows={2}
              placeholder='Optional, e.g. "add the season 7 characters" or "check this is current". Leave empty for a general review.'
              value={instruction}
              disabled={loading}
              onChange={(e) => setInstruction(e.target.value)}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
              <label style={{ fontWeight: "normal", margin: 0 }}>
                <input
                  type="checkbox"
                  checked={webSearch}
                  disabled={loading}
                  onChange={(e) => setWebSearch(e.target.checked)}
                />{" "}
                Search the web
              </label>
              <button type="button" className="btn btn-default" onClick={suggest} disabled={loading}>
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin" /> Reviewing…
                  </>
                ) : result ? (
                  "Ask again"
                ) : (
                  "Suggest"
                )}
              </button>
              {result && (
                <small style={{ color: "var(--text-muted)" }}>This run cost ≈ ${result.cost.toFixed(2)}</small>
              )}
            </div>
            {error && (
              <div className="text-danger" style={{ marginTop: 8 }}>
                {error}
              </div>
            )}
            {result?.suggestions.note && <p style={{ marginTop: 12 }}>{result.suggestions.note}</p>}
            {empty && <p style={{ marginTop: 12 }}>No changes suggested.</p>}
            {result &&
              GROUPS.map(({ kind, title }) => {
                const items: (Suggestion & { to?: string })[] = result.suggestions[kind];
                if (!items.length) return null;
                return (
                  <Group key={kind} aria-label={title}>
                    <h4>
                      {title} ({items.length})
                    </h4>
                    <ul>
                      {items.map((item, i) => (
                        <li key={i}>
                          <label>
                            <input
                              type="checkbox"
                              checked={picked.has(key(kind, i))}
                              onChange={() => toggle(key(kind, i))}
                            />
                            <span>
                              {kind === "fix" ? `${item.value} → ${item.to}` : item.value}{" "}
                              <span className="reason">
                                — {item.reason}
                                {/^https?:\/\//i.test(item.source) && (
                                  <>
                                    {" "}
                                    <a href={item.source} target="_blank" rel="noopener noreferrer">
                                      source
                                    </a>
                                  </>
                                )}
                              </span>
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </Group>
                );
              })}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={onClose} disabled={loading}>
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={!total || loading}
              onClick={() =>
                result &&
                onApply({
                  add: chosen("add", result.suggestions.add),
                  remove: chosen("remove", result.suggestions.remove),
                  fix: chosen("fix", result.suggestions.fix),
                })
              }
            >
              Apply {total} change{total === 1 ? "" : "s"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
