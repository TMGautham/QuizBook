import reducer from "./reducers";
import { getQuiz, setScore, endQuiz } from "../actions/actions";
import {
  mockQuiz,
  initialState,
  quizEndState,
  newQuizLoadState,
  firstQuestionCorrectlyAnsweredState,
  secondQuestionCorrectlyAnsweredState,
  secondQuestionIncorrectlyAnsweredState,
  allQuestionsAnsweredState,
} from "../mocks/data";

const getQuizAction = getQuiz(mockQuiz);
const setScoreActionCorrect = setScore(10);
const setScoreActionIncorrect = setScore(0);
const endQuizAction = endQuiz();

describe("reducer", () => {
  test("getting a new quiz", () => {
    const updatedState = reducer(initialState, getQuizAction);
    expect(updatedState).toEqual(newQuizLoadState);
  });

  test("updating score on answering correctly ", () => {
    const updatedState = reducer(
      firstQuestionCorrectlyAnsweredState,
      setScoreActionCorrect
    );
    expect(updatedState).toEqual(secondQuestionCorrectlyAnsweredState);
  });

  test("updating score on answering incorrectly ", () => {
    const updatedState = reducer(
      firstQuestionCorrectlyAnsweredState,
      setScoreActionIncorrect
    );
    expect(updatedState).toEqual(secondQuestionIncorrectlyAnsweredState);
  });

  test("ending a quiz", () => {
    const updatedState = reducer(allQuestionsAnsweredState, endQuizAction);
    expect(updatedState).toEqual(quizEndState);
  });
});
