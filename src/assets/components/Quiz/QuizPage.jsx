import React, { useState, useContext } from 'react';
import { Question } from '../QuestionBank';
import { Quizcontext } from '../Contexts';
import './QuizPage.css';

const QuizPage = () => {
  const { score, setScore, setGameState } = useContext(Quizcontext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(Question.length).fill(null));

  const nextQuestion = () => {
    if (Question[currentQuestion].answer === selectedOptions[currentQuestion]) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const FinishQuiz = () => {
    if (Question[currentQuestion].answer === selectedOptions[currentQuestion]) {
      setScore(score + 1);
    }
    setGameState('end');
  };

  // Go back to previous question
  const PreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  // Handle option click
  const handleOptionClick = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option; // Update the selected option for the current question
    setSelectedOptions(updatedOptions);
  };

  // Dynamic button styling based on the selected option
  const getButtonStyle = (option) => ({
    backgroundColor: selectedOptions[currentQuestion] === option ? 'green' : '#f0f0f0',
    color: selectedOptions[currentQuestion] === option ? 'white' : 'black',
    padding: '10px 20px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  });

  return (
    <div className='QuizPageMain'>
      <div className='QuizPageWrap'>
        <h1>{Question[currentQuestion].prompt}</h1>
        <div className='QuizPageDiv'>
          <button
            style={getButtonStyle('A')}
            onClick={() => handleOptionClick('A')}
          >
            A {Question[currentQuestion].optionA}
          </button>
          <button
            style={getButtonStyle('B')}
            onClick={() => handleOptionClick('B')}
          >
            B {Question[currentQuestion].optionB}
          </button>
          <button
            style={getButtonStyle('C')}
            onClick={() => handleOptionClick('C')}
          >
            C {Question[currentQuestion].optionC}
          </button>
          <button
            style={getButtonStyle('D')}
            onClick={() => handleOptionClick('D')}
          >
            D {Question[currentQuestion].optionD}
          </button>
        </div>

        <div className='QuizPagedivbut'>
          {currentQuestion !== 0 && (
            <button onClick={PreviousQuestion} className='QuizPagebut'>
              Previous Question
            </button>
          )}
          {currentQuestion === Question.length - 1 ? (
            <button onClick={FinishQuiz} className='QuizPagebut'>
              Finish Quiz
            </button>
          ) : (
            <button onClick={nextQuestion} className='QuizPagebut'>
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
