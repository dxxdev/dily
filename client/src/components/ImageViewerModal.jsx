import React from "react";
import { createPortal } from "react-dom";

const ImageViewerModal = ({ images, setOpenModal, index, setImageIndex }) => {
  return createPortal(
    <div className="fixed flex justify-center items-center w-full h-full bg-black/50 left-0 top-0 z-[9999]">
      <div
        onClick={setOpenModal}
        className="relative w-full h-full flex justify-center items-center"
      ></div>
      <div className="p-5 bg-white rounded-2xl flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-[calc(100vw-30%)] gap-4">
        <button
          aria-label="back image button"
          onClick={() =>
            setImageIndex((prev) => {
              if (prev == 0) {
                return prev;
              } else {
                return prev - 1;
              }
            })
          }
        >
          <svg
            width="20"
            height="35"
            viewBox="0 0 20 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.764468 19.2347L15.5395 34.0103C16.5596 35.0304 18.2136 35.0304 19.2337 34.0103C20.2538 32.9902 20.2537 31.3363 19.2336 30.3162L6.30537 17.388L19.2349 4.45839C20.255 3.43829 20.255 1.78435 19.2349 0.764263C18.2148 -0.255825 16.5609 -0.255863 15.5408 0.764232L0.824487 15.4805C0.803822 15.4999 0.784617 15.5204 0.764436 15.5406C-0.126842 16.4332 -0.239223 17.8117 0.429806 18.825C0.525511 18.9699 0.636916 19.1072 0.764468 19.2347Z"
              fill="#00C65E"
            />
          </svg>
        </button>
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src={images[index]}
            onClick={setOpenModal}
            className="h-550"
            alt=""
          />
          <ul className="flex gap-2">
            {images.map((image, id) => {
              return (
                <li
                  onClick={() => setImageIndex(id)}
                  key={id}
                  className="cursor-pointer p-1 rounded-xl border-2 border-medium-gray"
                >
                  <img src={image} alt="" className="h-16" />
                </li>
              );
            })}
          </ul>
        </div>
        <button
          aria-label="next image button"
          onClick={() =>
            setImageIndex((prev) => {
              if (prev == images.length - 1) {
                return prev;
              } else {
                return prev + 1;
              }
            })
          }
        >
          <svg
            width="20"
            height="35"
            viewBox="0 0 20 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.2355 19.2347L4.46047 34.0103C3.44038 35.0304 1.78644 35.0304 0.766343 34.0103C-0.253755 32.9902 -0.253715 31.3363 0.766373 30.3162L13.6946 17.388L0.765053 4.45839C-0.255045 3.43829 -0.255005 1.78435 0.765083 0.764263C1.78517 -0.255825 3.43911 -0.255863 4.45921 0.764232L19.1755 15.4805C19.1962 15.4999 19.2154 15.5204 19.2356 15.5406C20.1268 16.4332 20.2392 17.8117 19.5702 18.825C19.4745 18.9699 19.3631 19.1072 19.2355 19.2347Z"
              fill="#00C65E"
            />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ImageViewerModal;
