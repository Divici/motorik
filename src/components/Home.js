import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import {FaTwitterSquare, FaInstagramSquare, FaHome} from 'react-icons/fa'
import player from '../assets/motorik-player.png'
import team from '../assets/motorik-team.png'

const Home = () => {
  const games = [
    {
      title : "UPSL Match 1",
      home : "Villarreal CF VA",
      away : "Motorik FC",
      date : "04/01/2023"
    },
    {
      title : "APL Match 1",
      home : "Motorik FC",
      away : "TBD",
      date : "03/19/2023"
    },
  ]

  return (
    <div className=' bg-slate-100'>
      <Navbar/>
        <header className=' relative h-[25rem] motorik-bg bg-no-repeat bg-cover bg-[center_top_-2rem] ml:bg-[center_top_-10rem] md:bg-[center_top_-5rem]'>
            <div className='h-24 bg-gray-800 w-4/5 sm:w-1/2 absolute bottom-20 sm:bottom-24 z-0'></div>
            <img className="h-auto sm:h-full absolute z-10 bottom-0 sm:left-1/4" src={player} alt='player' />
            <h1 className='z-10 text-white uppercase text-4xl sm:text-7xl md:text-9xl ml:text-9xl absolute bottom-28 md:bottom-16 left-4 sm:left-8 font-bold'>
                Motorik
            </h1>
            <div className='flex flex-row md:flex-col justify-evenly absolute ml-2 md:ml-0 mt-4 md:mt-0 md:right-4 md:bottom-1/2'>
              <a className='text-red-700 hover:text-red-500' href='https://twitter.com/MotorikFC' target='_blank' rel="noreferrer"><FaTwitterSquare size='3rem'/></a>
              <a className='text-gray-900 hover:text-gray-700' href='https://www.instagram.com/motorikfcalx/' target='_blank' rel="noreferrer"><FaInstagramSquare size='3rem'/></a>
            </div>
        </header>

        <div className='w-4/5 mx-auto md:w-full my-16 sm:my-24 flex justify-center md:justify-around flex-col-reverse md:flex-row'>
          <div className='w-full md:w-[40%] my-8'>
            <img className="h-auto" src={team} alt='team' />
          </div>

          <div className='w-full md:w-[30%]'>
            <h3 className='capitalize text-gray-700 text-3xl sm:text-4xl ml:text-5xl lg:text-5xl font-bold'>Semi Pro soccer club based in North Virginia</h3>
            <p className='font-semibold my-4'> Motorik FC is more than just an elite level soccer club.   </p>
            <p className='font-semibold my-4'> We're building great teams, great players, and great people. Become part of something great!  </p>
            <div className='flex flex-wrap'>
              <Link to="/about" className="py-2 px-4 mr-3 my-4 bg-red-700 text-white font-bold rounded-sm cursor-pointer hover:bg-gray-800">
                Learn More
              </Link>
              <Link to="/tryouts" className="py-2 px-4 my-4 bg-red-700 text-white font-bold rounded-sm cursor-pointer hover:bg-gray-800">
                Join a Team
              </Link>
            </div>
          </div>
        </div>

        <div className="py-10 team-bg bg-no-repeat bg-cover">
          <h2 className='text-white text-5xl py-4 text-center uppercase font-extrabold'>Upcoming Matches</h2>
          <div className="flex justify-around items-center flex-col md:flex-row w-full md:w-2/3">
            {games.map((game, index) => (
              <div key={index} className="bg-mtk-blue/75 text-center text-white rounded-lg py-8 px-4 w-60 m-4">
                <p className='my-4'>{game.title}</p>
                <h3 className='font-bold text-xl my-2'>{game.date}</h3>
                <p className='flex items-center justify-between mt-4 mb-2'><FaHome className='ml-1' size='1rem'/>{game.home}</p>
                <p className='flex items-center justify-between my-2'><div className='w-4 ml-1'></div>{game.away}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="bg-gray-800 text-white py-4">
          <div className="px-4">
            <div className="flex flex-wrap justify-around items-center">
              <div className="text-center w-3/4 md:w-1/3">
                <p className="text-sm">Copyright © {new Date().getFullYear()} Motorik FC Alexandria</p>
              </div>
              <div className="text-center w-3/4 md:w-1/3">
                <p className="text-sm">Sponsored by: Olive & York and Bistro Aracosia</p>
              </div>
            </div>
          </div>
        </footer>
        
    </div>
  )
}

export default Home