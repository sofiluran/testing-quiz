import { render, screen } from "@testing-library/react";
import Results from ".";

describe("The Results component", () => {
  const mockScore = 10;
  const mockTotalQuestions = 10;
  const mockUsername = "mock username";

  test("displays the user's score", () => {
    const mockHandleReset = jest.fn();
    render(
      <Results
        score={mockScore}
        totalQuestions={mockTotalQuestions}
        username={mockUsername}
        handleReset={mockHandleReset}
      />,
    );
    const result = screen.getByText(/your score is 10\/10/i);
    expect(result).toBeInTheDocument();
  });
  test("displays the username", () => {
    const mockHandleReset = jest.fn();
    render(
      <Results
        score={mockScore}
        totalQuestions={mockTotalQuestions}
        username={mockUsername}
        handleReset={mockHandleReset}
      />,
    );
    const username = screen.getByText(/mock username/i);
    expect(username).toBeInTheDocument();
  });
  test("displays correct message for low score (0-2)", () => {
    const mockHandleReset = jest.fn();
    const mockLowScore = 0;
    render(
      <Results
        score={mockLowScore}
        totalQuestions={mockTotalQuestions}
        username={mockUsername}
        handleReset={mockHandleReset}
      />,
    );
    const message = screen.getByText(/mock username, that was disappointing./i);
    expect(message).toBeInTheDocument();
  });
  test("displays correct message for medium score (3-4)", () => {
    const mockHandleReset = jest.fn();
    const mockMediumScore = 3;
    render(
      <Results
        score={mockMediumScore}
        totalQuestions={mockTotalQuestions}
        username={mockUsername}
        handleReset={mockHandleReset}
      />,
    );
    const message = screen.getByText(/not too shabby, mock username./i);
    expect(message).toBeInTheDocument();
  });
  test("displays correct message for high score (5 or above)", () => {
    const mockHandleReset = jest.fn();
    const mockHighScore = 5;
    render(
      <Results
        score={mockHighScore}
        totalQuestions={mockTotalQuestions}
        username={mockUsername}
        handleReset={mockHandleReset}
      />,
    );
    const message = screen.getByText(/impressive, mock username!/i);
    expect(message).toBeInTheDocument();
  });
  test("displays a play again button", () => {
    const mockHandleReset = jest.fn();
    render(
      <Results
        score={mockScore}
        totalQuestions={mockTotalQuestions}
        username={mockUsername}
        handleReset={mockHandleReset}
      />,
    );
    const playAgainBtn = screen.getByRole("button", { name: /play again/i });
    expect(playAgainBtn).toBeInTheDocument();
  });
});
