import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import QuizEnded from "./QuizEnded";
import { renderWithRedux } from "../testutil";


describe('QuizEnded', () => {
    test('render QuizEnded', () => {
        renderWithRedux(<BrowserRouter>
            <QuizEnded />
        </BrowserRouter>)
        let text = screen.getByText(/Quiz Ended!/i)
        expect(text).toBeInTheDocument()
    })
})