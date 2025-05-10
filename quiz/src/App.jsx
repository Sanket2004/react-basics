import React from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: 1,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
    ],
    answer: 0,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    answer: 0,
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "500,000 km/s"],
    answer: 0,
  },
];

export default function App() {
  return (
    <div>
      <h1>Quiz App</h1>
      {questions.map((q, idx) => (
        <div key={idx}>
          <h1>{q.question}</h1>
          <ul>
            {q.options.map((option, index) => (
              <li key={index}>
                <input type="radio" name={`question-${idx}`} value={index} />
                {option}
              </li>
            ))}
          </ul>
          <p>
            Correct Answer: {q.options[q.answer]} (Option {q.answer + 1})
          </p>
        </div>
      ))}
    </div>
  );
}
