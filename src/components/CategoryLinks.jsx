import React from "react";
import Slider from "react-slick";
import filteredCategoryMenuItems from "../functions/filteredCategoryMenuItems";
import filteredCategory from "../functions/filteredCategory";
import { products } from "../data/data";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const CategoryLinks = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleBeforeChange = (current, next) => {
    setCurrentSlide(next);
  };

  const CustomNextArrow = (props) => (
    <div
      className="w-8 h-8 bg-bright-green rounded-full flex justify-center items-center cursor-pointer top-1/2 right-0 absolute"
      onClick={props.onClick}
    >
      <img className="rotate-180" src={arrow} alt="" />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
      className="w-8 h-8 bg-bright-green rounded-full flex justify-center items-center cursor-pointer top-1/2 left-0 absolute"
      onClick={props.onClick}
    >
      <img src={arrow} alt="" />
    </div>
  );
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(filteredCategoryMenuItems(filteredCategory(products)));
  return (
    <div className="my-container flex justify-start flex-col items-start gap-10">
      <h3 className="font-bold text-2xl leading-120">Siz qidiryapsiz:</h3>
      <div className="overflow-hidden w-full !pb-14">
        <Slider {...settings}>
          {filteredCategoryMenuItems(filteredCategory(products)).map(
            (category) => {
              return (
                <div
                  key={category.id}
                  className="!flex flex-col justify-center items-center"
                >
                  <Link
                    to={`/products/${category.name}`}
                    className="!flex flex-col justify-center items-center"
                  >
                    <div className="w-95 h-95 rounded-full shadow-product-card-shadow p-3">
                      <img src={category.icon} alt="" />
                    </div>
                    <h3 className="font-bold text-base text-center leading-normal tracking-0.5 text-dark-gray">
                      {category.name}
                    </h3>
                  </Link>
                </div>
              );
            }
          )}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryLinks;
