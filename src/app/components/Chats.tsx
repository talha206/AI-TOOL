import React from 'react'
import Image from 'next/image'
import logo from "../../../public/images/logo.jpg"

const Chats = () => {
  return (
    <div className='h-70'>
      
   <h3 className=' w-[200px] h-11 bg-secondary-600 rounded-full absolute top-44 right-[320px] items-center pl-6 pt-2 font-semibold text-md'>
        <span>What is your name</span></h3>{/*The user input chat */}
    <Image src={logo} alt='logo' className='w-8 h-8 aspect-square rounded-full absolute top-[210px] left-[420px]'/>
         <h3 className='shadow-text-shadow w-[500px] h-9 rounded-full absolute top-[250px] left-[435px] pl-7 pt-2 text-sm font-semibold'
    >I don`t have a personal name,but you can call me Chat GPT</h3>{/*Bot response */}
    
    <div className='w-[170px] flex absolute top-[300px] left-[455px] justify-around'>{/*Bots msg tools for user */}
       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    
          <g clip-path="url(#clip0_30_141)">
            <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5M11 9H20C21.1046 9 22 9.89543 22 11V20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9Z" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
            <defs>
            <clipPath id="clip0_30_141">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>

        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_30_142)">
        <path d="M23 4.00008V10.0001M23 10.0001H17M23 10.0001L18.36 5.64008C17.2853 4.56479 15.9556 3.77928 14.4952 3.35685C13.0348 2.93442 11.4911 2.88883 10.0083 3.22433C8.52547 3.55984 7.1518 4.26551 6.01547 5.27549C4.87913 6.28548 4.01717 7.56686 3.51 9.00008M1 20.0001V14.0001M1 14.0001H7M1 14.0001L5.64 18.3601C6.71475 19.4354 8.04437 20.2209 9.50481 20.6433C10.9652 21.0657 12.5089 21.1113 13.9917 20.7758C15.4745 20.4403 16.8482 19.7346 17.9845 18.7247C19.1209 17.7147 19.9828 16.4333 20.49 15.0001" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_30_142">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


     </div>
    </div>

  )
}

export default Chats