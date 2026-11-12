import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useApp } from "../../../client/context/AppContext";
import { ListEditorDrawer, canEdit, isComplete } from "../../../client/pages/tenthings/ListEditorDrawer";
import {
  TenThingsList,
  createList,
  getCategories,
  getLanguages,
  getList,
  updateList,
} from "../../../client/services/tenthings";
import { defaultContextValue } from "../../__mocks__/AppContextMock";

jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/services/tenthings", () => ({
  getList: jest.fn(),
  createList: jest.fn(),
  updateList: jest.fn(),
  getBlurbs: jest.fn(),
  getCategories: jest.fn(),
  getLanguages: jest.fn(),
}));

const mockUseApp = useApp as jest.MockedFunction<typeof useApp>;
const mockGetList = getList as jest.Mock;
const mockCreateList = createList as jest.Mock;
const mockUpdateList = updateList as jest.Mock;

const me = { _id: "me", username: "me" };
const someoneElse = { _id: "other", username: "other" };

const answers = (n: number) => Array.from({ length: n }, (_, i) => ({ _id: `v${i}`, value: `Answer ${i}` }));

const existing = (overrides: Partial<TenThingsList> = {}): TenThingsList => ({
  _id: "list1",
  name: "Jobs starting with N",
  language: "EN",
  categories: ["work"],
  answers: 10,
  creator: me,
  values: answers(10),
  ...overrides,
});

function setup({ isAdmin = false, user = me as typeof me | null } = {}) {
  const toast = jest.fn();
  mockUseApp.mockReturnValue({ ...defaultContextValue, currentUser: user, isAdmin, toast });
  return { toast };
}

/** Let promises settle and the slide-in frames run. */
const settle = () => act(async () => new Promise((r) => setTimeout(r, 40)));

beforeEach(() => {
  jest.clearAllMocks();
  (getCategories as jest.Mock).mockResolvedValue([{ value: "work", label: "Work" }]);
  (getLanguages as jest.Mock).mockResolvedValue([{ code: "EN", name: "English", native: "English" }]);
});

describe("isComplete", () => {
  it("needs a name, a category and ten Answers", () => {
    expect(isComplete(existing())).toBe(true);
    expect(isComplete(existing({ values: answers(9) }))).toBe(false);
    expect(isComplete(existing({ name: "" }))).toBe(false);
    expect(isComplete(existing({ categories: [] }))).toBe(false);
  });
});

describe("canEdit", () => {
  it("lets the creator and admins edit, and nobody signed out", () => {
    const list = existing();
    expect(canEdit(list, me as any, false)).toBe(true);
    expect(canEdit(list, someoneElse as any, false)).toBe(false);
    expect(canEdit(list, someoneElse as any, true)).toBe(true);
    expect(canEdit(list, null, true)).toBe(false);
  });
});

describe("ListEditorDrawer", () => {
  it("renders nothing while closed", () => {
    setup();
    const { container } = render(<ListEditorDrawer listId={null} onClose={jest.fn()} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("loads the List by id and saves every change to an existing List", async () => {
    setup();
    mockGetList.mockResolvedValue(existing());
    mockUpdateList.mockImplementation(async (l) => l);
    const onSaved = jest.fn();
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} onSaved={onSaved} />);
    await settle();

    const name = screen.getByPlaceholderText("Name");
    expect(name).toHaveValue("Jobs starting with N");
    fireEvent.change(name, { target: { value: "Jobs beginning with N" } });
    fireEvent.blur(name);
    await settle();

    expect(mockUpdateList).toHaveBeenCalledWith(expect.objectContaining({ _id: "list1", name: "Jobs beginning with N" }));
    expect(onSaved).toHaveBeenCalledWith(expect.objectContaining({ name: "Jobs beginning with N" }), false);
  });

  it("saves an existing List even when it drops below ten Answers", async () => {
    setup();
    mockGetList.mockResolvedValue(existing({ values: answers(9) }));
    mockUpdateList.mockImplementation(async (l) => l);
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} />);
    await settle();

    fireEvent.blur(screen.getByPlaceholderText("Name"));
    await settle();
    expect(mockUpdateList).toHaveBeenCalledTimes(1);
  });

  it("only creates a new List once it is complete, and only once", async () => {
    setup();
    let finishCreate!: (l: TenThingsList) => void;
    mockCreateList.mockImplementation((_userId, l) => new Promise((r) => (finishCreate = () => r({ ...l, _id: "created" }))));
    mockUpdateList.mockImplementation(async (l) => l);
    const onSaved = jest.fn();
    const { container } = render(<ListEditorDrawer listId="new" onClose={jest.fn()} onSaved={onSaved} />);
    await settle();

    const name = screen.getByPlaceholderText("Name");
    fireEvent.change(name, { target: { value: "Rivers" } });
    fireEvent.blur(name);
    fireEvent.click(screen.getByRole("button", { name: "Work" }));

    const addButton = container.querySelector(".fa-plus")!.closest("button")!;
    for (let i = 0; i < 10; i++) {
      fireEvent.change(screen.getByPlaceholderText(/^New answer/), { target: { value: `River ${i}` } });
      fireEvent.click(addButton);
      if (i < 9) expect(mockCreateList).not.toHaveBeenCalled();
    }
    expect(mockCreateList).toHaveBeenCalledTimes(1);
    expect(mockCreateList.mock.calls[0][1].values).toHaveLength(10);

    // An edit made while the List is being created goes to that List, not into a second one.
    fireEvent.change(name, { target: { value: "Rivers of Europe" } });
    fireEvent.blur(name);
    await act(async () => finishCreate(undefined as any));
    await settle();

    expect(mockCreateList).toHaveBeenCalledTimes(1);
    expect(mockUpdateList).toHaveBeenCalledWith(expect.objectContaining({ _id: "created", name: "Rivers of Europe" }));
    expect(onSaved).toHaveBeenCalledWith(expect.objectContaining({ _id: "created" }), true);
  });

  it("never saves when read-only", async () => {
    setup({ isAdmin: true });
    mockGetList.mockResolvedValue(existing());
    render(<ListEditorDrawer listId="list1" readOnly onClose={jest.fn()} />);
    await settle();

    const name = screen.getByPlaceholderText("Name");
    expect(name).toBeDisabled();
    fireEvent.blur(name);
    await settle();
    expect(mockUpdateList).not.toHaveBeenCalled();
  });

  it("is read-only for someone else's List", async () => {
    setup({ user: someoneElse as any });
    mockGetList.mockResolvedValue(existing());
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} onDelete={jest.fn()} />);
    await settle();

    expect(screen.getByPlaceholderText("Name")).toBeDisabled();
    expect(screen.queryByTitle("Delete list")).toBeNull();
  });

  it("offers delete only when the host handles it", async () => {
    setup();
    mockGetList.mockResolvedValue(existing());
    const onDelete = jest.fn();
    const { rerender } = render(<ListEditorDrawer listId="list1" onClose={jest.fn()} />);
    await settle();
    expect(screen.queryByTitle("Delete list")).toBeNull();

    rerender(<ListEditorDrawer listId="list1" onClose={jest.fn()} onDelete={onDelete} />);
    fireEvent.click(screen.getByTitle("Delete list"));
    expect(onDelete).toHaveBeenCalledWith(expect.objectContaining({ _id: "list1" }));
  });

  it("tells the user and closes when the List can't be loaded", async () => {
    const { toast } = setup();
    mockGetList.mockRejectedValue(new Error("404"));
    const onClose = jest.fn();
    render(<ListEditorDrawer listId="missing" onClose={onClose} />);
    await settle();
    expect(toast).toHaveBeenCalledWith("Failed to load list");
    expect(onClose).toHaveBeenCalled();
  });

  it("closes from the backdrop", async () => {
    setup();
    mockGetList.mockResolvedValue(existing());
    const onClose = jest.fn();
    render(<ListEditorDrawer listId="list1" onClose={onClose} />);
    await settle();
    fireEvent.click(screen.getByTestId("list-editor-backdrop"));
    expect(onClose).toHaveBeenCalled();
  });
});
