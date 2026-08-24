import { render, screen, fireEvent } from "@testing-library/react";
import StartScreen from ".";

describe("The Start Screen", () => {
  const mockUsername = "mock username";

  test("renders the username input", () => {
    const mockHandleStart = jest.fn();
    render(<StartScreen handleStart={mockHandleStart} />);
    const input = screen.getByLabelText(/enter your name/i);
    expect(input).toBeInTheDocument();
  });
  test("does not show the start button on load", () => {
    const mockHandleStart = jest.fn();
    render(<StartScreen handleStart={mockHandleStart} />);
    const startBtn = screen.queryByRole("button", { name: /start/i });
    expect(startBtn).not.toBeInTheDocument();
  });
  test("input is empty on page load", () => {
    const mockHandleStart = jest.fn();
    render(<StartScreen handleStart={mockHandleStart} />);
    const input = screen.getByLabelText(/enter your name/i);
    expect((input as HTMLInputElement).value).toBe("");
  });
  test("updates the username when the user enters a name", () => {
    const mockHandleStart = jest.fn();
    render(<StartScreen handleStart={mockHandleStart} />);
    const input = screen.getByLabelText(/enter your name/i);
    fireEvent.change(input, { target: { value: mockUsername } });
    expect((input as HTMLInputElement).value).toBe(mockUsername);
  });
  test("shows the start button when the user enters a username", () => {
    const mockHandleStart = jest.fn();
    render(<StartScreen handleStart={mockHandleStart} />);
    const input = screen.getByLabelText(/enter your name/i);
    fireEvent.change(input, { target: { value: mockUsername } });
    const startBtn = screen.getByRole("button", { name: /start/i });
    expect(startBtn).toBeInTheDocument();
  });
  test("passes the username when the start button is clicked", () => {
    const mockHandleStart = jest.fn();
    render(<StartScreen handleStart={mockHandleStart} />);
    const input = screen.getByLabelText(/enter your name/i);
    fireEvent.change(input, { target: { value: mockUsername } });
    const startBtn = screen.getByRole("button", { name: /start/i });
    fireEvent.click(startBtn);
    expect(mockHandleStart).toHaveBeenCalledWith(mockUsername);
  });
});
