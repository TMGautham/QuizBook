import axios from "axios";

export const fetchAPI = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((response) => dispatch({ type: "GET_QUIZ", payload: response }));
  };
};

export function setScore(payload) {
  console.log({
    type: "SET_SCORE",
    score: payload,
  });
  return {
    type: "SET_SCORE",
    score: payload,
  };
}
