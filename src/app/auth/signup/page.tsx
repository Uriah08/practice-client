import React from 'react'
import Login from '@/components/forms/Login'

const page = () => {
  return (
    <div className="w-full min-h-screen bg-[#f1f1f1] flex justify-center items-center">
        <div className='bg-[#ffffff] max-w-[600px] w-full text-[#4b4b4b] py-10 px-5 flex flex-col items-center'>
            <h1 className="font-light text-center tracking-[8px]">삼성LED</h1>
            <h1 className="font-light text-center tracking-[8px]">Loing</h1>
            <Login/>
        </div>
    </div>
  )
}

export default page