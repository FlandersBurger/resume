import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useApp } from "../../../client/context/AppContext";
import { ListEditorDrawer, canEdit, isComplete } from "../../../client/pages/tenthings/ListEditorDrawer";
import {
  TenThingsList,
  createList,
  getCategories,
  getLanguages,
  getBlurbs,
  getClaudeEnabled,
  getList,
  getSimilarLists,
  searchLists,
  vetList,
  updateList,
} from "../../../client/services/tenthings";
import { defaultContextValue } from "../../__mocks__/AppContextMock";

import { resetTenThingsReference } from "../../../client/hooks/useTenThingsReference";
jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/services/tenthings", () => ({
  getList: jest.fn(),
  createList: jest.fn(),
  updateList: jest.fn(),
  getBlurbs: jest.fn(),
  getClaudeEnabled: jest.fn().mockResolvedValue(false),
  vetList: jest.fn(),
  getCategories: jest.fn(),
  getLanguages: jest.fn(),
  getSimilarLists: jest.fn().mockResolvedValue({ lists: [], duplicate: null }),
  searchLists: jest.fn().mockResolvedValue([]),
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
  resetTenThingsReference();
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

    expect(mockUpdateList).toHaveBeenCalledWith(
      expect.objectContaining({ _id: "list1", name: "Jobs beginning with N" }),
    );
    expect(onSaved).toHaveBeenCalledWith(expect.objectContaining({ name: "Jobs beginning with N" }), false);
  });

  it("tidies the name's dashes and spaces when the field loses focus", async () => {
    setup();
    mockGetList.mockResolvedValue(existing());
    mockUpdateList.mockImplementation(async (l) => l);
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} onSaved={jest.fn()} />);
    await settle();

    const name = screen.getByPlaceholderText("Name");
    fireEvent.change(name, { target: { value: " Kamelot –  Albums " } });
    fireEvent.blur(name);
    await settle();

    expect(name).toHaveValue("Kamelot - Albums");
    expect(mockUpdateList).toHaveBeenCalledWith(expect.objectContaining({ name: "Kamelot - Albums" }));
  });

  it("suggests the house name and applies it in one click", async () => {
    setup();
    mockGetList.mockResolvedValue(existing({ name: "IU - Singles" }));
    mockUpdateList.mockImplementation(async (l) => l);
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} onSaved={jest.fn()} />);
    await settle();

    fireEvent.click(screen.getByRole("button", { name: 'Use "IU - Songs"' }));
    await settle();

    expect(screen.getByPlaceholderText("Name")).toHaveValue("IU - Songs");
    expect(mockUpdateList).toHaveBeenCalledWith(expect.objectContaining({ name: "IU - Songs" }));
  });

  it("completes the kind after a dash, with the keyboard or a click", async () => {
    setup();
    mockGetList.mockResolvedValue(existing({ name: "Tom Cruise" }));
    mockUpdateList.mockImplementation(async (l) => l);
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} onSaved={jest.fn()} />);
    await settle();

    const name = screen.getByPlaceholderText("Name");
    fireEvent.focus(name);
    expect(screen.queryByRole("listbox")).toBeNull();

    fireEvent.change(name, { target: { value: "Tom Cruise - mo" } });
    const options = screen.getAllByRole("option");
    expect(options.map((o) => o.textContent)).toEqual(["Tom Cruise - Movies", "Tom Cruise - Movies & TV Shows"]);

    fireEvent.keyDown(name, { key: "ArrowDown" });
    fireEvent.keyDown(name, { key: "Enter" });
    await settle();
    expect(name).toHaveValue("Tom Cruise - Movies & TV Shows");
    expect(screen.queryByRole("listbox")).toBeNull();

    fireEvent.change(name, { target: { value: "Tom Cruise - c" } });
    fireEvent.mouseDown(screen.getByRole("option", { name: "Tom Cruise - Cast" }).querySelector("a")!);
    await settle();
    expect(name).toHaveValue("Tom Cruise - Cast");
    expect(mockUpdateList).toHaveBeenCalledWith(expect.objectContaining({ name: "Tom Cruise - Cast" }));
  });

  it("offers existing lists as a new name is typed, and opens the one picked", async () => {
    setup();
    (searchLists as jest.Mock).mockResolvedValue([
      { _id: "a", name: "Rivers in Europe", language: "EN" },
      { _id: "b", name: "Longest Rivers", language: "EN" },
    ]);
    const onOpenList = jest.fn();
    render(<ListEditorDrawer listId="new" onClose={jest.fn()} onOpenList={onOpenList} />);
    await settle();

    const name = screen.getByPlaceholderText("Name");
    fireEvent.focus(name);
    fireEvent.change(name, { target: { value: "Rivers" } });
    await act(async () => new Promise((r) => setTimeout(r, 300)));

    expect(searchLists).toHaveBeenCalledWith("Rivers");
    expect(screen.getAllByRole("option").map((o) => o.textContent)).toEqual(["Rivers in EuropeEN", "Longest RiversEN"]);

    // Enter alone doesn't jump to another list; the arrow keys pick one.
    fireEvent.keyDown(name, { key: "Enter" });
    expect(onOpenList).not.toHaveBeenCalled();
    fireEvent.keyDown(name, { key: "ArrowDown" });
    fireEvent.keyDown(name, { key: "ArrowDown" });
    fireEvent.keyDown(name, { key: "Enter" });
    expect(onOpenList).toHaveBeenCalledWith("b");
  });

  it("leaves the list being edited out of the name matches, and doesn't search without a host to open them", async () => {
    setup();
    mockGetList.mockResolvedValue(existing({ name: "Rivers in Europe" }));
    (searchLists as jest.Mock).mockResolvedValue([{ _id: "list1", name: "Rivers in Europe", language: "EN" }]);
    const { rerender } = render(<ListEditorDrawer listId="list1" onClose={jest.fn()} onOpenList={jest.fn()} />);
    await settle();
    fireEvent.focus(screen.getByPlaceholderText("Name"));
    await act(async () => new Promise((r) => setTimeout(r, 300)));
    expect(searchLists).toHaveBeenCalled();
    expect(screen.queryByRole("listbox")).toBeNull();

    (searchLists as jest.Mock).mockClear();
    rerender(<ListEditorDrawer listId="list1" onClose={jest.fn()} />);
    fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Rivers of Asia" } });
    await act(async () => new Promise((r) => setTimeout(r, 300)));
    expect(searchLists).not.toHaveBeenCalled();
  });

  it("warns when the description gives away an answer", async () => {
    setup();
    mockGetList.mockResolvedValue(existing({ description: "Nurses come first, then answer 3." }));
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} onSaved={jest.fn()} />);
    await settle();

    expect(screen.getByText(/it gives away "Answer 3"/)).toBeInTheDocument();
  });

  it("warns about a list with the same name and points at lists on the same subject", async () => {
    setup();
    mockGetList.mockResolvedValue(existing({ name: "IU - Songs" }));
    (getSimilarLists as jest.Mock).mockResolvedValue({
      lists: [{ _id: "a", name: "IU - Members" }],
      duplicate: { _id: "b", name: "IU - Songs" },
    });
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} onSaved={jest.fn()} />);
    await settle();
    await act(async () => new Promise((r) => setTimeout(r, 700)));

    expect(getSimilarLists).toHaveBeenCalledWith("IU - Songs", "EN", "list1");
    expect(screen.getByText(/There's already a list called "IU - Songs"/)).toBeInTheDocument();
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
    mockCreateList.mockImplementation(
      (_userId, l) => new Promise((r) => (finishCreate = () => r({ ...l, _id: "created" }))),
    );
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

  it("hides the paste and Fandom tools from non-admins", async () => {
    setup();
    mockGetList.mockResolvedValue(existing());
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} />);
    await settle();

    expect(screen.queryByRole("button", { name: /Paste answers/ })).not.toBeInTheDocument();
    expect(screen.queryByText("From a Fandom wiki…")).not.toBeInTheDocument();
  });

  it("lets an admin paste many answers and saves them at once", async () => {
    setup({ isAdmin: true });
    mockGetList.mockResolvedValue(existing());
    mockUpdateList.mockImplementation(async (l) => l);
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} />);
    await settle();

    fireEvent.click(screen.getByRole("button", { name: /Paste answers/ }));
    fireEvent.change(screen.getByPlaceholderText(/Paste a list/), { target: { value: "Nurse, Notary, answer 1" } });
    fireEvent.click(screen.getByRole("button", { name: "Add 2 answers" }));
    await settle();

    const saved = mockUpdateList.mock.calls.at(-1)[0];
    expect(saved.values.map((v: { value: string }) => v.value).slice(-2)).toEqual(["Nurse", "Notary"]);
    expect(saved.values).toHaveLength(12);
  });

  it("offers Claude only when the server allows it, and saves the picked changes", async () => {
    setup({ isAdmin: true });
    mockGetList.mockResolvedValue(existing());
    mockUpdateList.mockImplementation(async (l) => l);
    const { unmount } = render(<ListEditorDrawer listId="list1" onClose={jest.fn()} />);
    await settle();
    expect(screen.queryByRole("button", { name: /^ ?Vet$/ })).not.toBeInTheDocument();
    unmount();

    (getClaudeEnabled as jest.Mock).mockResolvedValueOnce(true);
    (vetList as jest.Mock).mockResolvedValue({
      suggestions: {
        add: [{ value: "Nurse", blurb: "Cares for patients", reason: "r", source: "" }],
        remove: [],
        fix: [{ value: "Answer 0", to: "Notary", reason: "r", source: "" }],
        blurbs: [{ value: "Answer 1", blurb: "A job", reason: "r", source: "" }],
        name: null,
        description: { to: "Jobs whose name starts with N", reason: "r" },
        categories: null,
        difficulty: null,
        frequency: null,
        note: "",
      },
      cost: 0.01,
    });
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} />);
    await settle();

    fireEvent.click(screen.getByRole("button", { name: /^ ?Vet$/ }));
    fireEvent.click(await screen.findByRole("button", { name: "Apply 4 changes" }));
    await settle();

    const saved = mockUpdateList.mock.calls.at(-1)[0];
    expect(saved.values[0]).toEqual({ _id: "v0", value: "Notary" });
    expect(saved.values[1]).toEqual({ _id: "v1", value: "Answer 1", blurb: "A job" });
    expect(saved.values.at(-1)).toEqual({ value: "Nurse", blurb: "Cares for patients" });
    expect(saved.description).toBe("Jobs whose name starts with N");
    expect(saved.values).toHaveLength(11);
  });

  it("shows fetched blurbs in the answer rows", async () => {
    setup();
    mockGetList.mockResolvedValue(existing({ categories: ["movies"] }));
    const url = "https://image.tmdb.org/poster.jpg";
    (getBlurbs as jest.Mock).mockImplementation(async () => {
      const fetched = existing({ categories: ["movies"] });
      fetched.values[0] = { ...fetched.values[0], blurb: url };
      return { list: fetched, fromRelated: 0 };
    });
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} />);
    await settle();

    fireEvent.click(screen.getByRole("button", { name: "Blurbs" }));
    fireEvent.click(screen.getByRole("link", { name: "Get movie posters" }));
    await settle();

    expect(screen.getByDisplayValue(url)).toBeInTheDocument();
  });

  it("offers anyone the Fandom wiki assigned to the list's subject", async () => {
    setup();
    mockGetList.mockResolvedValue(existing({ name: "Harry Potter - Spells", categories: ["literature"] }));
    (getBlurbs as jest.Mock).mockImplementation(async () => {
      const fetched = existing({ name: "Harry Potter - Spells", categories: ["literature"] });
      fetched.values = fetched.values.map((v, i) => (i < 4 ? { ...v, blurb: `https://x.org/${i}.gif` } : v));
      return { list: fetched, fromRelated: 3 };
    });
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} />);
    await settle();

    fireEvent.click(screen.getByRole("button", { name: "Blurbs" }));
    fireEvent.click(screen.getByRole("link", { name: "Get pics from Harry Potter Wiki" }));
    await settle();

    // No URL: the server uses the assigned wiki.
    expect(getBlurbs).toHaveBeenCalledWith("list1", "fandom", undefined);
    expect(screen.getByText("Found 4 of 10 answers without a blurb, 3 of them on other lists.")).toBeInTheDocument();
    expect(screen.queryByText("From a Fandom wiki…")).not.toBeInTheDocument();
  });

  it("puts every blurb source in one menu, with the wiki option for admins", async () => {
    setup({ isAdmin: true });
    mockGetList.mockResolvedValue(existing({ categories: ["movies"] }));
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} />);
    await settle();

    fireEvent.click(screen.getByRole("button", { name: "Blurbs" }));
    expect(screen.getAllByRole("link").map((a) => a.textContent)).toEqual(
      expect.arrayContaining(["Get movie posters", "Get actor pics", "From a Fandom wiki…"]),
    );

    fireEvent.click(screen.getByRole("link", { name: "From a Fandom wiki…" }));
    expect(screen.getByPlaceholderText(/Any page on the wiki/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Close wiki images" }));
    expect(screen.queryByPlaceholderText(/Any page on the wiki/)).not.toBeInTheDocument();
  });

  it("clears one blurb from its row, and all of them from the menu", async () => {
    setup();
    const withBlurbs = existing();
    withBlurbs.values = withBlurbs.values.map((v, i) => (i < 3 ? { ...v, blurb: `Blurb ${i}` } : v));
    mockGetList.mockResolvedValue(withBlurbs);
    mockUpdateList.mockImplementation(async (l) => l);
    const confirm = jest.spyOn(window, "confirm").mockReturnValue(true);
    render(<ListEditorDrawer listId="list1" onClose={jest.fn()} />);
    await settle();

    fireEvent.click(screen.getByRole("button", { name: "Clear blurb of Answer 0" }));
    await settle();
    let saved = mockUpdateList.mock.calls.at(-1)[0];
    expect(saved.values.map((v: any) => v.blurb ?? "")).toEqual(["", "Blurb 1", "Blurb 2", ...Array(7).fill("")]);
    expect(screen.queryByDisplayValue("Blurb 0")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Blurbs" }));
    fireEvent.click(screen.getByRole("link", { name: /Clear all blurbs/ }));
    await settle();
    expect(confirm).toHaveBeenCalledWith("Clear all 2 blurbs of this list?");
    saved = mockUpdateList.mock.calls.at(-1)[0];
    expect(saved.values.every((v: any) => !v.blurb)).toBe(true);
    confirm.mockRestore();
  });
});
