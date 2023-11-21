import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Questions from './Questions'
function App() {
  const [questions, setQuestions] = useState(data)
  const [activeID, setActiveID] = useState(null)

  const toggleID = (id) => {
    const newActiveID = id === activeID ? null :id;
    setActiveID(newActiveID);
  }

  return (
    <>
      <section>
        <Questions questions={questions} activeID ={activeID} toggleID={toggleID}/>
      </section>
    </>
  )
}

export default App
