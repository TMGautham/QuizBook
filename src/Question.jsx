import React from "react";
import { useDispatch } from "react-redux";

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const handleAnswer = (option) => {
    let score = option === question.answer ? 10 : 0;
    return dispatch({ type: "SET_SCORE", score });
  };
  return (
    <>
      {/* screen.debug(); */}
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
