import React from "react";
import { useDispatch } from "react-redux";

/*
This component describes an individual question in a quiz (and not the quiz as whole).
This component does not track any details of the quiz (eg. numbers of questions answered, quiz score etc.).
This component lets user answer the question.
User gets 10 points in case of providing the correct answer.
User gets 0 points in case of providing an correct answer.

*/

const Question = ({ question }) => {
  const dispatch = useDispatch();
  // const score = useSelector(state => state)
  const handleAnswer = (option) => {
    // console.log(score)
    let score = option === question.answer ? 10 : 0;
    return dispatch({ type: "SET_SCORE", score });
  };
  return (
    <>
      <div>Question : {question.question} </div>
      <ol>
        {question.options.map((option, index) => (
          < li
            key={index}
            value={index + 1}
            onClick={() => {
              handleAnswer(option);
            }}
          >
            {option}
          </li>
        ))}
      </ol >
    </>
  );
};
export default Question;
