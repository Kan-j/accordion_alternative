import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";


const SingleQuestion = ({id, title, info, activeID, toggleID}) => {
    const isActiveID = id ===activeID;
  return (
    <section className='bg-gray-200 my-4 px-2 py-2 rounded-md'>
        <section className='flex justify-between'>
            <h1>{title}</h1>
            <button onClick={()=> toggleID(id)}>{isActiveID? <FaMinusCircle />: <FaPlusCircle />}</button>
        </section>
        
        <p className='text-justify mt-2 '>{isActiveID && info}</p>

    </section>
  )
}

export default SingleQuestion