import React from 'react'

const Inputarea = () => {
  return (
    <div className='w-[90%] flex flex-col justify-center items-center'>      
       <div  className='w-[100%] h-[60px] flex justify-between items-center px-5 mb-5 bg-white rounded-full'> {/*The input area to enter text */}
            <h2 className='font-bold opacity-35 text-lg'>Enter Your Question Here</h2>
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.28">
          <path d="M13.125 14.5833L5.83331 21.8749M5.83331 21.8749L13.125 29.1666M5.83331 21.8749H23.3333C24.8804 21.8749 26.3641 21.2603 27.4581 20.1664C28.5521 19.0724 29.1666 17.5887 29.1666 16.0416V5.83325" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
     </g>
    </svg>

    </div>
    <p className='font-bold text-sm '>Ai model Trainer</p>
    </div>
  )
}

export default Inputarea