import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import filteredById from "../functions/filteredById";
import { products } from "../data/data";
import Slider from "react-slick";
import { Select } from "antd";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [rendered, setRendered] = useState(true);
  // const [productDiscountPrice, setProductDiscountPrice] = useState(0);
  useEffect(() => {
    setProduct(filteredById(products, id)[0]);
    // setProductDiscountPrice(product?.discountPrice());
  }, [id, rendered]);

  const settings = {
    customPaging: (i) =>
      product.images[i] ? (
        <a>
          <img src={product.images[i]} alt={product.productName} />
        </a>
      ) : null,
    dots: true,
    dotsClass: "slick-dots slick-thumb w-full !flex justify-evenly",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="my-container space-y-10 !py-4">
      {product && (
        <h2 className="font-bold text-3xl leading-120">
          {product.productName}{" "}
          {product.property[2].types[product.property[2].typeIndex]}
        </h2>
      )}
      {product && (
        <div className="flex flex-col items-start p-0 gap-30">
          <div className="flex flex-row w-full items-start p-0 gap-10">
            <div className="flex flex-col sticky top-5 w-max h-max items-center justify-center p-0 gap-5">
              <div className="slider-container p-3 shadow-menu-shadow rounded-3xl w-80 h-430">
                <Slider {...settings} className="h-full">
                  {product &&
                    product.images &&
                    product.images.slice(0, 3).map((image, index) => {
                      return (
                        <div key={index} className="py-10">
                          <img src={image} alt="" />
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
            <div className="flex w-full flex-col items-start p-0 gap-30">
              {product &&
                product.property &&
                product.property.map((prop, index) => {
                  return (
                    <div key={index} className="w-full">
                      <div className="flex flex-col gap-15">
                        <h4 className="text-base">{prop.name}</h4>
                        <ul className="flex flex-wrap gap-4">
                          <Select
                            defaultValue={prop.types[prop.typeIndex]}
                            size="large"
                            className="w-full !bg-medium-gray"
                            onChange={(value) => {
                              prop.typeIndex = value;
                              setRendered((prev) => !prev);
                            }}
                            options={prop.types.map((type, index) => {
                              return {
                                value: index,
                                label: type,
                              };
                            })}
                          />
                        </ul>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="flex w-full flex-col items-start p-0 gap-30">
              <div className="p-6 shadow rounded w-full">
                <div className="flex flex-col justify-between gap-5">
                  <div className="flex justify-start gap-2.5">
                    <p className="text-dark-gray text-base font-medium leading-152">
                      Naxi:
                    </p>
                    <b className="text-dark-gray text-2xl leading-normal font-bold">
                      {product?.discountPrice()} $
                    </b>
                  </div>
                  <div className="flex justify-start items-center">
                    <button
                      onClick={() => {
                        product.saved = !product.saved;
                        setRendered((prev) => !prev);
                      }}
                      className="flex justify-center items-center gap-2.5"
                    >
                      <span className="text-sm font-normal text-dark-gray">
                        Sevimlilarga
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 22 21"
                          fill={product?.saved ? "#00C65E" : "none"}
                        >
                          <path
                            d="M11.62 19.2998C11.28 19.4198 10.72 19.4198 10.38 19.2998C7.48 18.3098 1 14.1798 1 7.17984C1 4.08984 3.49 1.58984 6.56 1.58984C8.38 1.58984 9.99 2.46984 11 3.82984C12.01 2.46984 13.63 1.58984 15.44 1.58984C18.51 1.58984 21 4.08984 21 7.17984C21 14.1798 14.52 18.3098 11.62 19.2998Z"
                            stroke="#00C65E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
