import React from "react";

const PageBanners = ({ title, className }) => {
  return (
    <div
      className={`relative  w-full h-48 2xl:h-64 rounded-lg bg-gray-300 flex justify-center ${className}`}
    >
      <h1 className="text-3xl sm:text-5xl text-center my-auto uppercase text-bold">{title}</h1>
    </div>
  );
};

export default PageBanners;
