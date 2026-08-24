import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
import { questions } from "@/data/questions";

describe("The home page", () => {
  test("renders the header when the user visits the page", () => {
    render(<Home />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });
  test("renders the start screen when the user visits the page", () => {
    render(<Home />);
    const input = screen.getByLabelText(/enter your name/i);
    expect(input).toBeInTheDocument();
  });
  test("does not display a question before the quiz starts", () => {
    render(<Home />);
    const question = screen.queryByTestId("question");
    expect(question).not.toBeInTheDocument();
  });
});

describe("Quiz integration", () => {
  test("displays the first question after the user starts the quiz", () => {
    render(<Home />);
    const input = screen.getByLabelText(/enter your name/i);
    fireEvent.change(input, { target: { value: "mock username" } });
    const startBtn = screen.getByRole("button", { name: /start/i });
    fireEvent.click(startBtn);
    const question = screen.getByTestId("question");
    expect(question).toBeInTheDocument();
  });
  test("displays three answers after the user starts the quiz", () => {
    render(<Home />);
    const input = screen.getByLabelText(/enter your name/i);
    fireEvent.change(input, { target: { value: "mock username" } });
    const startBtn = screen.getByRole("button", { name: /start/i });
    fireEvent.click(startBtn);
    const answerBtns = screen.getAllByTestId("answer-btn");
    expect(answerBtns.length).toEqual(3);
  });
  test("displays initial progress after the user starts the quiz", () => {
    render(<Home />);
    const input = screen.getByLabelText(/enter your name/i);
    fireEvent.change(input, { target: { value: "mock username" } });
    const startBtn = screen.getByRole("button", { name: /start/i });
    fireEvent.click(startBtn);
    const progress = screen.getByText(/question 1\/9/i);
    expect(progress).toBeInTheDocument();
  });
  test("displays the next question after the user clicks an answer", () => {
    render(<Home />);
    const input = screen.getByLabelText(/enter your name/i);
    fireEvent.change(input, { target: { value: "mock username" } });
    const startBtn = screen.getByRole("button", { name: /start/i });
    fireEvent.click(startBtn);
    const answerBtns = screen.getAllByTestId("answer-btn");
    fireEvent.click(answerBtns[0]);
    const nextQuestionProgress = screen.getByText(/question 2\/9/i);
    expect(nextQuestionProgress).toBeInTheDocument();
  });
  test("allows the user to finish the quiz and see the results", () => {
    render(<Home />);
    const input = screen.getByLabelText(/enter your name/i);
    fireEvent.change(input, { target: { value: "mock username" } });
    const startBtn = screen.getByRole("button", { name: /start/i });
    fireEvent.click(startBtn);
    questions.forEach(() => {
      const answerBtns = screen.getAllByTestId("answer-btn");
      fireEvent.click(answerBtns[0]);
    });
    const results = screen.getByText(/game over! your score is/i);
    expect(results).toBeInTheDocument();
    const mockUsername = screen.getByText(/mock username/i);
    expect(mockUsername).toBeInTheDocument();
  });
  test("allows the user to restart the quiz", () => {
    render(<Home />);
    const input = screen.getByLabelText(/enter your name/i);
    fireEvent.change(input, { target: { value: "mock username" } });
    const startBtn = screen.getByRole("button", { name: /start/i });
    fireEvent.click(startBtn);
    questions.forEach(() => {
      const answerBtns = screen.getAllByTestId("answer-btn");
      fireEvent.click(answerBtns[0]);
    });
    const playAgainBtn = screen.getByRole("button", { name: /play again/i });
    expect(playAgainBtn).toBeInTheDocument();
    fireEvent.click(playAgainBtn);
    const progress = screen.getByText(/question 1\/9/i);
    expect(progress).toBeInTheDocument();
  });
});
