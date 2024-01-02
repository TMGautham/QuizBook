const initialState = {
  data: [],
  score: 0,
  questionsAnswered: 0,
  quizEnded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUIZ":
      console.log("GET_QUIZ");
      return {
        ...state,
        data: action.payload,
        questionsAnswered: 0,
        score: 0,
        quizEnded: false,
      };
    case "SET_SCORE":
      return {
        ...state,
        score: state.score + action.score,
        questionsAnswered: state.questionsAnswered + 1,
      };
    case "END_QUIZ":
      console.log("END_QUIZ");
      return {
        data: [],
        score: 0,
        questionsAnswered: 0,
        quizEnded: true,
      };
    default:
      return state;
  }
};

export default reducer;
