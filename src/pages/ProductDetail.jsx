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
    <div className="my-container space-y-5 py-14">
      {product && (
        <h2 className="font-bold text-3xl leading-120">
          {product.productName}{" "}
          {product.property[2].types[product.property[2].typeIndex]}{" "}
          {product?.discountPrice()}
        </h2>
      )}
      {product && (
        <div className="flex flex-col items-start p-0 gap-30">
          <div className="flex flex-row w-full items-start p-0 gap-10">
            <div className="flex flex-col sticky top-5 w-full h-max items-center justify-center p-0 gap-5">
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
                            }}
                            options={prop.types.map((type, index) => {
                              return {
                                value: index,
                                label: type,
                              };
                            })}
                          />
                          {/* {prop.types &&
                            prop.types.map((type, index) => {
                              return (
                                <li
                                  key={index}
                                  className={`px-4 cursor-pointer py-3 rounded-[10px] shadow-product-card-shadow w-full ${
                                    index == prop.typeIndex
                                      ? "bg-bright-green text-white"
                                      : "bg-transparent text-dark-gray"
                                  }`}
                                  onClick={() => {
                                    prop.typeIndex = index;
                                    setRendered((prev) => !prev);
                                  }}
                                >
                                  {type}
                                </li>
                              );
                            })} */}
                        </ul>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="flex w-full flex-col items-start p-0 gap-30"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
