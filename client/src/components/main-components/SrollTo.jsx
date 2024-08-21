import React, { useEffect, useState } from "react";
import arrow_down from "../../assets/other-icon/arrow_down.svg";

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
          scrollCheck ? "hidden sm:block" : "hidden sm:block"
        } bg-bright-green fixed right-10 bottom-10 w-10 h-10 flex items-center justify-center rounded-full transition-all shadow-md z-[9999]`}
      >
        <img src={arrow_down} alt="arrow down" className="-rotate-180" />
      </button>
    </div>
  );
};

export default SrollTo;
