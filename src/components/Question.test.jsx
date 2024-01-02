import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Question from "./Question";
import { renderWithRedux } from "../testutil";
import { question } from "../mocks/data";

describe("Question", () => {
    test("Answering a question correctly", async () => {
        const { store } = renderWithRedux(<Question question={question} />);
        const que = screen.getByText(/What is the Capital of Assam?/i)
        const correctAnswer = screen.getByText(/Dispur/i)
        fireEvent.click(correctAnswer)
        expect(store.getState().score).toBe(10)
    });

    test("Answering a question wrongly", async () => {
        const { store } = renderWithRedux(<Question question={question} />);
        const que = screen.getByText(/What is the Capital of Assam?/i)
        const correctAnswer = screen.getByText(/Guwahati/i)
        fireEvent.click(correctAnswer)
        expect(store.getState().score).toBe(0)
    });
});
