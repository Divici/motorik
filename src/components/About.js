import React from 'react'
import Navbar from './Navbar'
import team from '../assets/multi-team-photos.png'
import team2 from '../assets/team-huddle-2.jpeg'
import identity from '../assets/coach-mindset.PNG'

const About = () => {
  return (
    <div className=''>
    <Navbar/>
    <div className='mt-8 flex justify-around flex-wrap '>
      
      <div className='px-6'>
      
        <h2 className='capitalize text-center text-gray-700 text-5xl mb-4 sm:text-6xl p-4 ml:text-7xl lg:text-7xl font-bold'>Our Story</h2>
        <div className=' bg-white'>
          <div className='flex justify-center flex-wrap'>
            <div className='p-4 m-4 text-center sm:w-[450px] md:w-[500px] ml:w-half lg:w-half w-[300px]'>
              <img src={team} className="w-full" alt="Team" />
            </div>
            <div className='p-4 m-4 text-center sm:w-[450px] md:w-[500px] ml:w-half lg:w-half w-[300px]'>
              <h3 className='capitalize text-gray-700 text-2xl sm:text-3xl ml:text-4xl lg:text-4xl font-bold'>The Beginning</h3>
              <p className='font-semibold my-6'> 
                It all Started as one person's passion project. One ambitious person with a love for non-league and lower league soccer and a dream to create an exciting culture around a club that could hopefully become a staple part of the community.
                Motorik FC Alexandria was founded in 2017 by Kenneth Tebo. Although not even having players, a facility, fields, or anything to build from, he had big ambitions. After lots of advertisement and reaching out to locals, the club somehow managed to pull together enough players and a coach
                to field its first squad in the Maryland Major's Soccer League. A good string of pre-season wins and a strong start to the season with a formidable looking squad surely had the club president feeling hopeful, but that suddenly came crashing down after some internal struggles 
                within the club would see most of the team leave and Motorik FC nearly fold mid season. That would be the start of a very rocky few years. Motorik spent the 2019, 2021, & 2022 Spring season bouncing between leagues, taking a bout in EPSL and APL and finishing rock bottom in both. Then when all hope seemed lost after Motorik had taken 
                a massive 12 - 0 loss in a friendly, The club would see the return of some ex-players and the entrance of a coach who would completely transform the club, turning it into one of the best, fastest growing, and most exciting clubs in the DMV area!  
              </p>
            </div>
          </div>
        </div>
        
        <div className=' bg-slate-100'>
          <div className='flex justify-center flex-wrap'>
            <div className='p-4 m-4 text-center sm:w-[450px] md:w-[500px] ml:w-half lg:w-half w-[300px]'>
              <h3 className='capitalize text-gray-700 text-2xl sm:text-3xl ml:text-4xl lg:text-4xl font-bold'>A Turn Around</h3>
              <p className='font-semibold my-6'> 
              The 2022 Spring Season would be the start of Motorik FC's huge transformation with the changing of club personnel and The hiring of esteemed Coach, Ayon Basu. Ayon spent his first few weeks setting a new club standard, culture, and expectations. 
              One that prioritizes good camaraderie, a strong unwavering mentality and desire to fight for the club and one and other, and a playing style that encourages smart, tactical play, focusing on very organized positioning, dominating possession, and slow build-up play. 
              These standards and philosophies would be the catalyst towards Motorik's first successful season. Not only would the club reach its first ever final, but would also go on to lead the league in goals scored with the best goal-differential. 
              Unfortunately, that wouldn't be enough for the club to see it's first trophy after an unfortunate 3-1 loss in the Play-off's finals, but it would ultimately bring us to the point we are now.
              </p>
            </div>
            <div className='p-4 m-4 text-center sm:w-[450px] md:w-[500px] ml:w-half lg:w-half w-[300px]'>
              <img src={team2} className="w-full" alt="Team2" />
            </div>
          </div>
        </div>
        
        <div className='bg-sky-100'> 
          <div className='flex justify-center flex-wrap'>
            <div className='p-4 m-4 text-center sm:w-[450px] md:w-[500px] ml:w-half lg:w-half w-[300px]'>
              <img src={identity} className="w-full" alt="identity" />
            </div>
            <div className='p-4 m-4 text-center sm:w-[450px] md:w-[500px] ml:w-half lg:w-half w-[300px]'>
              <h3 className='capitalize text-gray-700 text-2xl sm:text-3xl ml:text-4xl lg:text-4xl font-bold'>Our Vision & Identity</h3>
              <p className='font-semibold my-6'>
                We now field a semi-pro men's team in the UPSL, a reserve team in the APL Division 2, and are in the works of bringing our club mentality, philosophy, and culture to the Youth Level and to the women's game.
              </p>
              <p className='font-semibold my-6'>
                What makes Motorik unique to many of the other clubs around is the culture, philosophy, and mentality that has been implemented by The Motorik coaches, staff, and owner. 
                We very much pride ourselves on being a club that is about more then just having good teams and building good players, but on building good people as well. 
                We hope to one day be able to provide elite soccer to everyone within the DMV area but more importantly, to be a club with good standards and values that players, fans, and even investors can be proud to be a part of!
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
    </div>
  );
}

export default About;
