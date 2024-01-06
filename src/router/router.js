import { createBrowserRouter } from "react-router-dom";
import Quiz from "../components/Quiz";
import About from "../components/About";
import { QuizBook } from "../components/QuizBook";
export const quizRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <QuizBook /> },
      {
        path: "/quiz",
        element: <Quiz url={"http://localhost:3000/quiz"} />,
      },
      {
        path: "/cricketQuiz",
        element: <Quiz url={"http://localhost:3000/cricketQuiz"} />,
      },
      {
        path: "/capitalQuiz",
        element: <Quiz url={"http://localhost:3000/capitalQuiz"} />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
