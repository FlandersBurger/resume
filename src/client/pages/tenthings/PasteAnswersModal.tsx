import { useMemo, useState } from "react";
import styled from "styled-components";
import { parsePastedAnswers, PasteSeparator } from "@utils/paste-answers";

const SEPARATORS: { value: PasteSeparator; label: string }[] = [
  { value: "auto", label: "Auto-detect" },
  { value: "lines", label: "One per line" },
  { value: "commas", label: "Commas" },
  { value: "semicolons", label: "Semicolons" },
  { value: "tabs", label: "Tabs" },
];

const Preview = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  max-height: 40vh;
  overflow-y: auto;
  border: 1px solid var(--border);
  li {
    padding: 2px 8px;
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
    align-items: center;
    cursor: pointer;
  }
  .duplicate {
    color: var(--text-muted);
    text-decoration: line-through;
  }
`;

interface Props {
  existing: string[];
  onAdd: (values: string[]) => void;
  onClose: () => void;
}

/** Turns text copied from a web page into answers, previewed so stray headings can be unticked first. */
export function PasteAnswersModal({ existing, onAdd, onClose }: Props) {
  const [text, setText] = useState("");
  const [separator, setSeparator] = useState<PasteSeparator>("auto");
  const [unticked, setUnticked] = useState<Set<number>>(new Set());

  const parsed = useMemo(() => parsePastedAnswers(text, existing, separator), [text, existing, separator]);
  const toAdd = parsed.filter((answer, i) => !answer.duplicate && !unticked.has(i)).map(({ value }) => value);
  const duplicates = parsed.filter(({ duplicate }) => duplicate).length;

  const toggle = (i: number) =>
    setUnticked((prev) => {
      const next = new Set(prev);
      if (!next.delete(i)) next.add(i);
      return next;
    });

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
            <h3 className="modal-title">Paste answers</h3>
          </div>
          <div className="modal-body">
            <textarea
              className="form-control"
              rows={8}
              autoFocus
              placeholder="Paste a list copied from a web page: one answer per line, or separated by commas, semicolons or tabs."
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setUnticked(new Set());
              }}
            />
            <div className="input-group" style={{ marginTop: 10 }}>
              <span className="input-group-addon">Split on</span>
              <select
                className="form-control"
                value={separator}
                aria-label="Split on"
                onChange={(e) => {
                  setSeparator(e.target.value as PasteSeparator);
                  setUnticked(new Set());
                }}
              >
                {SEPARATORS.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            {parsed.length > 0 && (
              <Preview aria-label="Parsed answers">
                {parsed.map((answer, i) => (
                  <li key={i}>
                    <label className={answer.duplicate ? "duplicate" : undefined}>
                      <input
                        type="checkbox"
                        checked={!answer.duplicate && !unticked.has(i)}
                        disabled={answer.duplicate}
                        onChange={() => toggle(i)}
                      />
                      {answer.value}
                    </label>
                  </li>
                ))}
              </Preview>
            )}
            {duplicates > 0 && (
              <small style={{ color: "var(--text-muted)" }}>
                {duplicates} already in the list or repeated, skipped.
              </small>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary" disabled={!toAdd.length} onClick={() => onAdd(toAdd)}>
              Add {toAdd.length} answer{toAdd.length === 1 ? "" : "s"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
