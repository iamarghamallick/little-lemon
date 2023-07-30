import React from 'react'
import { Link } from 'react-router-dom'
import Food4 from '../../assets/food/food4.webp'
import Food2 from '../../assets/food/food2.jpeg'
import Food3 from '../../assets/food/food3.jpeg'
import { MdDeliveryDining } from 'react-icons/md'

const Highlights = () => {
    return (
        <div className='w-full px-5 lg:px-20 py-1 mb-10'>
            <div className='flex flex-col md:flex-row justify-around items-center py-2 lg:py-10'>
                <h1 className='text-2xl font-semibold font-serif mb-4 md:mb-0'>This weeks special!</h1>
                <button className='bg-[#F4CE14] rounded-xl p-2 px-4 font-semibold hover:bg-[#F4CE50] mb-2'>Online Menu</button>
            </div>
            <div className="card-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card bg-gray-100 rounded-xl">
                    <img src={Food4} alt="food" className='h-[320px] w-full rounded-xl' />
                    <div className='p-5'>
                        <div className='flex justify-between'><span className='text-xl font-semibold font-serif'>Greek Salad</span><span className='text-red-500'>$12.99</span></div>
                        <p className='py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia natus corporis ipsa eos animi inventore expedita explicabo sint placeat quod asperiores, officia impedit dolor.</p>
                        <Link to='/orderonline'><button className='font-semibold p-1 px-3 rounded-xl hover:bg-gray-50 flex items-center'><span>Order a delivery &nbsp;</span> <MdDeliveryDining size={30} /></button></Link>
                    </div>
                </div>
                <div className="card bg-gray-100 rounded-xl">
                    <img src={Food2} alt="food" className='h-[320px] w-full rounded-xl' />
                    <div className='p-5'>
                        <div className='flex justify-between'><span className='text-xl font-semibold font-serif'>Greek Salad</span><span className='text-red-500'>$12.99</span></div>
                        <p className='py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia natus corporis ipsa eos animi inventore expedita explicabo sint placeat quod asperiores, officia impedit dolor.</p>
                        <Link to='/orderonline'><button className='font-semibold p-1 px-3 rounded-xl hover:bg-gray-50 flex items-center'><span>Order a delivery &nbsp;</span> <MdDeliveryDining size={30} /></button></Link>
                    </div>
                </div>
                <div className="card bg-gray-100 rounded-xl">
                    <img src={Food3} alt="food" className='h-[320px] w-full rounded-xl' />
                    <div className='p-5'>
                        <div className='flex justify-between'><span className='text-xl font-semibold font-serif'>Greek Salad</span><span className='text-red-500'>$12.99</span></div>
                        <p className='py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia natus corporis ipsa eos animi inventore expedita explicabo sint placeat quod asperiores, officia impedit dolor.</p>
                        <Link to='/orderonline'><button className='font-semibold p-1 px-3 rounded-xl hover:bg-gray-50 flex items-center'><span>Order a delivery &nbsp;</span> <MdDeliveryDining size={30} /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights