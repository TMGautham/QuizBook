import Quiz from "./Quiz";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Take this General Knowledge Quiz!!</h2>
      <Quiz url={"http://localhost:3000/quiz"} />
    </div>
  );
}

export default App;
