import { RouterProvider } from "react-router-dom";
import { quizRouter } from "./router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Take a Quiz!!</h2>
      <RouterProvider router={quizRouter} />
    </div>
  );
}

export default App;
