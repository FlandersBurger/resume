import { fireEvent, render, screen } from "@testing-library/react";
import { PasteAnswersModal } from "../../../client/pages/tenthings/PasteAnswersModal";

describe("PasteAnswersModal", () => {
  it("adds the ticked, new answers only", () => {
    const onAdd = jest.fn();
    render(<PasteAnswersModal existing={["Rayla"]} onAdd={onAdd} onClose={jest.fn()} />);

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "1. Rayla\n2. Callum\n3. Ezran\nCharacters" } });
    expect(screen.getByText(/1 already in the list/)).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Characters"));
    fireEvent.click(screen.getByRole("button", { name: "Add 2 answers" }));

    expect(onAdd).toHaveBeenCalledWith(["Callum", "Ezran"]);
  });

  it("re-splits when the separator is forced", () => {
    render(<PasteAnswersModal existing={[]} onAdd={jest.fn()} onClose={jest.fn()} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Rayla, Callum" } });
    expect(screen.getByRole("button", { name: "Add 2 answers" })).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Split on"), { target: { value: "lines" } });
    expect(screen.getByRole("button", { name: "Add 1 answer" })).toBeInTheDocument();
  });
});
