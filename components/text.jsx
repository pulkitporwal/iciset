import React from "react";

const TextSection = ({ children, title, className }) => {
  return (
    <div className={`px-4 sm:px-6 lg:px-10 xl:mx-24 pt-4 pb-8`}>
      {title && (
        <>
          <h2 className="text-2xl font-semibold mb-2 text-[#005B96]">{title}</h2>
          <hr className="mb-4 border-[2px] border-[#005B96]" />
        </>
      )}
      <div className={`text-justify leading-relaxed text-base text-gray-800  ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default TextSection;
