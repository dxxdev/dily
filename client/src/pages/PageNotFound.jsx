import React from 'react'
import { Link } from 'react-router-dom'
import page_not_found_img from '../assets/other-icon/page-not-found-img.jpg'
import greenLine from '../assets/other-icon/line-green.svg'
import orangeLine from '../assets/other-icon/line-orange.svg'
const PageNotFoun = ({ one }) => {
    return (
        <div className='fixed w-full h-full bg-white top-0 z-[9999] pt-10'>
            <div className="my-container flex flex-col items-center justify-evenly gap-20 relative">
                <img className='absolute bottom-0 right-0 w-32' src={greenLine} alt="" />
                <img className='absolute top-0 left-20 w-40' src={orangeLine} alt="" />
                <img className='absolute top-0 right-0 w-10' src={greenLine} alt="" />
                <img className='absolute bottom-0 w-20 rotate-90 left-0' src={orangeLine} alt="" />
                <img className='absolute bottom-0 left-1/4 w-40' src={greenLine} alt="" />
                <img className='absolute top-20 right-0 w-40' src={orangeLine} alt="" />
                <h1 className='text-2xl text-bright-green font-bold font-open-sans'>Sahifa Topilmadi</h1>
                <img src={page_not_found_img} alt="page not found img" className='w-1/2' />
                <Link to='/' className='px-10 py-3 rounded-xl bg-bright-green text-white'>Bosh sahifaga o'tish</Link>
            </div>
        </div>
    )
}

export default PageNotFoun