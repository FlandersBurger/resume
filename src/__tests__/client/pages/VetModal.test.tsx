import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { VetModal } from "../../../client/pages/tenthings/VetModal";
import { TenThingsList, vetList } from "../../../client/services/tenthings";

jest.mock("../../../client/services/tenthings", () => ({ vetList: jest.fn() }));
const mockVet = vetList as jest.Mock;

const s = (value: string, extra: object = {}) => ({ value, reason: `why ${value}`, source: "", ...extra });
const list = {
  _id: "l1",
  name: "Dragon Prince characters",
  categories: ["television"],
  values: [],
} as unknown as TenThingsList;
const categoryOptions = [
  { value: "television", label: "Television" },
  { value: "movies", label: "Movies" },
];

const suggestions = {
  add: [s("Aaravos", { blurb: "Startouch elf" }), s("Stella", { blurb: "" })],
  remove: [s("Bait", { source: "javascript:alert(1)" })],
  fix: [s("Lord Viren", { to: "Viren", source: "https://dragonprince.fandom.com/wiki/Viren" })],
  blurbs: [s("Callum", { blurb: "Prince of Katolis" })],
  name: null,
  description: { to: "Characters from the show", reason: "clearer" },
  categories: { to: ["television", "movies"], reason: "there's a movie" },
  difficulty: { to: 2, reason: "niche" },
  frequency: null,
  note: "Bait is a toad.",
};

describe("VetModal", () => {
  beforeEach(() => mockVet.mockReset());

  it("vets on open, once, and applies everything ticked (removals only when picked)", async () => {
    mockVet.mockResolvedValue({ suggestions, cost: 0.0412 });
    const onApply = jest.fn();
    render(<VetModal list={list} categoryOptions={categoryOptions} onApply={onApply} onClose={jest.fn()} />);
    await waitFor(() => expect(screen.getByText("Bait is a toad.")).toBeInTheDocument());

    expect(mockVet).toHaveBeenCalledTimes(1);
    expect(mockVet).toHaveBeenCalledWith(expect.objectContaining({ _id: "l1" }), undefined);
    expect(screen.getByText(/cost ≈ \$0\.04/)).toBeInTheDocument();
    expect(screen.getByText("Movies, Television")).toBeInTheDocument();
    expect(screen.getByText("Hard")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "source" })).toHaveLength(1);

    fireEvent.click(screen.getByLabelText(/Stella/));
    fireEvent.click(screen.getByLabelText(/Difficulty/));
    fireEvent.click(screen.getByRole("button", { name: "Apply 5 changes" }));
    expect(onApply).toHaveBeenCalledWith({
      add: [suggestions.add[0]],
      remove: [],
      fix: suggestions.fix,
      blurbs: suggestions.blurbs,
      description: suggestions.description,
      categories: suggestions.categories,
    });
  });

  it("strikes through a removal once it's ticked", async () => {
    mockVet.mockResolvedValue({ suggestions, cost: 0 });
    render(<VetModal list={list} categoryOptions={categoryOptions} onApply={jest.fn()} onClose={jest.fn()} />);
    const bait = await screen.findByText("Bait");
    expect(bait).not.toHaveClass("struck");
    fireEvent.click(screen.getByLabelText(/Bait/));
    expect(bait).toHaveClass("struck");
  });

  it("vets again with an instruction", async () => {
    mockVet.mockResolvedValue({ suggestions: { ...suggestions, note: "" }, cost: 0 });
    render(<VetModal list={list} categoryOptions={categoryOptions} onApply={jest.fn()} onClose={jest.fn()} />);
    const ask = await screen.findByPlaceholderText(/Ask for something specific/);
    fireEvent.change(ask, { target: { value: "add season 7" } });
    fireEvent.click(screen.getByRole("button", { name: "Vet again" }));
    await waitFor(() =>
      expect(mockVet).toHaveBeenLastCalledWith(expect.objectContaining({ _id: "l1" }), "add season 7"),
    );
  });

  it("shows the server's error", async () => {
    mockVet.mockRejectedValue({ response: { data: { error: "Claude declined to vet this list." } } });
    render(<VetModal list={list} categoryOptions={categoryOptions} onApply={jest.fn()} onClose={jest.fn()} />);
    expect(await screen.findByText("Claude declined to vet this list.")).toBeInTheDocument();
  });
});
