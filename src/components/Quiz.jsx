import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAPI } from "../actions";
import Question from "./Question";
import QuizEnded from "./QuizEnded";

function Quiz({ url }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const score = useSelector((state) => state.score)
    const questionNumber = useSelector(state => state.questionsAnswered)
    const quizEnded = useSelector(state => state.quizEnded)
    const previousBestScore = localStorage.getItem(url)
    useEffect(() => {
        console.log("rendering Quiz")
        dispatch(fetchAPI(url));

        console.log(questionNumber === data.length && questionNumber > 0)
    }, []);


    // console.log("questionNumber " + questionNumber)
    // console.log("number of questions : " + data.length)
    // console.log("quizEnded " + quizEnded)
    return <div className="Question">
        {questionNumber < data.length ? <div>Question number : {questionNumber + 1}</div> : <></>}
        {
            (data.length > 0 && questionNumber < data.length) ? <Question question={data[questionNumber]} /> : (((questionNumber === data.length && questionNumber > 0) || quizEnded) ? <QuizEnded url={url} score={score} /> : <div>Quiz Loading!</div>)
        }
        <div>Score : {score}/{data.length * 10}</div>
        {previousBestScore !== null ? <div>Your best score for this quiz is : {previousBestScore}</div> : <></>}
    </div>;
}

export default Quiz;

