import { render, screen } from "@testing-library/react";
import Stew from "../../../client/pages/Stew";

describe("Stew page", () => {
  it("renders the page heading", () => {
    render(<Stew />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Belgian Beef Stew");
  });

  it("shows the Carbonnade Flamande tagline", () => {
    render(<Stew />);
    expect(screen.getByText(/Carbonnade Flamande/)).toBeInTheDocument();
  });

  it("renders the hero image", () => {
    render(<Stew />);
    expect(screen.getByAltText("Belgian beef stew in the pot")).toBeInTheDocument();
  });

  it("shows cooking time", () => {
    render(<Stew />);
    expect(screen.getByText(/2\.5 hours/)).toBeInTheDocument();
  });

  it("shows servings count", () => {
    render(<Stew />);
    expect(screen.getByText(/6 servings/)).toBeInTheDocument();
  });

  it("shows oven temperature", () => {
    render(<Stew />);
    expect(screen.getAllByText(/130 °C/).length).toBeGreaterThan(0);
  });

  it("renders key ingredients", () => {
    render(<Stew />);
    const texts = screen.getAllByRole("listitem").map((li) => li.textContent ?? "");
    expect(texts.some((t) => /beef chuck/i.test(t))).toBe(true);
    expect(texts.some((t) => /Belgian dark beer/i.test(t))).toBe(true);
    expect(texts.some((t) => /prunes/i.test(t))).toBe(true);
    expect(texts.some((t) => /Dijon mustard/i.test(t))).toBe(true);
    expect(texts.some((t) => /thyme/i.test(t))).toBe(true);
  });

  it("shows the Method section label", () => {
    render(<Stew />);
    expect(screen.getByText("Method")).toBeInTheDocument();
  });

  it("renders all 12 numbered steps", () => {
    render(<Stew />);
    for (let i = 1; i <= 12; i++) {
      expect(screen.getByText(String(i))).toBeInTheDocument();
    }
  });

  it("step photos are lazy loaded", () => {
    render(<Stew />);
    const lazyImgs = screen.getAllByRole("img").filter((img) => img.getAttribute("loading") === "lazy");
    expect(lazyImgs.length).toBeGreaterThan(0);
  });

  it("step photos reference the correct recipe path", () => {
    render(<Stew />);
    const stepImgs = screen
      .getAllByRole("img")
      .filter((img) => (img.getAttribute("src") ?? "").includes("/recipes/stew/"));
    expect(stepImgs.length).toBeGreaterThan(0);
  });
});
