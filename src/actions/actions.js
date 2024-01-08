import axios from "axios";

export function fetchAPI(url) {
  return (dispatch) => {
    return axios
      .get(url)
      .then((response) => response.data)
      .then((response) => dispatch(getQuiz(response)))
      .catch((error) => console.error(error));
  };
}

export function setScore(payload) {
  return {
    type: "SET_SCORE",
    score: payload,
  };
}
export function getQuiz(response) {
  return {
    type: "GET_QUIZ",
    payload: response,
  };
}

export function endQuiz() {
  return { type: "END_QUIZ" };
}
