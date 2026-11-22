import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ClaudeUpdateModal } from "../../../client/pages/tenthings/ClaudeUpdateModal";
import { suggestListChanges } from "../../../client/services/tenthings";

jest.mock("../../../client/services/tenthings", () => ({ suggestListChanges: jest.fn() }));
const mockSuggest = suggestListChanges as jest.Mock;

const s = (value: string, extra: object = {}) => ({ value, reason: `why ${value}`, source: "", ...extra });

describe("ClaudeUpdateModal", () => {
  beforeEach(() => mockSuggest.mockReset());

  it("searches the web by default only for lists that change", () => {
    const { unmount } = render(<ClaudeUpdateModal listId="l1" frequency={0} onApply={jest.fn()} onClose={jest.fn()} />);
    expect(screen.getByLabelText("Search the web")).toBeChecked();
    unmount();
    render(<ClaudeUpdateModal listId="l1" frequency={3} onApply={jest.fn()} onClose={jest.fn()} />);
    expect(screen.getByLabelText("Search the web")).not.toBeChecked();
  });

  it("sends the instruction and applies additions and fixes, but removals only when ticked", async () => {
    mockSuggest.mockResolvedValue({
      suggestions: {
        add: [s("Aaravos"), s("Stella")],
        remove: [s("Bait", { source: "javascript:alert(1)" })],
        fix: [s("Lord Viren", { to: "Viren", source: "https://dragonprince.fandom.com/wiki/Viren" })],
        note: "Bait is a toad.",
      },
      cost: 0.1234,
    });
    const onApply = jest.fn();
    render(<ClaudeUpdateModal listId="l1" frequency={2} onApply={onApply} onClose={jest.fn()} />);

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "add season 7" } });
    fireEvent.click(screen.getByRole("button", { name: "Suggest" }));
    await waitFor(() => expect(screen.getByText("Bait is a toad.")).toBeInTheDocument());

    expect(mockSuggest).toHaveBeenCalledWith("l1", { instruction: "add season 7", webSearch: false });
    expect(screen.getByText(/cost ≈ \$0\.12/)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "source" })).toHaveLength(1);

    fireEvent.click(screen.getByLabelText(/Stella/));
    fireEvent.click(screen.getByRole("button", { name: "Apply 2 changes" }));
    expect(onApply).toHaveBeenCalledWith({
      add: [s("Aaravos")],
      remove: [],
      fix: [s("Lord Viren", { to: "Viren", source: "https://dragonprince.fandom.com/wiki/Viren" })],
    });
  });

  it("shows the server's error", async () => {
    mockSuggest.mockRejectedValue({ response: { data: { error: "Claude declined to review this list." } } });
    render(<ClaudeUpdateModal listId="l1" onApply={jest.fn()} onClose={jest.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: "Suggest" }));
    expect(await screen.findByText("Claude declined to review this list.")).toBeInTheDocument();
  });
});
