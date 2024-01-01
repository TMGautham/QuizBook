const initialState = { data: [], score: 0, questionsAnswered: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUIZ":
      return { ...state, data: action.payload };
    case "SET_SCORE":
      return {
        ...state,
        score: state.score + action.score,
        questionsAnswered: state.questionsAnswered + 1,
      };
    default:
      return state;
  }
};

export default reducer;
