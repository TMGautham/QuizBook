import React from 'react'
import { Link } from 'react-router-dom'

import "../App.css";

export const QuizBook = () => {
    return (
        <>
            <header className="navbar navbar-expand-lg bg-light">
                <div className="container-md">
                </div>
            </header>
            <div className="container-md">

            </div>
            <main>
                <ul className="list-group padding-sides-15" >
                    <li className="list-group-item bg-warning"><h2>Which quiz do you want to take?</h2></li>
                    <li className="list-group-item" style={{ backgroundColor: "white" }}><Link to="/quiz">Sample Quiz</Link></li>
                    <li className="list-group-item" style={{ backgroundColor: "white" }}><Link to="/capitalQuiz">Capitals of States/Countries Quiz</Link></li>
                    <li className="list-group-item" style={{ backgroundColor: "white" }}><Link to="/cricketQuiz">Cricket Quiz</Link></li>

                </ul>
            </main>
            <p></p>
            <footer>
                <ul className="list-group padding-sides-15">
                    <li className="list-group-item" style={{ border: "1px solid black" }}><Link to="/about">About this QuizBook app!</Link></li>
                </ul>
            </footer>
        </>
    )
}
