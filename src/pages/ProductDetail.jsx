import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import filteredById from "../functions/filteredById";
import { products } from "../data/data";
import Slider from "react-slick";
import { Select } from "antd";
import filteredOriginalCategory from "../functions/filteredOriginalCategory";
import ProductCard from "../components/ProductCard";
import randomNumbersArr from "../functions/randomNumbersArr";
import ImageViewerModal from "../components/ImageViewerModal";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [rendered, setRendered] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [tabId, setTabId] = useState(0);
  const tabs = [
    "Tavsifi",
    "Xususiyatlar",
    "Aksessuarlar",
    "Sharhlar",
    "To'lov",
    "Yetkazib berish",
  ];
  useEffect(() => {
    setProduct(filteredById(products, id)[0]);
  }, [id, rendered]);

  const openImageViewer = () => {
    setOpenModal((prev) => !prev);
  };

  const settings = {
    customPaging: (i) =>
      product.images[i] ? (
        <a>
          <img
            src={product.images[i]}
            alt={product.productName}
            className="h-full w-max"
          />
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
      {/* Product name */}
      {product && (
        <h2 className="font-bold text-3xl leading-120">
          {product.productName}{" "}
          {product.property[2].types[product.property[2].typeIndex]}
        </h2>
      )}
      {product && (
        <div className="flex flex-col items-start p-0 gap-30">
          {/* Product overview section */}
          <div className="flex flex-row w-full items-start p-0 gap-10">
            {/* Product image view section */}
            <div className="flex flex-col sticky top-5 w-max h-max items-center justify-center p-0 gap-5">
              {/* Product images slider */}
              <div className="slider-container p-3 shadow-product-card-shadow rounded-3xl w-80 h-430">
                <Slider {...settings} className="h-full">
                  {product &&
                    product.images &&
                    product.images.slice(0, 3).map((image, index) => {
                      return (
                        <div
                          onClick={() => {
                            openImageViewer();
                            setImageIndex(index);
                          }}
                          key={index}
                          className="py-10 cursor-pointer"
                        >
                          <img src={image} alt="" className="h-full" />
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
            {/* Product properties section */}
            <div className="flex w-full flex-col items-start p-0 gap-30">
              {/* Product properties changer */}
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
            {/* Product price section */}
            <div className="flex w-full flex-col items-start p-0 gap-30">
              <div className="p-6 shadow space-y-10 rounded w-full">
                <div className="flex flex-col justify-between gap-5">
                  {/* Product price */}
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
                  <div className="flex justify-between items-center gap-5">
                    <button className="btn w-full text-sm">Sotib olish</button>
                    <button className="flex flex-col justify-center gap-1 items-center">
                      <svg
                        width="19.000000"
                        height="15.000000"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <path
                          id="Vector"
                          d="M18.12 6.7L16.08 1.91C16.03 1.79 15.94 1.69 15.83 1.61C15.72 1.54 15.59 1.5 15.46 1.5L13.42 1.5L13.42 0.13C13.42 -0.05 13.35 -0.22 13.22 -0.35C13.09 -0.48 12.92 -0.55 12.74 -0.55L-0.15 -0.55C-0.33 -0.55 -0.5 -0.48 -0.63 -0.35C-0.76 -0.22 -0.83 -0.05 -0.83 0.13L-0.83 11.75C-0.83 11.93 -0.76 12.1 -0.63 12.23C-0.5 12.36 -0.33 12.43 -0.15 12.43L1.3 12.43C1.46 13.01 1.8 13.52 2.27 13.89C2.75 14.25 3.33 14.45 3.92 14.45C4.52 14.45 5.1 14.25 5.57 13.89C6.04 13.52 6.38 13.01 6.54 12.43L10.8 12.43C10.96 13.01 11.3 13.52 11.77 13.89C12.25 14.25 12.83 14.45 13.42 14.45C14.02 14.45 14.6 14.25 15.07 13.89C15.54 13.52 15.88 13.01 16.04 12.43L17.49 12.43C17.67 12.43 17.84 12.36 17.97 12.23C18.1 12.1 18.17 11.93 18.17 11.75L18.17 6.97C18.17 6.87 18.15 6.78 18.12 6.7ZM3.92 13.11C3.65 13.11 3.39 13.03 3.17 12.88C2.94 12.74 2.77 12.52 2.67 12.27C2.56 12.02 2.54 11.75 2.59 11.48C2.64 11.22 2.77 10.97 2.96 10.78C3.15 10.59 3.39 10.46 3.66 10.41C3.92 10.35 4.19 10.38 4.44 10.49C4.69 10.59 4.9 10.76 5.05 10.99C5.2 11.21 5.28 11.48 5.28 11.75C5.28 12.11 5.13 12.46 4.88 12.71C4.63 12.97 4.28 13.11 3.92 13.11ZM13.42 13.11C13.15 13.11 12.89 13.03 12.67 12.88C12.44 12.74 12.27 12.52 12.17 12.27C12.06 12.02 12.04 11.75 12.09 11.48C12.14 11.22 12.27 10.97 12.46 10.78C12.65 10.59 12.89 10.46 13.16 10.41C13.42 10.35 13.69 10.38 13.94 10.49C14.19 10.59 14.4 10.76 14.55 10.99C14.7 11.21 14.78 11.48 14.78 11.75C14.78 12.11 14.63 12.46 14.38 12.71C14.13 12.97 13.78 13.11 13.42 13.11Z"
                          fill="#00C65E"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </svg>
                      <span className="text-xs w-max text-dark-gray">
                        Yetkazib berish
                      </span>
                    </button>
                  </div>
                </div>
                <button className="btn text-sm gap-5">
                  <span>Yetkazish va to'lash ma'lumotlari</span>
                  <span>
                    <svg
                      width="7.000000"
                      height="11.000000"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        id="Union"
                        d="M6.29 5.58L1.12 10.64C0.76 10.99 0.18 10.99 -0.18 10.64C-0.54 10.29 -0.54 9.72 -0.18 9.37L4.35 4.95L-0.18 0.52C-0.54 0.17 -0.54 -0.39 -0.18 -0.74C0.18 -1.09 0.76 -1.09 1.11 -0.74L6.27 4.3C6.27 4.3 6.28 4.31 6.29 4.32C6.6 4.62 6.64 5.09 6.4 5.44C6.37 5.49 6.33 5.54 6.29 5.58Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Tab section */}
          <div className="flex w-full shadow-product-card-shadow rounded-[10px] flex-col justify-center items-start gap-5">
            {/* Product properties tabs */}
            <ul className="flex justify-between w-full shadow-product-card-shadow items-center rounded-[10px] overflow-hidden">
              {tabs.map((tab, index) => {
                return (
                  <li className="w-full" key={index}>
                    <button
                      onClick={() => setTabId(index)}
                      className={`px-12 py-3 w-full transition-all text-sm leading-140 font-medium tracking-0.7 ${
                        tabId == index
                          ? "bg-bright-green text-white hover:bg-green-600"
                          : "bg-transparent text-dark-gray hover:bg-dark-gray/10"
                      }`}
                    >
                      {tab}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="py-30 px-5 space-y-6">
              {/* Product description */}
              {tabId == 0 && (
                <>
                  <h3 className="text-2xl font-bold leading-normal text-dark-gray">
                    Tavsif
                  </h3>
                  <ul className="space-y-4">
                    {product?.descriptions.map((desc, index) => {
                      return (
                        <li
                          className="text-sm leading-normal text-dark-gray"
                          key={index}
                        >
                          {desc}
                          <br />
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
              {/* Product properties */}
              {tabId == 1 && (
                <>
                  <h3 className="text-2xl font-bold leading-normal text-dark-gray">
                    Xususiyatlar
                  </h3>
                  <ul className="space-y-5">
                    {product.property.map((prop, index) => {
                      return (
                        <li key={index}>
                          {prop.name}: {prop.types[prop.typeIndex]}
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
              {tabId == 4 && (
                <>
                  <h3 className="text-2xl font-bold leading-normal text-dark-gray">
                    To'lov
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm leading-normal text-dark-gray">
                      Siz buyurtma uchun to’lovni Uzcard, Humo kartalari orqali
                      bajarishingiz mumkin.
                    </p>
                    <p className="text-sm leading-normal text-dark-gray">
                      Sizga qulay bo’lgan to’lov uslubini tanlashingiz mumkin:
                      <br />
                      - Uzcard, Humo kartalaridan buyurtma uchun onlayn to’lov
                      bajaring;
                      <br />
                      - Uzum Nasiya muddatli to’lovi orqali buyurtma
                      rasmiylashtiring;
                      <br />- qabul qilish vaqtida Uzcard, Humo, Visa,
                      Mastercard kartalari va naqd pul asosida to’lovni amalga
                      oshiring.
                    </p>
                  </div>
                </>
              )}
              {tabId == 5 && (
                <>
                  <h3 className="text-2xl font-bold leading-normal text-dark-gray">
                    Yetkazib berish
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm leading-normal font-normal tracking-wide text-dark-gray">
                      <b className="font-bold">
                        Buyurtmani tarqatish punktlarigacha yetkazib berish:
                      </b>{" "}
                      Dily.uz buyurtmani tarqatish punktlariga yetkazib berish
                      narxi mutlaqo bepul.
                    </p>
                    <p className="text-sm leading-normal font-normal tracking-wide text-dark-gray">
                      <b className="font-bold">
                        Kuryer orqali yetkazib berish:
                      </b>{" "}
                      Kuryer orqali yetkazib berish narxi 5$. Agar buyurtmaning
                      narxi 300$dan yuqori bo'lsa, mamlakatning istalgan
                      nuqtasiga bepul yetkazib beriladi.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Smilar product section */}
          <div className="flex justify-start items-start flex-col gap-30">
            <h3 className="text-[22px] font-bold leading-normal tracking-wide text-dark-gray">
              O'xshash mahsulotlar
            </h3>
            <ul className="flex gap-5">
              {filteredOriginalCategory(
                products,
                product.category.originalCategory
              ) &&
                randomNumbersArr(
                  filteredOriginalCategory(
                    products,
                    product.category.originalCategory
                  )
                ).map((product) => {
                  return (
                    <ProductCard
                      widthFixed={true}
                      key={product}
                      product={products[product]}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      )}
      {product && product.images && openModal && (
        <ImageViewerModal
          setOpenModal={openImageViewer}
          images={product.images}
          index={imageIndex}
          setImageIndex={setImageIndex}
        />
      )}
    </div>
  );
};

export default ProductDetail;
