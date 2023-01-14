import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import {FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
import player from '../assets/motorik-player.png'
import team from '../assets/motorik-team.png'

const Home = () => {
  const games = [
    {
      opponent : "Bad Guys",
      date : "01/20/2023"
    },
    {
      opponent : "Other Guys",
      date : "02/20/2023"
    },
    {
      opponent : "Bad People",
      date : "03/20/2023"
    },
    {
      opponent : "Revengers",
      date : "04/20/2023"
    },
  ]

  return (
    <div className=''>
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

          <div className='w-full md:w-[40%]'>
            <h3 className='capitalize text-gray-700 text-3xl sm:text-4xl ml:text-5xl lg:text-6xl font-bold'>Semi Pro soccer club based in North Virginia</h3>
            <p className='font-semibold my-4'>Looking to join a team!</p>
            <Link to="/tryouts" className="py-2 px-4 bg-red-700 text-white font-bold rounded-sm cursor-pointer hover:bg-gray-800">
              Learn More
            </Link>
          </div>
        </div>

        <div className="overflow-x-scroll">
          <div className="flex">
            {games.map((game, index) => (
              <div key={index} className="p-4">
                <h4 className="text-lg">{game.opponent}</h4>
                <p className="text-gray-600">{game.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <footer className='h-60 bg-mtk-blue'>
            footer
        </footer> */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-sm">Copyright © {new Date().getFullYear()} Motorik FC Alexandria</p>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <p className="text-sm">Powered by <a href="https://lower-league-soccer-usa.fandom.com" className="text-white hover:text-green-500">Lower League Soccer USA</a></p>
              </div>
            </div>
          </div>
        </footer>
        
    </div>
  )
}

export default Home