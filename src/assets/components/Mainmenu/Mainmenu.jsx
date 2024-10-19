import React from 'react'
import { useContext } from 'react'
import { Quizcontext } from '../Contexts' 
import './Mainmenu.css'

const Mainmenu = () => {
  const {gameState,setGameState} = useContext(Quizcontext);

  return (
    <div className='MainmenuMain'>
      <div className='MainmenuWrap'>
      <h1>Quiz App</h1> 
      <span className='MainmenuSpan'>
        <p>Name:</p>
        <input type='text' placeholder='name'/>
      </span>
      <button onClick={() => {
        setGameState("quiz")
        }}>
        start quiz
        </button>
      </div>
     </div>
  )
}

export default Mainmenu