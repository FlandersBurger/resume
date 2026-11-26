import { act, fireEvent, render, screen } from "@testing-library/react";
import { ListTable } from "../../../client/pages/tenthings/ListTable";
import { ConfirmListsModal } from "../../../client/pages/tenthings/ConfirmListsModal";
import { EditListsModal } from "../../../client/pages/tenthings/EditListsModal";
import { DEFAULT_FILTER } from "../../../client/pages/tenthings/listQuery";
import { TenThingsList, updateListFields } from "../../../client/services/tenthings";

jest.mock("../../../client/services/tenthings", () => ({ updateListFields: jest.fn() }));
const mockUpdateListFields = updateListFields as jest.Mock;

const list = (id: string, categories: string[]): TenThingsList => ({
  _id: id,
  name: `List ${id}`,
  language: "EN",
  categories,
  answers: 10,
  creator: { _id: "me", username: "me" },
  values: [],
});

beforeEach(() => jest.clearAllMocks());

describe("the selected-lists buttons", () => {
  const renderTable = (handlers: { onEditHighlighted: jest.Mock; onMerge: jest.Mock }) =>
    render(
      <ListTable
        lists={[list("a", ["music"]), list("b", ["art"])]}
        count={2}
        loading={false}
        filter={DEFAULT_FILTER}
        onFilterChange={jest.fn()}
        highlightedIds={["a", "b"]}
        highlightedCount={2}
        isAdmin
        hasMore={false}
        canAddList
        onSelect={jest.fn()}
        onToggleHighlight={jest.fn()}
        onLoadMore={jest.fn()}
        onRefresh={jest.fn()}
        onAddList={jest.fn()}
        {...handlers}
      />,
    );

  it("edits with the edit button and merges only with the merge button", () => {
    const handlers = { onEditHighlighted: jest.fn(), onMerge: jest.fn() };
    renderTable(handlers);

    fireEvent.click(screen.getByTitle("Edit selected lists"));
    expect(handlers.onEditHighlighted).toHaveBeenCalled();
    expect(handlers.onMerge).not.toHaveBeenCalled();

    fireEvent.click(screen.getByTitle("Merge selected lists"));
    expect(handlers.onMerge).toHaveBeenCalled();
  });
});

describe("ConfirmListsModal", () => {
  it("names the lists and only goes ahead once the action is acknowledged", async () => {
    const onConfirm = jest.fn();
    render(
      <ConfirmListsModal
        action="Merge"
        lists={[list("a", []), list("b", [])]}
        onConfirm={onConfirm}
        onCancel={jest.fn()}
      />,
    );

    expect(screen.getByText("List a")).toBeInTheDocument();
    const merge = screen.getByRole("button", { name: "Merge 2 lists" });
    expect(merge).toBeDisabled();

    fireEvent.click(screen.getByText("I understand this action is irreversible"));
    await act(async () => fireEvent.click(merge));
    expect(onConfirm).toHaveBeenCalled();
  });
});

describe("EditListsModal", () => {
  const options = [
    { value: "music", label: "Music", subcategories: [{ value: "music.kpop", label: "K-pop" }] },
    { value: "art", label: "Art" },
    { value: "film", label: "Film" },
  ];

  it("shows which categories all or some of the lists have, and saves just the categories", async () => {
    mockUpdateListFields.mockImplementation(async (_id, fields) => ({ ...list(_id, []), ...fields }));
    const onUpdated = jest.fn();
    render(
      <EditListsModal
        lists={[list("a", ["music"]), list("b", ["art", "music"])]}
        categoryOptions={options}
        onUpdated={onUpdated}
        onError={jest.fn()}
        onClose={jest.fn()}
      />,
    );

    expect(screen.getByRole("button", { name: "Music" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Art" })).toHaveAttribute("aria-pressed", "mixed");
    expect(screen.getByRole("button", { name: "K-pop" })).toBeInTheDocument();

    await act(async () => fireEvent.click(screen.getByRole("button", { name: "Art" })));
    expect(mockUpdateListFields).toHaveBeenCalledTimes(1);
    expect(mockUpdateListFields).toHaveBeenCalledWith("a", { categories: ["music", "art"] });
    expect(onUpdated).toHaveBeenCalledWith([expect.objectContaining({ _id: "a", categories: ["music", "art"] })]);
  });

  it("won't take away a list's last category", async () => {
    const onError = jest.fn();
    render(
      <EditListsModal
        lists={[list("a", ["music"])]}
        categoryOptions={options}
        onUpdated={jest.fn()}
        onError={onError}
        onClose={jest.fn()}
      />,
    );

    await act(async () => fireEvent.click(screen.getByRole("button", { name: "Music" })));
    expect(mockUpdateListFields).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalledWith("A list needs at least one category: List a");
  });
});
