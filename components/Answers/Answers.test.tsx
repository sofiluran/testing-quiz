import { render, screen, fireEvent } from "@testing-library/react";
import Answers from ".";

describe("The Answers component", () => {
  const mockAnswers = ["a", "b", "c"];
  const mockHandleAnswers = jest.fn();

  test("displays all answers for each question", () => {
    render(<Answers answers={mockAnswers} handleAnswer={mockHandleAnswers} />);
    const first = screen.getByText("a");
    const second = screen.getByText("b");
    const third = screen.getByText("c");
    expect(first).toBeInTheDocument();
    expect(second).toBeInTheDocument();
    expect(third).toBeInTheDocument();
  });
  test("renders each answer as a button", () => {
    render(<Answers answers={mockAnswers} handleAnswer={mockHandleAnswers} />);
    const answerButtons = screen.getAllByRole("button");
    expect(answerButtons.length).toEqual(3);
  });
  test("calls the handleAnswer function", () => {
    render(<Answers answers={mockAnswers} handleAnswer={mockHandleAnswers} />);
    const button = screen.getAllByRole("button")
    fireEvent.click(button[0])
    expect(mockHandleAnswers).toHaveBeenCalled()
  });
  test("passes the answer index to handleAnswer when it's clicked", () => {
    render(<Answers answers={mockAnswers} handleAnswer={mockHandleAnswers} />);
    const button = screen.getAllByRole("button")
    fireEvent.click(button[1])
    expect(mockHandleAnswers).toHaveBeenCalledWith(1)
    expect(mockHandleAnswers).not.toHaveBeenCalledWith(2)
  })
});
