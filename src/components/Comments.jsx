import React from "react";
import RatingBar from "./RatingBar";

const Comments = ({ comments, productName }) => {
  return (
    <div className="flex flex-col justify-start w-full items-start gap-10">
      <h4 className="font-bold text-dark-gray text-2xl leading-normal">
        {productName} uchun qoldirilgan izohlar
      </h4>
      <div className="flex justify-between w-full items-stretch">
        <ul className="flex flex-col gap-10 w-full max-w-3xl">
          {comments &&
            comments.map((comment, index) => {
              return (
                <li
                  className="shadow-product-card-shadow w-full rounded-[10px] p-5"
                  key={index}
                >
                  <div className="flex flex-col w-full justify-start items-stretch gap-5">
                    <div className="flex flex-col w-full justify-start items-stretch gap-2.5">
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-4">
                          <div className="rounded-full w-6 aspect-square">
                            <img src={comment.avatar} alt="" />
                          </div>
                          <div>
                            <h5 className="text-base font-bold leading-normal text-dark-gray tracking-wide">
                              {comment.who}
                            </h5>
                          </div>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <div>
                            <p className="text-sm font-medium leading-normal text-bright-green">
                              {comment.rating}
                            </p>
                          </div>
                          <RatingBar rating={comment.rating} />
                        </div>
                      </div>
                      <p className="text-sm leading-120 text-dark-gray font-medium">
                        {comment.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-base font-medium leading-152 text-dark-gray">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
