import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";

/*
This component describes the end card of the quiz.
This component has a button that takes user to the home page.
This component stores the score in user's local storage if the score obtained was the highest score obtained by the user for this quiz.
*/

const QuizEnded = ({ url, score }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const completedScore = useRef(score)


    useEffect(() => {
        function updateBestScore() {
            const previousBestScore = localStorage.getItem(url)
            if (score > previousBestScore) {
                localStorage.setItem(url, score)
            }
        }
        updateBestScore()
        dispatch({ type: 'END_QUIZ' })
    }, [dispatch, url, score])
    return (
        <>
            <div>Quiz Ended!</div >
            <div>Your Score : {completedScore.current}</div>
            <button className="btn btn-primary btn-xs" onClick={() => navigate('/')}>Go Back Home!</button>
        </>
    )
}

export default QuizEnded