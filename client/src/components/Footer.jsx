import React from 'react'
import logo from '../assets/logo/logo.png'
import { Link } from 'react-router-dom'
import instagram_icon from '../assets/other-icon/instagram-icon.svg'
import wkontakte_icon from '../assets/other-icon/wkontakte-icon.svg'
import facbook_icon from '../assets/other-icon/facbook-icon.svg'
import arrow_down from '../assets/other-icon/arrow_down.svg'
const Footer = () => {
  const scrolTo = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  return (
    <footer className='bg-white mt-10'>
      <div className="border-b-2 py-5">
        <div className="my-container flex items-center justify-between">
          <Link to='/'>
            <img src={logo} className='w-20 h-10' alt="footer logo" />
          </Link>
          <div className='flex items-center justify-between gap-5'>
            <p className='text-xs font-open-sans'>Bizning Ijtimoiy Tarmoda ham Kuzating :</p>
            <a href="">
              <img src={instagram_icon} alt="instagram_icon" />
            </a>
            <a href="">
              <img src={facbook_icon} alt="facbook_icon" />
            </a>
            <a href="">
              <img src={wkontakte_icon} alt="wkontakte_icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="my-container relative">
        <button onClick={scrolTo} className='bg-bright-green absolute -top-36 -left-20 w-10 h-10 flex items-center justify-center rounded-full'>
          <img src={arrow_down} alt="arrow down" className='-rotate-180' />
        </button>
        <div className="w-4/5 py-10">
          <div className="grid grid-cols-4 w-full mb-1">
            <p className='text-sm font-bold text-dark-gray font-open-sans'>Internet-magazin dily.uz</p>
            <p className='text-sm font-bold text-dark-gray font-open-sans'>Markaziy servis hizmati</p>
            <p className='text-sm font-bold text-dark-gray font-open-sans'>Elektronika</p>
            <p className='text-sm font-bold text-dark-gray font-open-sans'>Categoriyalar</p>
          </div>
          <div className="grid grid-cols-4 w-full">
            <Link to='/' className='text-xs font-open-sans text-dark-gray font-normal tracking-widest'>Home</Link>
            <Link to='/' className='text-xs font-open-sans text-dark-gray font-normal tracking-widest'>Servis</Link>
            <Link to='/' className='text-xs font-open-sans text-dark-gray font-normal tracking-widest'>Elektronika</Link>
            <Link to='/' className='text-xs font-open-sans text-dark-gray font-normal tracking-widest'>Categoriyalar</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer