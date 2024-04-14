import React from "react";
import { createPortal } from "react-dom";

const ImageViewerModal = ({ images, setOpenModal, index, setImageIndex }) => {
  return createPortal(
    <div className="fixed flex justify-center items-center w-full h-full bg-black/50 left-0 top-0 z-[9999]">
      <div
        onClick={setOpenModal}
        className="relative w-full h-full flex justify-center items-center"
      ></div>
      <div className="p-5 bg-white rounded-2xl flex flex-col justify-center items-center absolute top-1/2 -translate-y-1/2 w-[calc(100vw-50%)] gap-4">
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
        className="text-white absolute left-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM11.79 13C12.08 13.29 12.08 13.77 11.79 14.06C11.64 14.21 11.45 14.28 11.26 14.28C11.07 14.28 10.88 14.21 10.73 14.06L7.2 10.53C6.91 10.24 6.91 9.76 7.2 9.47L10.73 5.94C11.02 5.65 11.5 5.65 11.79 5.94C12.08 6.23 12.08 6.71 11.79 7L8.79 10L11.79 13Z"
            fill="currentColor"
          />
        </svg>
      </button>
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
        className="text-white absolute right-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>,
    document.body
  );
};

export default ImageViewerModal;
