import React from 'react'
import Navbar from './Navbar'

const Women = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="h-screen bg-mtk-blue flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">Coming Soon</h1>
          <div className="w-[90%] mx-auto h-1 bg-gray-800 my-4"></div>
          <p className=" w-4/5 mx-auto text-lg text-gray-800">We are working hard to bring our philosophy and culture to the Youth Level. Stay tuned!</p>
        </div>
      </div>
    </div>
  )
}

export default Women