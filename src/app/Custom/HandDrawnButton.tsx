import React from "react";

const HandDrawnButton: React.FC<{ text?: string }> = ({
  text = "GET STARTED",
}) => {
  return (
    <button className="relative inline-flex items-center justify-center w-[209px] h-[48px] transition-transform hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2">
      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 209 48"
        className="absolute w-full h-full pointer-events-none"
      >
        <path
          d="M8,24 Q3,3 24,8 T185,8 Q206,3 201,24 Q206,45 185,40 T24,40 Q3,45 8,24"
          fill="#A29BFE"
          stroke="black"
          strokeWidth="3"
        />
      </svg>

      {/* Text Overlay */}
      <span className="relative text-black font-bold uppercase text-lg">
        {text}
      </span>
    </button>
  );
};

export default HandDrawnButton;
