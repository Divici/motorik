import React from 'react'
import Navbar from './Navbar'
import about from '../assets/motorik-team.png'

const About = () => {
  return (
    <div className=''>
    <Navbar />
    <div className='flex justify-around flex-wrap '>
      
      <div className='w-1/2 my-8'>
        <img className="h-auto" src={about} alt='about' />
      </div>

      <div className=' text-center w-full md:w-[30%]'>
        <h2 className='capitalize text-gray-700 text-4xl sm:text-5xl p-4 ml:text-6xl lg:text-6xl font-bold'>Our Story</h2>
        <div>
          <h3 className='capitalize text-gray-700 text-2xl sm:text-3xl ml:text-4xl lg:text-4xl font-bold'>The Beginning</h3>
          <p className='font-semibold my-4'> 
            What Started as just a passion project by one ambitious person with a love for non-league and lower league soccer and a dream to create an exciting culture around a club, has turned into one of the best, fastest growing, and exciting soccer clubs in the DMV area! 
            Motorik FC Alexandria was founded in 2017 by Kenneth Tebo. Although not even having players, a facility, fields, or anything to build from, he had big ambitions. 
            The first few years of building teams had seen many many failures, trials, and tribulations with the club nearly folding several times, being ridiculed with poor performances, internal troubles, and no clear direction on where to go. 
            But through perseverance and finding the right people to build the right club culture, It has seen a massive transformation over the last 2 years to become what it is now.  
          </p>
        </div>

        <div>
          <h3 className='capitalize text-gray-700 text-2xl sm:text-3xl ml:text-4xl lg:text-4xl font-bold'>Our Vision & Identity</h3>
          <p className='font-semibold my-4'>
            We now field a semi-pro men's team in the UPSL, a reserve team in the APL Division 2, and are in the works of bringing our club mentality, philosophy, and culture to the Youth Level and to the women's game.
          </p>
          <p className='font-semibold my-4'>
            What makes Motorik unique to many of the other clubs around is the culture, philosophy, and mentality that has been implemented by The Motorik coaches, staff, and owner. 
            We very much pride ourselves on being a club that is about more then just having good teams and building good players, but on building good people as well. 
            we hope to one day be able to provide elite soccer to everyone within the DMV area but more importantly, to make a club that people can feel proud and excited to be a part of, whether as a player, fan, or investor!
          </p>
        </div>

      </div>
    </div>
    </div>
  );
}

export default About;
