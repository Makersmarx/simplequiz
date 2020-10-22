import React, { useState } from 'react';

export default function App() {
  const questions = [
    {
      questionText: '....water do you want?',
      answerOptions: [
        { answerText: 'How many', isCorrect: false },
        { answerText: 'How often', isCorrect: false },
        { answerText: 'How much', isCorrect: true },
        { answerText: 'How Like', isCorrect: false },
      ],
    },
    {
      questionText: 'Is your pen red?',
      answerOptions: [
        { answerText: 'Yes, I am', isCorrect: false },
        { answerText: 'No, it is', isCorrect: false },
        { answerText: 'No, I am not', isCorrect: false },
        { answerText: 'Yes, it is', isCorrect: true },
      ],
    },
    {
      questionText: '...is the dress?',
      answerOptions: [
        { answerText: 'How much', isCorrect: true },
        { answerText: 'How many', isCorrect: false },
        { answerText: 'How far', isCorrect: false },
        { answerText: 'How tall', isCorrect: false },
      ],
    },
    {
      questionText: 'We dont have...tomatoes left in the fridge.',
      answerOptions: [
        { answerText: 'a few', isCorrect: false },
        { answerText: 'much', isCorrect: false },
        { answerText: 'some', isCorrect: false },
        { answerText: 'any', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
