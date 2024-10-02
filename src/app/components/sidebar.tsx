import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/images/logo.jpg'

const Sidebar = () => {
  return (
    <div className='w-[20%] max-h-[100%] flex flex-start flex-col mt-6 ml-6'>
   <div className='flex items-center mb-20'> {/*My site logo area and name */}
  <Image src={logo} alt='logo' className='w-16 h-16 border-none rounded-full'/>
 <h1 className='text-text-main text-3xl font-semibold  ml-3'> Ai TOOL</h1>
 </div>

 <div className='w-[228px] h-[62px] flex items-center   bg-gradient-to-r from-background-5 to-background-4 rounded-full'>

 <div className='bg-white rounded-full w-[53px] h-[53px]  mx-3 flex items-center justify-center pr-[3px] pb-[2px] ' > {/*User profile pic and user name */}
    <Link  href="#" className=''>
        <svg width="34" height="34" viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 22.5C19.075 22.5 17.4271 21.7656 16.0563 20.2969C14.6854 18.8281 14 17.0625 14 15C14 12.9375 14.6854 11.1719 16.0563 9.70313C17.4271 8.23438 19.075 7.5 21 7.5C22.925 7.5 24.5729 8.23438 25.9438 9.70313C27.3146 11.1719 28 12.9375 28 15C28 17.0625 27.3146 18.8281 25.9438 20.2969C24.5729 21.7656 22.925 22.5 21 22.5ZM7 37.5V32.25C7 31.1875 7.25521 30.2109 7.76562 29.3203C8.27604 28.4297 8.95417 27.75 9.8 27.2812C11.6083 26.3125 13.4458 25.5859 15.3125 25.1016C17.1792 24.6172 19.075 24.375 21 24.375C22.925 24.375 24.8208 24.6172 26.6875 25.1016C28.5542 25.5859 30.3917 26.3125 32.2 27.2812C33.0458 27.75 33.724 28.4297 34.2344 29.3203C34.7448 30.2109 35 31.1875 35 32.25V37.5H7ZM10.5 33.75H31.5V32.25C31.5 31.9062 31.4198 31.5938 31.2594 31.3125C31.099 31.0312 30.8875 30.8125 30.625 30.6562C29.05 29.8125 27.4604 29.1797 25.8563 28.7578C24.2521 28.3359 22.6333 28.125 21 28.125C19.3667 28.125 17.7479 28.3359 16.1438 28.7578C14.5396 29.1797 12.95 29.8125 11.375 30.6562C11.1125 30.8125 10.901 31.0312 10.7406 31.3125C10.5802 31.5938 10.5 31.9062 10.5 32.25V33.75ZM21 18.75C21.9625 18.75 22.7865 18.3828 23.4719 17.6484C24.1573 16.9141 24.5 16.0312 24.5 15C24.5 13.9688 24.1573 13.0859 23.4719 12.3516C22.7865 11.6172 21.9625 11.25 21 11.25C20.0375 11.25 19.2135 11.6172 18.5281 12.3516C17.8427 13.0859 17.5 13.9688 17.5 15C17.5 16.0312 17.8427 16.9141 18.5281 17.6484C19.2135 18.3828 20.0375 18.75 21 18.75Z" fill="#1D1B20"/>
    </svg>
    </Link>
    </div>
    <h2 className='text-2xl font-bold'>Chat</h2>
</div>

</div>
  )
}

export default Sidebar

 /* Rectangle 14 */

 

 