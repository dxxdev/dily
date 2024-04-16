import React from "react";

const RatingBar = ({ rating }) => {
  return (
    <div className="flex gap-1">
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${rating >= 1 ? "block" : "hidden"}`}
      >
        <path
          d="M5.34121 0.635294C5.55811 -0.0190562 6.50019 -0.0190562 6.71637 0.635294L7.48998 2.97419C7.53724 3.11663 7.62912 3.24074 7.75248 3.32879C7.87584 3.41683 8.02437 3.46431 8.17683 3.46442H10.6799C11.3805 3.46442 11.6711 4.34541 11.105 4.75038L9.08059 6.19549C8.95697 6.28361 8.86493 6.40793 8.81765 6.55063C8.77038 6.69332 8.77029 6.84706 8.81741 6.98981L9.59103 9.3287C9.80793 9.98305 9.04516 10.528 8.4776 10.123L6.45319 8.6779C6.32971 8.5898 6.18102 8.54236 6.02843 8.54236C5.87583 8.54236 5.72715 8.5898 5.60366 8.6779L3.57926 10.123C3.01242 10.528 2.25038 9.98305 2.46655 9.3287L3.24017 6.98981C3.28729 6.84706 3.2872 6.69332 3.23993 6.55063C3.19265 6.40793 3.1006 6.28361 2.97699 6.19549L0.953308 4.75109C0.387196 4.34612 0.678567 3.46513 1.37843 3.46513H3.88075C4.03334 3.46517 4.18202 3.41776 4.30553 3.32971C4.42903 3.24165 4.52102 3.11745 4.56832 2.9749L5.34194 0.636004L5.34121 0.635294Z"
          fill="#00C65E"
        />
      </svg>
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${rating >= 2 ? "block" : "hidden"}`}
      >
        <path
          d="M5.34121 0.635294C5.55811 -0.0190562 6.50019 -0.0190562 6.71637 0.635294L7.48998 2.97419C7.53724 3.11663 7.62912 3.24074 7.75248 3.32879C7.87584 3.41683 8.02437 3.46431 8.17683 3.46442H10.6799C11.3805 3.46442 11.6711 4.34541 11.105 4.75038L9.08059 6.19549C8.95697 6.28361 8.86493 6.40793 8.81765 6.55063C8.77038 6.69332 8.77029 6.84706 8.81741 6.98981L9.59103 9.3287C9.80793 9.98305 9.04516 10.528 8.4776 10.123L6.45319 8.6779C6.32971 8.5898 6.18102 8.54236 6.02843 8.54236C5.87583 8.54236 5.72715 8.5898 5.60366 8.6779L3.57926 10.123C3.01242 10.528 2.25038 9.98305 2.46655 9.3287L3.24017 6.98981C3.28729 6.84706 3.2872 6.69332 3.23993 6.55063C3.19265 6.40793 3.1006 6.28361 2.97699 6.19549L0.953308 4.75109C0.387196 4.34612 0.678567 3.46513 1.37843 3.46513H3.88075C4.03334 3.46517 4.18202 3.41776 4.30553 3.32971C4.42903 3.24165 4.52102 3.11745 4.56832 2.9749L5.34194 0.636004L5.34121 0.635294Z"
          fill="#00C65E"
        />
      </svg>
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${rating >= 3 ? "block" : "hidden"}`}
      >
        <path
          d="M5.34121 0.635294C5.55811 -0.0190562 6.50019 -0.0190562 6.71637 0.635294L7.48998 2.97419C7.53724 3.11663 7.62912 3.24074 7.75248 3.32879C7.87584 3.41683 8.02437 3.46431 8.17683 3.46442H10.6799C11.3805 3.46442 11.6711 4.34541 11.105 4.75038L9.08059 6.19549C8.95697 6.28361 8.86493 6.40793 8.81765 6.55063C8.77038 6.69332 8.77029 6.84706 8.81741 6.98981L9.59103 9.3287C9.80793 9.98305 9.04516 10.528 8.4776 10.123L6.45319 8.6779C6.32971 8.5898 6.18102 8.54236 6.02843 8.54236C5.87583 8.54236 5.72715 8.5898 5.60366 8.6779L3.57926 10.123C3.01242 10.528 2.25038 9.98305 2.46655 9.3287L3.24017 6.98981C3.28729 6.84706 3.2872 6.69332 3.23993 6.55063C3.19265 6.40793 3.1006 6.28361 2.97699 6.19549L0.953308 4.75109C0.387196 4.34612 0.678567 3.46513 1.37843 3.46513H3.88075C4.03334 3.46517 4.18202 3.41776 4.30553 3.32971C4.42903 3.24165 4.52102 3.11745 4.56832 2.9749L5.34194 0.636004L5.34121 0.635294Z"
          fill="#00C65E"
        />
      </svg>
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${rating >= 4 ? "block" : "hidden"}`}
      >
        <path
          d="M5.34121 0.635294C5.55811 -0.0190562 6.50019 -0.0190562 6.71637 0.635294L7.48998 2.97419C7.53724 3.11663 7.62912 3.24074 7.75248 3.32879C7.87584 3.41683 8.02437 3.46431 8.17683 3.46442H10.6799C11.3805 3.46442 11.6711 4.34541 11.105 4.75038L9.08059 6.19549C8.95697 6.28361 8.86493 6.40793 8.81765 6.55063C8.77038 6.69332 8.77029 6.84706 8.81741 6.98981L9.59103 9.3287C9.80793 9.98305 9.04516 10.528 8.4776 10.123L6.45319 8.6779C6.32971 8.5898 6.18102 8.54236 6.02843 8.54236C5.87583 8.54236 5.72715 8.5898 5.60366 8.6779L3.57926 10.123C3.01242 10.528 2.25038 9.98305 2.46655 9.3287L3.24017 6.98981C3.28729 6.84706 3.2872 6.69332 3.23993 6.55063C3.19265 6.40793 3.1006 6.28361 2.97699 6.19549L0.953308 4.75109C0.387196 4.34612 0.678567 3.46513 1.37843 3.46513H3.88075C4.03334 3.46517 4.18202 3.41776 4.30553 3.32971C4.42903 3.24165 4.52102 3.11745 4.56832 2.9749L5.34194 0.636004L5.34121 0.635294Z"
          fill="#00C65E"
        />
      </svg>
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${rating >= 5 ? "block" : "hidden"}`}
      >
        <path
          d="M5.34121 0.635294C5.55811 -0.0190562 6.50019 -0.0190562 6.71637 0.635294L7.48998 2.97419C7.53724 3.11663 7.62912 3.24074 7.75248 3.32879C7.87584 3.41683 8.02437 3.46431 8.17683 3.46442H10.6799C11.3805 3.46442 11.6711 4.34541 11.105 4.75038L9.08059 6.19549C8.95697 6.28361 8.86493 6.40793 8.81765 6.55063C8.77038 6.69332 8.77029 6.84706 8.81741 6.98981L9.59103 9.3287C9.80793 9.98305 9.04516 10.528 8.4776 10.123L6.45319 8.6779C6.32971 8.5898 6.18102 8.54236 6.02843 8.54236C5.87583 8.54236 5.72715 8.5898 5.60366 8.6779L3.57926 10.123C3.01242 10.528 2.25038 9.98305 2.46655 9.3287L3.24017 6.98981C3.28729 6.84706 3.2872 6.69332 3.23993 6.55063C3.19265 6.40793 3.1006 6.28361 2.97699 6.19549L0.953308 4.75109C0.387196 4.34612 0.678567 3.46513 1.37843 3.46513H3.88075C4.03334 3.46517 4.18202 3.41776 4.30553 3.32971C4.42903 3.24165 4.52102 3.11745 4.56832 2.9749L5.34194 0.636004L5.34121 0.635294Z"
          fill="#00C65E"
        />
      </svg>
    </div>
  );
};

export default RatingBar;
