import React from 'react'
import { Link } from 'react-router-dom'

const ServisesCosts = () => {
  return (
    <section className='py-100 serviseCoast-bg'>
        <div className='my-container '>
        <h2 className='font-bold text-[32px] leading-38 text-#00C65E text-center mb-4'>Ta'mirlash narxini Internetda bilib oling</h2>
        <h6 className='font-bold text-lg leading-7 text-dark-gray mb-[30px] text-center'>Va 5% chegirmaga ega bo'ling</h6>
        <div className='flex items-center justify-center'>
            <Link to="/qaysidir_sahifaga_otishini_kimdir_yozib_qoyishi_kerak" className='text-sm leading-4 py-3 px-100 rounded-10 bg-#00C65E text-white'>Bilmoq</Link>
        </div>
        </div>
    </section>
  )
}

export default ServisesCosts