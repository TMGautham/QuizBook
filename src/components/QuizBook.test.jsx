import { screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import { QuizBook } from "./QuizBook";
import { renderWithRedux } from "../testutil";


describe('QuizBook', () => {
    test('renders QuizBook', () => {
        renderWithRedux(
            <BrowserRouter>

                <QuizBook />
            </BrowserRouter>)
        let text = screen.getByText(/Which quiz do you want to take/i)
        expect(text).toBeInTheDocument()
    })
})