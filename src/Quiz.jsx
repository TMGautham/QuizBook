import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAPI } from "./actions";
import Question from "./Question";

function Quiz(props) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const score = useSelector((state) => state.score)
    const questionNumber = useSelector(state => state.questionsAnswered)
    useEffect(() => {
        dispatch(fetchAPI(props.url));
    }, [dispatch]);

    return <div className="Question">
        {questionNumber <= 4 ? <div>Question number : {questionNumber + 1}</div> : <></>}
        {
            (data.length > 0 && questionNumber < data.length) ? <Question question={data[questionNumber]} /> : (questionNumber === data.length) ? <div>Quiz Ended!</div> : <div>Quiz Loading!</div>
        }
        <div>Score : {score}/50</div>
    </div>;
}

export default Quiz;
