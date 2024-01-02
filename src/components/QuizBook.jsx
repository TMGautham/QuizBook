import React from 'react'
import { Link } from 'react-router-dom'

export const QuizBook = () => {
    return (
        <>
            <h6>Which quiz do you want to take?</h6>
            <ul>
                <li><Link to="/quiz">Sample Quiz</Link></li>
                <li><Link to="/capitalQuiz">Capitals of States/Countries Quiz</Link></li>
                <li><Link to="/cricketQuiz">Cricket Quiz</Link></li>
            </ul>
        </>
    )
}
