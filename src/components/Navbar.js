import { useState } from 'react';
import logo from '../assets/motorik-logo.png'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose} from 'react-icons/md';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleDrop, setToggleDrop] = useState(false);
    const [toggleTeams, setToggleTeams] = useState(false);

    return (
        <header className="bg-gray-900 py-4 lg:py-6 sticky z-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">

                    <div className="flex items-center">
                        <Link className='flex items-center' to="/">
                            <img src={logo} alt="logo" className="h-10 lg:h-16" />
                            <p className='text-white px-2'>Motorik FC</p>
                        </Link>
                    </div>

                    {/* Desktop/Tablet View Menu */}
                    <div className="hidden md:block">
                        <nav className="flex items-center">
                            <Link to="/" className="text-white font-semibold py-3 px-4 hover:bg-gray-800 rounded-md">
                                Home
                            </Link>
                            <Link to="/about" className="text-white font-semibold py-3 px-4 hover:bg-gray-800 rounded-md">
                                About
                            </Link>

                            <div className="relative">
                                <button onClick={()=> setToggleDrop(!toggleDrop)} className="text-white font-semibold py-3 px-4 hover:bg-gray-800 rounded-md">
                                Teams
                                </button>
                                <ul className={`absolute ${toggleDrop ? "" : "hidden"} w-48 pt-2 bg-gray-900 rounded-md`}>
                                    <li>
                                        <Link to="/teams/u23" className="block px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 rounded-md">
                                        U23 Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/teams/women" className="block px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 rounded-md">
                                        Women's Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/tryouts" className="block px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 rounded-md">
                                        Tryout Info
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/shop" className="text-white font-semibold py-3 px-4 hover:bg-gray-800 rounded-md">
                                Shop
                            </Link>
                            <Link to="/contact" className="text-white font-semibold py-3 px-4 hover:bg-gray-800 rounded-md">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="sm:flex md:hidden">
                        <GiHamburgerMenu fontSize={27} onClick={()=> setToggleMenu(true)} className="cursor-pointer text-white hover:text-red-500" />

                        {toggleMenu && (
                        <div className='flex justify-center items-center slide-bottom fixed top-0 left-0 w-full h-screen bg-gray-900 z-[5]'>
                            {!toggleTeams ?
                                (<MdClose fontSize={27} className='text-white absolute top-5 right-5 cursor-pointer' onClick={() => setToggleMenu(false)} />)
                                :
                                (<MdClose fontSize={27} className='text-white absolute top-5 right-5 cursor-pointer' onClick={() => setToggleTeams(!toggleTeams)} />)
                            }

                            {!toggleTeams ? 
                                (
                                    <ul className='flex-1 flex justify-center flex-col items-center text-white'>
                                        <Link to='/' className='text-center text-[1.5rem] sm:text-[2rem] m-8 hover:text-red-500' onClick={() => setToggleMenu(false)}>Home</Link>
                                        <Link to='/about' className='text-center text-[1.5rem] sm:text-[2rem] m-8 hover:text-red-500' onClick={() => setToggleMenu(false)}>About</Link>
                                        <li className='text-center text-[1.5rem] sm:text-[2rem] m-8 hover:text-red-500 cursor-pointer' onClick={() => setToggleTeams(!toggleTeams)}>Teams</li>
                                            
                                        <Link to='/shop' className='text-center text-[1.5rem] sm:text-[2rem] m-8 hover:text-red-500' onClick={() => setToggleMenu(false)}>Shop</Link>
                                        <Link to='/contact' className='text-center text-[1.5rem] sm:text-[2rem] m-8 hover:text-red-500' onClick={() => setToggleMenu(false)}>Contact</Link>
                                    </ul>
                                ) 
                            :
                                (
                                    <ul className='flex-1 flex justify-center flex-col items-center text-white slide-bottom'>
                                        <li className='text-center text-[1.5rem] sm:text-[2rem] w-full mt-8 py-4 text-black hover:text-red-500 cursor-pointer bg-slate-300' onClick={() => setToggleTeams(!toggleTeams)}>
                                            Teams
                                        </li>
                                        <Link to='/teams/u23' className={`block ${toggleTeams ? "" : "hidden"} text-center text-[1.5rem] sm:text-[2rem] m-8 hover:text-red-500`} onClick={() => setToggleMenu(false)}>U23 Team</Link>
                                        <Link to='/teams/women' className={`block ${toggleTeams ? "" : "hidden"} text-center text-[1.5rem] sm:text-[2rem] m-8 hover:text-red-500`} onClick={() => setToggleMenu(false)}>Women's Team</Link>
                                        <Link to='/tryouts' className={`block ${toggleTeams ? "" : "hidden"} text-center text-[1.5rem] sm:text-[2rem] m-8 hover:text-red-500`} onClick={() => setToggleMenu(false)}>Tryout Info</Link>
                                    </ul>
                                )
                            }
                        </div>
                        )}                        
                    </div>
                    
                </div>
            </div>
        </header>
    )}

  export default Navbar;
