import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Quiz from "./Quiz";
import { renderWithRedux } from "./testutil";

describe("Quiz", () => {
  test("Quiz loads", () => {
    const { store } = renderWithRedux(<Quiz />);
    const { getByText } = screen;
    expect(screen.getByText(/Question number/i)).toBeInTheDocument();
  });

  test("first question loads", async () => {
    renderWithRedux(<Quiz />);
    await waitFor(() => {
      expect(screen.getByText(/Gangtok/i)).toBeInTheDocument();
      expect(screen.getByText(/Question number : 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Score : 0/i)).toBeInTheDocument();
    });
  });

  test("answering first question correctly", async () => {
    renderWithRedux(<Quiz />);

    let correctAnswer;
    await waitFor(() => {
      correctAnswer = screen.getByText(/Gangtok/i);
      expect(correctAnswer).toBeInTheDocument();
      expect(screen.getByText(/Question number : 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Score : 0/i)).toBeInTheDocument();
    });
    correctAnswer = screen.getByText(/Gangtok/i);
    fireEvent.click(correctAnswer);
    expect(screen.getByText(/Question number : 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Score : 10/i)).toBeInTheDocument();
  });
});
