import React from "react";
import { createPortal } from "react-dom";

const SendedCommentModal = ({ openSendedModal }) => {
  return createPortal(
    <div className="fixed flex justify-center items-center w-full h-full bg-black/50 left-0 top-0 z-[9999]">
      <div onClick={openSendedModal} className="relative w-full h-full"></div>
      <div className="absolute bg-white w-full shadow-product-card-shadow max-w-xl rounded-[10px]">
        <div className="relative px-60 py-30 flex flex-col justify-between items-center gap-30">
          <button
            onClick={openSendedModal}
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
            <h3 className="text-3xl text-center font-bold leading-120 text-dark-gray">
              Fikringiz uchun tashakkur! <br /> Tekshiruvdan so'ng e'lon qilamiz
            </h3>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SendedCommentModal;
