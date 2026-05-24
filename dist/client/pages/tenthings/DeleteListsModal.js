"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteListsModal = void 0;
const react_1 = require("react");
function DeleteListsModal({ lists, onConfirm, onCancel }) {
    const [confirmed, setConfirmed] = (0, react_1.useState)(false);
    const plural = lists.length > 1;
    return (<div className="modal fade in" role="dialog" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onCancel}>
              &times;
            </button>
            <h3 className="modal-title">Delete list{plural ? "s" : ""}</h3>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {lists.map((l) => (<li key={l._id} className="list-group-item">
                  {l.name}
                </li>))}
            </ul>
            <h4 className="confirm-message" style={{ cursor: "pointer", marginTop: 16 }} onClick={() => setConfirmed((c) => !c)}>
              <i className={confirmed ? "fas fa-check-square" : "fal fa-square"} style={{ verticalAlign: "middle", marginRight: 8 }}/>
              I understand this action is irreversible
            </h4>
          </div>
          <div className="modal-footer">
            <div className="btn-group">
              <button type="button" className="btn btn-danger" onClick={onConfirm} disabled={!confirmed}>
                Delete {lists.length} list{plural ? "s" : ""}
              </button>
              <button type="button" className="btn btn-default" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
exports.DeleteListsModal = DeleteListsModal;
//# sourceMappingURL=DeleteListsModal.js.map