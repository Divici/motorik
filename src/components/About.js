import React from 'react';
import Navbar from './Navbar';
import logo from '../assets/motorik-logo.png'

const About = () => {
  return (
    <div>
      <Navbar/>
    
      <div className="flex flex-col items-center justify-center h-screen motorik-bg bg-no-repeat bg-cover bg-[center_top]">
        <img
          src={logo}
          alt="Team logo"
          className="w-32 h-32 mb-6"
        />
        <h1 className="text-2xl font-medium mb-6">About Our Team</h1>
        <div className="w-full md:w-3/4 text-center font-medium">
          <p className="mb-4 px-8">
            Motorik FC Alexandria was founded in 2017 and is based in Fairfax County in Northern Virginia. The team competes in the UPSL and Division 2 APL leagues.
            Our team is a dedicated group of soccer players who strive for success on and off the field. We work hard to improve our skills and strive to be the best we can be.
          </p>
          <p className="mb-4 px-8">
            We are committed to fair play and sportsmanship, and we always strive to be positive role models for our community. We are proud to represent northern Virginia and our fans.
          </p>
          <p className='px-8'>
            Thank you for your support and we look forward to seeing you at our games!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
