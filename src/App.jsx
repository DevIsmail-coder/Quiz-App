import { useState,useContext } from 'react'
import Mainmenu from './assets/components/Mainmenu/Mainmenu'
import QuizPage from './assets/components/Quiz/QuizPage'
import EndScreen from './assets/components/EndScreen/EndScreen'
import './App.css'
import { Quizcontext } from './assets/components/Contexts'

function App() {
const [gameState,setGameState] = useState("menu") 
const [score,setScore] = useState(0)

  return (
    <div className='AppMain'>
    <Quizcontext.Provider value={{gameState, setGameState, score, setScore}}> 
    {gameState === "menu" && <Mainmenu/>}
    {gameState === "quiz" && <QuizPage/>}
    {gameState === "end" && <EndScreen/>}
    </Quizcontext.Provider>
    </div>
  )
}

export default App
