import { render, screen } from "@testing-library/react";
import Header from ".";

describe("The Header", () => {
  test("renders a header", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });
  test("renders an h1", () => {
    render(<Header />);
    const pageTitle = screen.getByRole("heading", { level: 1 });
    expect(pageTitle).toBeInTheDocument();
  });
  test("displays the project title", () => {
    render(<Header />);
    const pageTitle = screen.getByText(/IKEA, Rock Band or Pokémon/i);
    expect(pageTitle).toBeInTheDocument();
  });
});
