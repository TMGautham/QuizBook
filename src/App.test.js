import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { renderWithRedux } from "./testutil";

// global.fetch = jest.fn().mockImplementationOnce(() => {
//   new Promise(function (res, rej) {
//     res("OKAY");
//   });
// });

describe("App", () => {
  test("App loads", () => {
    const { store } = renderWithRedux(<App />);
    // console.log(store.getState());
    const { getByText } = screen;
    expect(
      screen.getByText(/Take this General Knowledge Quiz!!/i)
    ).toBeInTheDocument();
  });
});
