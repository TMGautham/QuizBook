import { getQuiz, endQuiz, setScore, fetchAPI } from "./actions";
import { thunk } from "redux-thunk";
import configureStore from "redux-mock-store";
import { mockQuiz } from "../mocks/data";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

function success() {
  return {
    type: "GET_QUIZ",
    payload: mockQuiz,
  };
}

describe("actions", () => {
  test("async action creator fetchAPI returns action", () => {
    const store = mockStore({
      data: [],
      score: 0,
      questionsAnswered: 0,
      quizEnded: false,
    });

    return store.dispatch(fetchAPI("http://localhost:3000/quiz")).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(success());
    });
  });

  test("setScore action creator returns action", () => {
    const EXPECTED_ACTION = {
      type: "SET_SCORE",
      score: 20,
    };
    expect(setScore(20)).toEqual(EXPECTED_ACTION);
  });

  test("getQuiz action creator returns action", () => {
    const EXPECTED_ACTION = {
      type: "GET_QUIZ",
      payload: mockQuiz,
    };
    expect(getQuiz(mockQuiz)).toEqual(EXPECTED_ACTION);
  });

  test("endQuiz action creator returns action", () => {
    const EXPECTED_ACTION = {
      type: "END_QUIZ",
    };
    expect(endQuiz()).toEqual(EXPECTED_ACTION);
  });
});
