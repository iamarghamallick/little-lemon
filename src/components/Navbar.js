import React from "react";
import Navlogo from "../assets/nav-logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-screen px-20 py-4">
            <div>
                <img src={Navlogo} alt="little-lemon-logo" className="w-[10rem]" />
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-6">
                    <li className="font-semibold hover:bg-gray-200 p-1 rounded-lg"><Link to='/'>Home</Link></li>
                    <li className="font-semibold hover:bg-gray-200 p-1 rounded-lg"><Link to='/about'>About</Link></li>
                    <li className="font-semibold hover:bg-gray-200 p-1 rounded-lg"><Link to='/menu'>Menu</Link></li>
                    <li className="font-semibold hover:bg-gray-200 p-1 rounded-lg"><Link to='/reservations'>Reservations</Link></li>
                    <li className="font-semibold hover:bg-gray-200 p-1 rounded-lg"><Link to='/orderonline'>Order Online</Link></li>
                    <li className="font-semibold hover:bg-gray-200 p-1 rounded-lg"><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar