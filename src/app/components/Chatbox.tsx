import React from 'react'
import Chats from './Chats'
import Inputarea from './inputarea' 

const Chatbox = () => {
  return (
    <div className='w-[75%] h-[275%] flex flex-col justify-between items-center bg-gradient-to-b from-background-2  to-background-3 mt-1.5 ml-4 rounded-md'>
        <div className='flex  pt-6 items-center font-semibold '> {/* This is the upper portion of my main area*/}
            <svg width="302" height="1" viewBox="0 0 302 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="302" y1="0.51001" y2="0.51001" stroke="black" stroke-opacity="0.22"/>
            </svg>
            <h2 className='opacity-50 px-6'>Today 12:00 PM</h2>

            <svg width="302" height="1" viewBox="0 0 302 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="302" y1="0.51001" y2="0.51001" stroke="black" stroke-opacity="0.22"/>
            </svg>

        </div>
        <Chats/>{/*Importing the chats from here */}
     <Inputarea/>{/*importing input area from here */}
    </div>
  )
}

export default Chatbox