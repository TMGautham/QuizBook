import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Quiz from "./Quiz";
import { renderWithRedux } from "../testutil";
import { mockQuiz, initialState, finalQuestionAboutToAnswerState, } from "../mocks/data";

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

  test("answering correctly updates score and proceeds to next question", async () => {
    renderWithRedux(
      <BrowserRouter>
        <Quiz url={"http://localhost:3000/quiz"} />
      </BrowserRouter>,
    );

    let correctAnswer;
    await waitFor(() => {
      correctAnswer = screen.getByText(/Gangtok/i);
      expect(correctAnswer).toBeInTheDocument();
      expect(screen.getByText(/Question number : 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Score : 0/i)).toBeInTheDocument();
    });
    // correctAnswer = screen.getByText(/Gangtok/i);
    fireEvent.click(correctAnswer);
    expect(screen.getByText(/Question number : 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Score : 10/i)).toBeInTheDocument();
  });

  test("answering incorrectly updates score and proceeds to next question", async () => {
    renderWithRedux(
      <BrowserRouter>
        <Quiz url={"http://localhost:3000/quiz"} />
      </BrowserRouter>
    );

    let incorrectAnswer;
    await waitFor(() => {
      incorrectAnswer = screen.getByText(/Darjeeling/i);
      expect(incorrectAnswer).toBeInTheDocument();
      expect(screen.getByText(/Question number : 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Score : 0/i)).toBeInTheDocument();
    });
    // incorrectAnswer = screen.getByText(/Gangtok/i);
    fireEvent.click(incorrectAnswer);
    expect(screen.getByText(/Question number : 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Score : 0/i)).toBeInTheDocument();
  });

  test("answering last question correctly loads the correct end score of quiz", async () => {
    const { store } = renderWithRedux(
      <BrowserRouter>
        <Quiz url={"http://localhost:3000/quiz"} />
      </BrowserRouter>, {
      preloadedState: finalQuestionAboutToAnswerState,
    }
    );

    screen.getByText(/Which year was Mahatma Gandhi born?/i)
    let correctAnswer = screen.getByText(/1869/i);
    expect(correctAnswer).toBeInTheDocument();
    fireEvent.click(correctAnswer)
    await waitFor(() => {
      expect(screen.getByText(/Your Score : 50/i)).toBeInTheDocument();
    });

  });
  test("answering last question incorrectly loads the correct end score of quiz", async () => {
    const { store } = renderWithRedux(
      <BrowserRouter>
        <Quiz url={"http://localhost:3000/quiz"} />
      </BrowserRouter>, {
      preloadedState: finalQuestionAboutToAnswerState,
    }
    );

    screen.getByText(/Which year was Mahatma Gandhi born?/i)
    let correctAnswer = screen.getByText(/1872/i);
    expect(correctAnswer).toBeInTheDocument();
    fireEvent.click(correctAnswer)
    await waitFor(() => {
      expect(screen.getByText(/Your Score : 40/i)).toBeInTheDocument();
    });

  });



});
