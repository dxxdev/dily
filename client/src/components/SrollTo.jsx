import React, { useEffect, useState } from "react";
import arrow_down from "../assets/other-icon/arrow_down.svg";

const SrollTo = () => {
  const scrolTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [scrollCheck, setScrollCheck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollCheck(true);
      } else {
        setScrollCheck(false);
      }
    };

<<<<<<< HEAD
    setInterval(() => {
        if (window.scrollY > 100) {
            setscrolCkeck(true)
        } else {
            setscrolCkeck(false)
        }
    }, 1);
    return (

        <div>
            <button onClick={scrolTo} className={`${scrolCkeck ? "left-10" : "-left-10"} bg-bright-green fixed  bottom-10 w-10 h-10 flex items-center justify-center rounded-full transition-all`}>
                <img src={arrow_down} alt="arrow down" className='-rotate-180' />
            </button>
        </div>
    )
}
=======
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <button
        onClick={scrolTo}
        className={`${
          scrollCheck ? "block" : "hidden"
        } bg-bright-green fixed right-10 bottom-10 w-10 h-10 flex items-center justify-center rounded-full transition-all shadow-md z-[9999]`}
      >
        <img src={arrow_down} alt="arrow down" className="-rotate-180" />
      </button>
    </div>
  );
};
>>>>>>> 910e95bba6aab0b9f7334658abaf35ab60273666

export default SrollTo;
