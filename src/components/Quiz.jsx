import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAPI } from "../actions/actions";
import "bootstrap/dist/css/bootstrap.css";
import Question from "./Question";
import QuizEnded from "./QuizEnded";
import "../App.css";

function Quiz({ url }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const score = useSelector((state) => state.score)
    const questionNumber = useSelector(state => state.questionsAnswered)
    const quizEnded = useSelector(state => state.quizEnded)
    const previousBestScore = localStorage.getItem(url)
    useEffect(() => {
        // console.log("rendering Quiz")
        dispatch(fetchAPI(url));

        // console.log(questionNumber === data.length && questionNumber > 0)
    }, []);


    // console.log("questionNumber " + questionNumber)
    // console.log("number of questions : " + data.length)
    // console.log("quizEnded " + quizEnded)
    return <>

        <main className="Question">

            <div className="card card-margin" style={{ "width": 500 }}>
                <div className="card-body">
                    <h2 className="card-title">Quiz!</h2>
                    {/* <h3 className="card-subtitle mb-2 text-muted"> {questionNumber < data.length ? <div>Question number : {questionNumber + 1}</div> : <></>}</h3> */}
                    {questionNumber < data.length ? <h3 className="card-subtitle mb-2 text-muted">Question number : {questionNumber + 1}</h3> : <></>}
                    <div className="card-text">{
                        (data.length > 0 && questionNumber < data.length) ? <><Question question={data[questionNumber]} /><p className="card-link">Score : {score}/{data.length * 10}</p></> : (((questionNumber === data.length && questionNumber > 0) || quizEnded) ? <QuizEnded url={url} score={score} /> : <div>Quiz Loading!</div>)
                    }</div>

                    <div className="card-link">{previousBestScore !== null ? <div>Your best score for this quiz is : {previousBestScore}</div> : <></>}</div>
                </div>
            </div>

        </main></>;
}

export default Quiz;

