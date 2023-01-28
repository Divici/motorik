import React from 'react'
import Navbar from './Navbar'
import tryouts from '../assets/tryouts.png'

const Tryouts = () => {
  return (
    <div className='bg-mtk-blue h-screen'>
        <Navbar />
    <div className="flex flex-col items-center motorik-bg bg-no-repeat bg-cover bg-[center_top]">
      <h1 className="mt-12 md:mt-24 md:mb-8 text-gray-800 text-5xl py-4 text-center uppercase font-extrabold">Tryouts</h1>
      <div className="my-6 w-[95%] md:w-4/5">
        <img src={tryouts} className="w-full" alt="Team tryouts" />
      </div>
      <div className="text-center mx-8 md:mx-12">
        <p className="text-base md:text-lg font-semibold my-4">
          Motorik FC is looking for new players to join the team for the upcoming season. 
        </p>
        <p className="text-base md:text-lg font-semibold my-4">
          We encourage all interested players to contact us at the information below, and to come prepared with soccer gear and a positive attitude.
        </p>
      </div>
      <div className="pt-8 pb-16">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <p>Email: Tebo@Motorik.com</p>
      </div>
    </div>
    </div>
  );
}

export default Tryouts;