import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

export const renderWithRedux = (
  ui, //component that is passed
  {
    preloadedState,
    store = configureStore({
      reducer,
      preloadedState,
      // reducer : reducer,
      //   preloadedState: { data: [], score: 5, questionsAnswered: 0 },
    }),
  } = {}
) => {
  //   console.log(store.getState());
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return { ...render(ui, { wrapper: Wrapper }), store };
};
