export const question = {
  id: 1,
  question: "What is the Capital of Assam?",
  options: ["Guwahati", "Dispur", "Shillong", "Digboi"],
  answer: "Dispur",
};

export const mockQuiz = [
  {
    id: 1,
    question: "What is the Capital of Sikkim?",
    options: ["Darjeeling", "Gangtok", "Bagdogra", "Dispur"],
    answer: "Gangtok",
  },
  {
    id: 2,
    question: "What is the Capital of South Korea?",
    options: ["Seoul", "Pyongyang", "Hanoi", "Tokyo"],
    answer: "Seoul",
  },
  {
    id: 3,
    question: "Who is the first India T20I captain?",
    options: ["MS Dhoni", "S Ganguly", "V Sehwag", "R Dravid"],
    answer: "V Sehwag",
  },
  {
    id: 4,
    question: "Who is the highest run-scorer in 1983 Cricket WC final?",
    options: ["Gavaskar", "Richards", "Ravi Shastri", "Srikkanth"],
    answer: "Srikkanth",
  },
  {
    id: 5,
    question: "Which year was Mahatma Gandhi born?",
    options: ["1869", "1870", "1871", "1872"],
    answer: "1869",
  },
];

export const initialState = {
  data: [],
  score: 0,
  questionsAnswered: 0,
  quizEnded: false,
};

export const quizEndState = {
  data: [],
  score: 0,
  questionsAnswered: 0,
  quizEnded: true,
};

export const newQuizLoadState = {
  data: mockQuiz,
  score: 0,
  questionsAnswered: 0,
  quizEnded: false,
};

export const firstQuestionCorrectlyAnsweredState = {
  data: mockQuiz,
  score: 10,
  questionsAnswered: 1,
  quizEnded: false,
};

export const secondQuestionCorrectlyAnsweredState = {
  data: mockQuiz,
  score: 20,
  questionsAnswered: 2,
  quizEnded: false,
};

export const secondQuestionIncorrectlyAnsweredState = {
  data: mockQuiz,
  score: 10,
  questionsAnswered: 2,
  quizEnded: false,
};

export const finalQuestionAboutToAnswerState = {
  data: mockQuiz,
  score: 40,
  questionsAnswered: 4,
  quizEnded: false,
};

export const allQuestionsAnsweredState = {
  data: mockQuiz,
  score: 40,
  questionsAnswered: 5,
  quizEnded: false,
};
