import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Quiz from "./Quiz";
import { renderWithRedux } from "../testutil";

describe("Quiz", () => {
  test("first question loads", async () => {
    renderWithRedux(
      <BrowserRouter>
        <Quiz url={"http://localhost:3000/quiz"} />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByText(/Gangtok/i)).toBeInTheDocument();
      expect(screen.getByText(/Question number : 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Score : 0/i)).toBeInTheDocument();
    });
  });

  test("answering first question correctly", async () => {
    renderWithRedux(
      <BrowserRouter>
        <Quiz url={"http://localhost:3000/quiz"} />
      </BrowserRouter>
    );

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
