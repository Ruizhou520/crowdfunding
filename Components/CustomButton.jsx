import React from "react";

export const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={` rounded-[10px] font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
