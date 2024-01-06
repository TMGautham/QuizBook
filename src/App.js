import { RouterProvider } from "react-router-dom";
import { quizRouter } from "./router/router";

import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark p-0">
        <div className="navbar-brand text-light padding-sides-15">
          <h1>Gautham's Quiz! Test your General Knowledge!</h1>
        </div>
      </nav>

      <div className="App">
        <RouterProvider router={quizRouter} />
      </div>
    </>
  );
}

export default App;
