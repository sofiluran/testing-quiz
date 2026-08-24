import { render, screen } from "@testing-library/react";
import Progress from ".";

describe("The Progress component", () => {
  const mockQuestionIndex = 5;
  const mockTotalQuestions = 10;

  test("displays the correct question number based on the index", () => {
    render(<Progress questionIndex={mockQuestionIndex} totalQuestions={mockTotalQuestions} />);
    const index = screen.getByText(/question 6/i);
    expect(index).toBeInTheDocument();
  });
  test("displays the correct total number of questions", () => {
    render(<Progress questionIndex={mockQuestionIndex} totalQuestions={mockTotalQuestions} />);
    const total = screen.getByText(/\/10/i);
    expect(total).toBeInTheDocument();
  });
  test("displays the correct question progression with question number and total questions", () => {
    const mockQuestionIndex = 6;
    const mockTotalQuestions = 11;
    render(<Progress questionIndex={mockQuestionIndex} totalQuestions={mockTotalQuestions} />);
    const progress = screen.getByText(/question 7\/11/i);
    expect(progress).toBeInTheDocument();
  });
});
