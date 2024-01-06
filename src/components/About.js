import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="padding-sides-15 padding-top-15">
        <h2>About QuizBook app!</h2>
      </header>
      <main className="padding-sides-15">
        <h3>Basic details:</h3>
        <section>
          This app is a react app. It uses only functional components.
        </section>
        <br />
        <section>
          It uses React-Redux for state management. Traditional actions and
          reducers have been used. Redux-thunk middleware is used for API calls.
        </section>
        <br />
        <section>
          JSON Server is used for generating APIs. Run the command{" "}
          <code>npx json-server --watch db.json</code> to start the json server.
        </section>
        <br />
        <section>
          The app uses local storage to store the best score obtained in the
          quiz.
        </section>
        <br />
        <section>
          The app uses React Testing Library and Jest for unit testing an MSW
          for mocking APIs.
        </section>
        <br />
        <section>
          <h3>Hooks used :</h3>
          <ul>
            <li>useEffect</li>
            <li>useRef</li>
            <li>useSelector</li>
            <li>useDispatch</li>
          </ul>
        </section>
        <section>
          <h3>Accessibility :</h3>
          Page conforms to WCAG 2.1 AA standards. Tested with aXe extension in
          Chrome.
        </section>
        <br />
        <section>
          <h3>Future plans:</h3>
          <ul>
            <li>Mirgrate to RTK</li>
            <li>Host a decidated backend API instead of JSON server</li>
            <li>Add more quizzes</li>
            <li>Improve UI</li>
          </ul>
        </section>
        <br />
        <div>
          Github repo :{" "}
          <a href="https://github.com/TMGautham/QuizBook">
            https://github.com/TMGautham/QuizBook
          </a>
        </div>
        <div>
          <button
            className="btn btn-primary btn-xs"
            onClick={() => navigate("/")}
          >
            Go Back Home!
          </button>
        </div>
      </main>
    </>
  );
};

export default About;
