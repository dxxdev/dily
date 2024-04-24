import React, { useState } from "react";
import { createPortal } from "react-dom";

const SendCommentModal = ({ openModal, openSendedModal }) => {
  const [rating, setRating] = useState(0);
  const ratingBarNums = [1, 2, 3, 4, 5];
  return createPortal(
    <div className="fixed flex justify-center items-center w-full h-full bg-black/50 left-0 top-0 z-[9999]">
      <div onClick={openModal} className="relative w-full h-full"></div>
      <div className="absolute bg-white w-full shadow-product-card-shadow max-w-3xl rounded-[10px]">
        <div className="relative px-60 pt-30 pb-70 flex flex-col justify-between items-center gap-30">
          <button
            onClick={openModal}
            className="absolute icon-btn top-0 right-0 translate-x-full -translate-y-full"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.3166 12.5735C0.751236 13.179 0.751237 14.1608 1.3166 14.7663L1.68355 15.1593C2.24892 15.7648 3.16556 15.7648 3.73093 15.1593L8.00019 10.5868L12.2695 15.1593C12.8348 15.7648 13.7515 15.7648 14.3168 15.1593L14.6838 14.7663C15.2491 14.1608 15.2491 13.179 14.6838 12.5735L10.4145 8.00104L14.6838 3.4286C15.2491 2.82308 15.2491 1.84134 14.6838 1.23582L14.3168 0.842811C13.7515 0.237293 12.8348 0.237292 12.2694 0.84281L8.00019 5.41526L3.73093 0.84281C3.16557 0.237292 2.24893 0.237293 1.68356 0.842811L1.31661 1.23582C0.751242 1.84134 0.751242 2.82308 1.31661 3.4286L5.58586 8.00104L1.3166 12.5735Z"
                fill="#00C65E"
              />
            </svg>
          </button>
          <div className="flex flex-col justify-center items-center gap-5">
            <h3 className="text-3xl font-bold leading-120 text-dark-gray">
              Izoh qoldiring
            </h3>
            <div className="flex gap-1 items-center">
              {ratingBarNums &&
                ratingBarNums.map((num, index) => {
                  return (
                    <svg
                      key={index}
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                      onClick={() => setRating(num)}
                    >
                      <path
                        className={`${
                          rating >= num
                            ? "fill-bright-green"
                            : "fill-bright-green/50"
                        }`}
                        d="M10.6913 1.06712C11.163 -0.355708 13.2114 -0.355708 13.6815 1.06712L15.3636 6.15286C15.4664 6.46259 15.6662 6.73246 15.9344 6.92391C16.2027 7.11536 16.5256 7.21858 16.8571 7.21882H22.2998C23.8232 7.21882 24.4552 9.13447 23.2242 10.015L18.8223 13.1573C18.5535 13.3489 18.3534 13.6193 18.2506 13.9295C18.1478 14.2398 18.1476 14.5741 18.25 14.8845L19.9322 19.9702C20.4038 21.3931 18.7453 22.578 17.5111 21.6974L13.1092 18.5551C12.8407 18.3636 12.5174 18.2604 12.1856 18.2604C11.8538 18.2604 11.5305 18.3636 11.262 18.5551L6.86009 21.6974C5.62755 22.578 3.97054 21.3931 4.44061 19.9702L6.12277 14.8845C6.22523 14.5741 6.22504 14.2398 6.12224 13.9295C6.01944 13.6193 5.8193 13.3489 5.55052 13.1573L1.15018 10.0166C-0.0807888 9.13601 0.552773 7.22037 2.07458 7.22037H7.51566C7.84745 7.22045 8.17076 7.11738 8.43931 6.92591C8.70786 6.73444 8.90788 6.46438 9.01074 6.1544L10.6929 1.06867L10.6913 1.06712Z"
                        fill="#00C65E"
                      />
                    </svg>
                  );
                })}
            </div>
          </div>
          <div className="flex justify-between w-full items-center gap-30">
            <div className="flex flex-col w-full justify-start items-start gap-1">
              <label
                htmlFor="userName"
                className="text-base font-bold tracking-wide"
              >
                Ism:
              </label>
              <input
                type="text"
                id="userName"
                className="px-4 py-3 border w-full outline-none border-medium-gray rounded-[10px] text-sm leading-normal font-normal text-dark-gray"
                placeholder="Ismingiz"
              />
            </div>
            <div className="flex flex-col w-full justify-start items-start gap-1">
              <label
                htmlFor="userEmail"
                className="text-base font-bold tracking-wide"
              >
                Email:
              </label>
              <input
                type="email"
                id="userEmail"
                className="px-4 py-3 border w-full outline-none border-medium-gray rounded-[10px] text-sm leading-normal font-normal text-dark-gray"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-col w-full justify-between items-start gap-30">
            <div className="flex flex-col w-full justify-start items-start gap-1">
              <label
                htmlFor="userEmail"
                className="text-base font-bold tracking-wide"
              >
                Fikr:
              </label>
              <textarea
                type="email"
                id="userEmail"
                className="px-4 py-3 border outline-none border-medium-gray rounded-[10px] text-sm leading-normal font-normal text-dark-gray w-full resize-none"
                rows={5}
                placeholder="Fikr"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-start items-start w-full">
            <button
              onClick={() => {
                openModal();
                openSendedModal();
              }}
              className="btn text-white"
            >
              Yuborish
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SendCommentModal;
