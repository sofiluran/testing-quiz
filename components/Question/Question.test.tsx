import { render, screen } from "@testing-library/react";
import Question from ".";

describe("The Question component", () => {
  const mockQuestion = "mock question";

  test("renders a question", () => {
    render(<Question question={mockQuestion} />);
    const element = screen.getByTestId("question");
    expect(element).toBeInTheDocument();
  });
  test("displays the correct question", () => {
    render(<Question question={mockQuestion} />);
    const question = screen.getByText(/mock question/i);
    expect(question).toBeInTheDocument();
  });
});
