import { useState } from "react";
import styled from "styled-components";
import { CategoryOption, TenThingsList, updateListFields } from "../../services/tenthings";
import { CategoryState, categoryState, toggleCategoryOnLists } from "./categories";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
  gap: 4px;

  .btn {
    font-weight: bold;
  }
`;

const Subcategories = styled.div`
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid var(--border);

  h5 {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--text-muted);
    margin: 0 0 4px;
  }
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const STATE_CLASS: Record<CategoryState, string> = {
  checked: "btn-primary",
  partial: "btn-info",
  unchecked: "btn-default",
};

const STATE_TITLE: Record<CategoryState, string> = {
  checked: "All selected lists: click to remove",
  partial: "Some selected lists: click to add to the rest",
  unchecked: "Click to add to all selected lists",
};

interface Props {
  lists: TenThingsList[];
  categoryOptions: CategoryOption[];
  /** After each save, with the lists as the server returned them. */
  onUpdated: (lists: TenThingsList[]) => void;
  onError: (message: string) => void;
  onClose: () => void;
}

/** Sets categories on several lists at once; each click is saved straight away. */
export function EditListsModal({ lists, categoryOptions, onUpdated, onError, onClose }: Props) {
  const [saving, setSaving] = useState(false);

  const toggle = async (category: string) => {
    const { changes, skipped } = toggleCategoryOnLists(lists, category);
    if (skipped.length) onError(`A list needs at least one category: ${skipped.join(", ")}`);
    if (!changes.length) return;
    setSaving(true);
    try {
      onUpdated(await Promise.all(changes.map(({ _id, categories }) => updateListFields(_id, { categories }))));
    } catch (error: any) {
      onError(error?.response?.data?.error ?? "Failed to update the lists");
    } finally {
      setSaving(false);
    }
  };

  const button = (option: CategoryOption, size: string) => {
    const state = categoryState(lists, option.value);
    return (
      <button
        key={option.value}
        type="button"
        className={`btn ${size} ${STATE_CLASS[state]}`}
        title={STATE_TITLE[state]}
        aria-pressed={state === "partial" ? "mixed" : state === "checked"}
        disabled={saving}
        onClick={() => toggle(option.value)}
      >
        {option.label}
      </button>
    );
  };

  return (
    <div className="modal fade in" role="dialog" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onClose}>
              &times;
            </button>
            <h3 className="modal-title">Categories of {lists.length} lists</h3>
          </div>
          <div className="modal-body">
            <Grid>{categoryOptions.map((option) => button(option, "btn-sm"))}</Grid>
            {categoryOptions
              .filter((option) => option.subcategories?.length && categoryState(lists, option.value) !== "unchecked")
              .map((option) => (
                <Subcategories key={option.value}>
                  <h5>{option.label}</h5>
                  <Chips>{option.subcategories!.map((sub) => button(sub, "btn-xs"))}</Chips>
                </Subcategories>
              ))}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={onClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
