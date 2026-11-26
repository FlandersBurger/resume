import { ReactNode, useState } from "react";
import { TenThingsList } from "../../services/tenthings";

interface Props {
  /** What happens to the lists, as the title and button say it: "Delete" or "Merge". */
  action: string;
  lists: TenThingsList[];
  /** Shown under the lists, e.g. what a merge keeps. */
  note?: ReactNode;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
}

/** Lists the lists an irreversible action will hit, and only goes ahead once that's acknowledged. */
export function ConfirmListsModal({ action, lists, note, onConfirm, onCancel }: Props) {
  const [confirmed, setConfirmed] = useState(false);
  const [busy, setBusy] = useState(false);
  const plural = lists.length > 1;

  const confirm = async () => {
    setBusy(true);
    try {
      await onConfirm();
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="modal fade in" role="dialog" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onCancel}>
              &times;
            </button>
            <h3 className="modal-title">
              {action} list{plural ? "s" : ""}
            </h3>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {lists.map((l) => (
                <li key={l._id} className="list-group-item">
                  {l.name}
                </li>
              ))}
            </ul>
            {note && <p className="text-muted">{note}</p>}
            <h4
              className="confirm-message"
              style={{ cursor: "pointer", marginTop: 16 }}
              onClick={() => setConfirmed((c) => !c)}
            >
              <i
                className={confirmed ? "fas fa-check-square" : "fal fa-square"}
                style={{ verticalAlign: "middle", marginRight: 8 }}
              />
              I understand this action is irreversible
            </h4>
          </div>
          <div className="modal-footer">
            <div className="btn-group">
              <button type="button" className="btn btn-danger" onClick={confirm} disabled={!confirmed || busy}>
                {action} {lists.length} list{plural ? "s" : ""}
              </button>
              <button type="button" className="btn btn-default" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
