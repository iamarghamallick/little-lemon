import React from 'react'
import { Link } from 'react-router-dom'
import Food7 from '../../assets/food/food7.webp'

const Hero = () => {
    return (
        <div className='w-full px-5 lg:px-20 bg-[#495E57] py-4 flex flex-col md:flex-row justify-center items-center'>
            <div className='md:w-1/2 p-3 lg:px-20 flex flex-col justify-center items-center md:items-start'>
                <h1 className='text-[#F4CE14] text-4xl font-serif'>Little Lemon</h1>
                <h4 className='text-2xl text-white font-semibold'>Kolkata</h4>
                <p className='text-white my-3 md:my-2 font-semibold text-xl md:text-lg text-center md:text-left'>We are a family owned Mediterratian resturant, focused on traditional recipes served with a mordern twist!</p>
                <Link to='/reservation'><button type="button" className='bg-[#F4CE14] rounded-xl p-2 px-4 font-semibold hover:bg-[#F4CE50]'>Reserve a Table</button></Link>
            </div>
            <div className='md:w-1/2 p-3 xl:p-10 xl:px-10 flex justify-center items-center'>
                <img src={Food7} alt="food" className='w-full rounded-xl' />
            </div>
        </div>
    )
}

export default Hero