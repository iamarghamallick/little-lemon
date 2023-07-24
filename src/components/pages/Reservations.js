import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCalendarDate, BsClockFill, BsPeopleFill } from 'react-icons/bs'
import { FaGlassCheers } from 'react-icons/fa'
import GalleryImg1 from '../../assets/food/food2.jpeg'
import GalleryImg2 from '../../assets/food/food3.jpeg'
import GalleryImg3 from '../../assets/food/food4.webp'

const Reservations = () => {
    const [reservationData, setReservationData] = useState({ indoor: "", outdoor: "", date: "", occasion: "", diner: "", time: "" })
    const [reservationConfirmedData, setReservationConfirmedData] = useState({ ...reservationData, firstname: "", lastname: "", privacy: "", email: "", phone: "", comment: "" })
    const [proceedToReserve, setProceedToReserve] = useState(false)
    const handleChange = (e) => {
        setReservationData({ ...reservationData, [e.target.name]: e.target.value })
        setReservationConfirmedData({ ...reservationConfirmedData, [e.target.name]: e.target.value })
    }
    const handleReservation = () => {
        console.log(reservationData)
        // todo - data validation
        setProceedToReserve(true)
    }
    const handleReservationConfirm = () => {
        console.log(reservationConfirmedData)
        // todo - data validation
    }
    return (
        <>
            <div className='flex justify-center bg-[#495E57]'>
                <div className='bg-[#495E57] min-w-[320px] md:min-w-[768px] lg:min-w-[1024px] py-2'>
                    <h1 className='text-[#F4CE14] text-4xl font-serif py-2'>Reservation</h1>
                    {!proceedToReserve && <div className="flex flex-col gap-8 md:flex-row md:gap-0 justify-between py-5 text-white">
                        <div className="flex flex-col w-[320px] gap-2">
                            <span className='flex items-center gap-8'>
                                <label htmlFor="seating" className='font-semibold text-lg'>Indoor seating</label>
                                <input type="checkbox" name="indoor" id="seating" className='w-4 h-4' onChange={handleChange} />
                            </span>
                            <span className='flex flex-col gap-1'>
                                <label htmlFor="date">Date</label>
                                <input type="date" name="date" id="date" onChange={handleChange} />
                            </span>
                            <span className='flex flex-col gap-1'>
                                <label htmlFor="occasion">Occasion</label>
                                <select name="occasion" id="occasion" onChange={handleChange}>
                                    <option defaultValue="occasion">Occasion</option>
                                    <option value="birthday">Birth Day</option>
                                </select>
                            </span>
                        </div>
                        <div className="flex flex-col w-[320px] gap-2">
                            <span className='flex items-center gap-8'>
                                <label htmlFor="seating" className='font-semibold text-lg'>Outdoor seating</label>
                                <input type="checkbox" name="outdoor" id="seating" className='w-4 h-4' onChange={handleChange} />
                            </span>
                            <span className='flex flex-col gap-1'>
                                <label htmlFor="diner">Number of Diner</label>
                                <select name="diner" id="diner" onChange={handleChange}>
                                    <option defaultValue="No. of Diner">No. of Diner</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="4">4</option>
                                    <option value="6">6</option>
                                    <option value="8">8</option>
                                    <option value="10">10</option>
                                </select>
                            </span>
                            <span className='flex flex-col gap-1'>
                                <label htmlFor="time">Time</label>
                                <input type="time" name="time" id="time" onChange={handleChange} />
                            </span>
                        </div>
                    </div>}
                    {proceedToReserve && <div className="flex flex-col gap-8 md:flex-row md:gap-0 justify-between py-5 text-white">
                        <div className="flex flex-col w-[320px] gap-2">
                            <span className='flex flex-col gap-1'>
                                <label htmlFor="name">First Name</label>
                                <input type="text" placeholder="Your first name" name="firstname" id="firstname" onChange={handleChange} />
                            </span>
                            <span className='flex flex-col gap-1'>
                                <label htmlFor="name">Last Name</label>
                                <input type="text" placeholder="Your last name" name="lastname" id="lastname" onChange={handleChange} />
                            </span>
                            <span className='flex flex-col gap-1'>
                                <div className='grid grid-cols-2 gap-2 py-4'>
                                    <div className='w-full flex flex-col justify-center items-center'>
                                        <BsCalendarDate size={30} color='#F4CE14' />
                                        <span className='font-semibold'>{reservationData.date}</span>
                                    </div>
                                    <div className='w-full flex flex-col justify-center items-center'>
                                        <BsPeopleFill size={30} color='#F4CE14' />
                                        <span className='font-semibold'>{reservationData.diner} Diners</span>
                                    </div>
                                    <div className='w-full flex flex-col justify-center items-center'>
                                        <BsClockFill size={30} color='#F4CE14' />
                                        <span className='font-semibold'>{reservationData.time}</span>
                                    </div>
                                    <div className='w-full flex flex-col justify-center items-center'>
                                        <FaGlassCheers size={30} color='#F4CE14' />
                                        <span className='font-semibold'>{reservationData.occasion.charAt(0).toUpperCase() + reservationData.occasion.slice(1)}</span>
                                    </div>
                                </div>
                            </span>
                            <span className='flex flex-col gap-1'>
                                <div className='text-center font-semibold'>{reservationData.indoor === "on" ? "Indoor Seating" : "Outdoor Seating"}</div>
                            </span>
                            <span className='flex items-center justify-center gap-1'>
                                <input type="checkbox" name="privacy" id="privacy" className='w-4 h-4' onChange={handleChange} />
                                <label htmlFor="privacy" className='font-semibold text-lg'>You agree to our <Link to='/' className='text-blue-100 underline'>Terms</Link>.</label>
                            </span>
                        </div>
                        <div className="flex flex-col w-[320px] gap-2">
                            <span className='flex flex-col gap-1'>
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder="you@email.com" name="email" id="email" onChange={handleChange} />
                            </span>
                            <span className='flex flex-col gap-1'>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" placeholder="Your phone number" name="phone" id="phone" onChange={handleChange} />
                            </span>
                            <span className='flex flex-col gap-1'>
                                <label htmlFor="comment">Special Requests</label>
                                <textarea className='resize-none' type="text" placeholder="Comment" name="comment" id="comment" rows={6} onChange={handleChange}></textarea>
                            </span>
                        </div>
                    </div>}
                </div>
            </div>
            <div className='w-full flex flex-col gap-5 md:flex-row md:gap-10 items-center justify-center py-5'>
                <img src={GalleryImg1} alt="" srcSet="" className='w-[250px] rounded-2xl shadow-2xl shadow-[#495E57]' />
                <img src={GalleryImg2} alt="" srcSet="" className='w-[250px] rounded-2xl shadow-2xl shadow-[#495E57]' />
                <img src={GalleryImg3} alt="" srcSet="" className='w-[250px] rounded-2xl shadow-2xl shadow-[#495E57]' />
            </div>
            {!proceedToReserve && <div className='w-full flex justify-center py-8'>
                <button type="button" className='bg-[#F4CE14] rounded-xl p-2 px-4 font-semibold hover:bg-[#F4CE50]' onClick={handleReservation}>Reserve a Table</button>
            </div>}
            {proceedToReserve && <div className='w-full flex justify-center py-8'>
                <button type="button" className='bg-[#F4CE14] rounded-xl p-2 px-4 font-semibold hover:bg-[#F4CE50]' onClick={handleReservationConfirm}>Confirm Reservation</button>
            </div>}
        </>
    )
}

export default Reservations