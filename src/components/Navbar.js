import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import NavLogo from '../assets/nav-logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between w-full px-2 lg:px-5 md:px-5 pt-1">
                        <div><img src={NavLogo} alt="little-lemon-logo" className='w-[10rem] md:w-[12rem]' /></div>
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" className="text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-xl font-medium">Home</Link>
                                <Link to="/about" className="text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-xl font-medium">About</Link>
                                <Link to="/menu" className="text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-xl font-medium">Menu</Link>
                                <Link to="/reservation" className="text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-xl font-medium">Reservation</Link>
                                <Link to="/orderonline" className="hidden xl:block text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-xl font-medium">Order Online</Link>
                                <Link to="/orderonline" className="xl:hidden text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-xl font-medium">Order</Link>
                                <Link to="/login" className="text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-xl font-medium">Login</Link>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex lg:hidden">
                        <button
                            onClick={toggleNavbar}
                            type="button"
                            className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-100 mr-6"
                            aria-controls="mobile-menu"
                            aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" className='text-gray-900' />
                            </svg>)
                                : (<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                                ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" className='text-gray-900' /></svg>)}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden" id="mobile-menu">
                    <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" > Home </Link>
                        <Link to="/about" className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link to="/menu" className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Menu</Link>
                        <Link to="/reservation" className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Reservation</Link>
                        <Link to="/orderonline" className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Order Online</Link>
                        <Link to="/login" className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar