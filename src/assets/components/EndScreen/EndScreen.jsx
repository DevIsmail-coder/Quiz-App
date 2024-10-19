import React from 'react'
import { useState,useContext } from 'react'
import { Quizcontext } from '../Contexts' 
import { Question } from '../QuestionBank'
import './EndScreen.css'

const EndScreen = () => {
  const {score,setScore,setGameState} = useContext(Quizcontext);

  const RestartQuiz = () => {
    setScore(0)
    setGameState("menu")
  }
  return (
    <div className='EndScreenMain'>
      <div className='EndScreenWrap'>
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {Question.length}
      </h3>
      <button onClick={RestartQuiz}>Restart Quiz</button>
      </div>
    </div>
  )
}

export default EndScreen