import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({questions, activeID, toggleID}) => {
  return (
    <section>
        {questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question} activeID={activeID} toggleID={toggleID}/>
        })}
    </section>
  )
}

export default Questions