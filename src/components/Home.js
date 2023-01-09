import React from 'react'
import player from '../assets/motorik-player.png'

const Home = () => {
  return (
    <div className=''>
        <header className=' relative h-[25rem] motorik-bg bg-no-repeat bg-cover bg-[center_top_-2rem] ml:bg-[center_top_-10rem] md:bg-[center_top_-5rem]'>
            <div className='h-24 bg-gray-800 w-4/5 sm:w-1/2 absolute bottom-20 sm:bottom-24 z-0'></div>
            <img className="h-auto sm:h-full absolute z-10 bottom-0 sm:left-1/4" src={player} alt='player' />
            <h1 className='z-10 text-white uppercase text-4xl sm:text-7xl md:text-9xl ml:text-9xl absolute bottom-28 md:bottom-16 left-4 sm:left-8 font-bold'>
                Motorik
            </h1>
        </header>

        <div className='h-[30rem]'>

        </div>

        <footer className='h-60 bg-mtk-blue'>
            footer
        </footer>
        
    </div>
  )
}

export default Home