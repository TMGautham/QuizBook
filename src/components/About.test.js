import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import About from "./About";
import { renderWithRedux } from "../testutil";
import { BrowserRouter } from "react-router-dom";

describe("About", () => {
  test("About component loads", async () => {
    const { store } = renderWithRedux(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    screen.getByText(/About QuizBook app!/i);
  });
});
