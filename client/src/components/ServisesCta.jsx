import React from "react";
import { serviseData } from "../data/ServisesPageData";
const ServisesCta = () => {
  return (
    <section className="py-20">
      <div className="my-container">
        <ul className="flex items-center justify-center space-x-14">
          {serviseData.map((e, index) => {
            return (
              <li className="flex items-center" key={index}>
                <h6 className="font-bold text-lg leading-7 mr-2.5">
                  {e.title}
                </h6>
                <img src={e.img} alt={e.title} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServisesCta;
