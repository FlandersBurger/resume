import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  DIFFICULTIES,
  FREQUENCIES,
  ListSuggestions,
  PickedSuggestions,
  SettingSuggestion,
} from "@utils/list-suggestions";
import { CategoryOption, TenThingsList, vetList } from "../../services/tenthings";
import { categoryLabel } from "./format";

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
  .muted {
    color: var(--text-muted);
    font-size: 12px;
  }
`;

type ItemKind = "add" | "remove" | "fix" | "blurbs";
type SettingKind = "name" | "description" | "source" | "categories" | "difficulty" | "frequency";

const SETTINGS: { kind: SettingKind; title: string }[] = [
  { kind: "name", title: "Name" },
  { kind: "description", title: "Description" },
  { kind: "source", title: "Source" },
  { kind: "categories", title: "Categories" },
  { kind: "difficulty", title: "Difficulty" },
  { kind: "frequency", title: "Changes" },
];

const key = (kind: ItemKind, index: number) => `${kind}:${index}`;

/** Everything starts ticked except removals, which never happen unless picked. */
const defaultPicks = (s: ListSuggestions) =>
  new Set([
    ...s.add.map((_, i) => key("add", i)),
    ...s.fix.map((_, i) => key("fix", i)),
    ...s.blurbs.map((_, i) => key("blurbs", i)),
    ...SETTINGS.filter(({ kind }) => s[kind]).map(({ kind }) => kind),
  ]);

const isLink = (url: string) => /^https?:\/\//i.test(url);

const Reason = ({ reason, source }: { reason: string; source?: string }) => (
  <span className="muted">
    {" "}
    — {reason}
    {source && isLink(source) && (
      <>
        {" "}
        <a href={source} target="_blank" rel="noopener noreferrer">
          source
        </a>
      </>
    )}
  </span>
);

interface Props {
  list: TenThingsList;
  categoryOptions: CategoryOption[];
  onApply: (picked: PickedSuggestions) => void;
  onClose: () => void;
}

/** Has Claude vet a list as soon as it opens, then lets the owner pick which suggestions to apply. */
export function VetModal({ list, categoryOptions, onApply, onClose }: Props) {
  const [instruction, setInstruction] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ suggestions: ListSuggestions; cost: number } | null>(null);
  const [picked, setPicked] = useState<Set<string>>(new Set());

  const vet = async (ask?: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await vetList(list, ask || undefined);
      setResult(data);
      setPicked(defaultPicks(data.suggestions));
    } catch (e: any) {
      setError(e?.response?.data?.error ?? "Claude couldn't vet this list.");
    } finally {
      setLoading(false);
    }
  };

  // Each run is billed, so start exactly once even when effects run twice in development.
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    vet();
  }, []);

  const toggle = (k: string) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (!next.delete(k)) next.add(k);
      return next;
    });

  const check = (k: string, children: ReactNode) => (
    <li key={k}>
      <label>
        <input type="checkbox" checked={picked.has(k)} onChange={() => toggle(k)} />
        <span>{children}</span>
      </label>
    </li>
  );

  const showSetting = (kind: SettingKind, s: SettingSuggestion<any>) => {
    if (kind === "categories") return categoryLabel(s.to, categoryOptions);
    if (kind === "difficulty") return DIFFICULTIES[s.to];
    if (kind === "frequency") return FREQUENCIES[s.to];
    if (kind === "source")
      return (
        <a href={s.to} target="_blank" rel="noopener noreferrer">
          {s.to}
        </a>
      );
    return s.to;
  };

  const s = result?.suggestions;
  const settings = s ? SETTINGS.filter(({ kind }) => s[kind]) : [];
  const empty = s && !s.add.length && !s.remove.length && !s.fix.length && !s.blurbs.length && !settings.length;
  const total = result ? picked.size : 0;

  const apply = () => {
    if (!s) return;
    const chosen = <T,>(kind: ItemKind, items: T[]) => items.filter((_, i) => picked.has(key(kind, i)));
    const choice: PickedSuggestions = {
      add: chosen("add", s.add),
      remove: chosen("remove", s.remove),
      fix: chosen("fix", s.fix),
      blurbs: chosen("blurbs", s.blurbs),
    };
    SETTINGS.forEach(({ kind }) => {
      if (picked.has(kind)) (choice as any)[kind] = s[kind];
    });
    onApply(choice);
  };

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
            <h3 className="modal-title">Vet {list.name}</h3>
          </div>
          <div className="modal-body">
            {loading && (
              <p>
                <i className="fas fa-spinner fa-spin" /> Claude is vetting the list…
              </p>
            )}
            {error && <div className="text-danger">{error}</div>}
            {s?.note && <p>{s.note}</p>}
            {empty && <p>Nothing to change: the list looks good.</p>}

            {s && settings.length > 0 && (
              <Group aria-label="List">
                <h4>List</h4>
                <ul>
                  {settings.map(({ kind, title }) =>
                    check(
                      kind,
                      <>
                        <b>{title}:</b> {showSetting(kind, s[kind]!)}
                        <Reason reason={s[kind]!.reason} />
                      </>,
                    ),
                  )}
                </ul>
              </Group>
            )}
            {s && s.add.length > 0 && (
              <Group aria-label="Add">
                <h4>Add ({s.add.length})</h4>
                <ul>
                  {s.add.map((item, i) =>
                    check(
                      key("add", i),
                      <>
                        {item.value}
                        {item.blurb && <span className="muted"> ({item.blurb})</span>}
                        <Reason reason={item.reason} source={item.source} />
                      </>,
                    ),
                  )}
                </ul>
              </Group>
            )}
            {s && s.remove.length > 0 && (
              <Group aria-label="Remove">
                <h4>Remove ({s.remove.length})</h4>
                <ul>
                  {s.remove.map((item, i) =>
                    check(
                      key("remove", i),
                      <>
                        {item.value}
                        <Reason reason={item.reason} source={item.source} />
                      </>,
                    ),
                  )}
                </ul>
              </Group>
            )}
            {s && s.fix.length > 0 && (
              <Group aria-label="Fix">
                <h4>Fix ({s.fix.length})</h4>
                <ul>
                  {s.fix.map((item, i) =>
                    check(
                      key("fix", i),
                      <>
                        {item.value} → {item.to}
                        <Reason reason={item.reason} source={item.source} />
                      </>,
                    ),
                  )}
                </ul>
              </Group>
            )}
            {s && s.blurbs.length > 0 && (
              <Group aria-label="Blurbs">
                <h4>Blurbs ({s.blurbs.length})</h4>
                <ul>
                  {s.blurbs.map((item, i) =>
                    check(
                      key("blurbs", i),
                      <>
                        <b>{item.value}:</b> {item.blurb}
                      </>,
                    ),
                  )}
                </ul>
              </Group>
            )}

            {(result || error) && (
              <div className="input-group" style={{ marginTop: 16 }}>
                <input
                  className="form-control"
                  placeholder='Ask for something specific, e.g. "add the season 7 characters"'
                  value={instruction}
                  disabled={loading}
                  onChange={(e) => setInstruction(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !loading && vet(instruction)}
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" disabled={loading} onClick={() => vet(instruction)}>
                    Vet again
                  </button>
                </span>
              </div>
            )}
          </div>
          <div className="modal-footer">
            {result && (
              <small style={{ color: "var(--text-muted)", float: "left", marginTop: 8 }}>
                Last run cost ≈ ${result.cost.toFixed(2)}
              </small>
            )}
            <button type="button" className="btn btn-default" onClick={onClose} disabled={loading}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary" disabled={!total || loading} onClick={apply}>
              Apply {total} change{total === 1 ? "" : "s"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
