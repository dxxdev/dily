import React, { useState } from 'react'
import arrow_down from '../assets/other-icon/arrow_down.svg'

const SrollTo = () => {
    const scrolTo = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }


    const [scrolCkeck, setscrolCkeck] = useState(false)

    setInterval(() => {
        if (window.scrollY > 200) {
            setscrolCkeck(true)
        } else {
            setscrolCkeck(false)
        }
    }, 1);

    return (

        <div>
            <button onClick={scrolTo} className={`${!scrolCkeck ? "-left-40" : "left-20"} bg-bright-green fixed left-10 bottom-10 w-10 h-10 flex items-center justify-center rounded-full transition-all`}>
                <img src={arrow_down} alt="arrow down" className='-rotate-180' />
            </button>
        </div>
    )
}

export default SrollTo