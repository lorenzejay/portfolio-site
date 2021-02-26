import React from "react";

const PageBanners = ({ title, className }) => {
  return (
    <div
      className={` mt-24 relative  w-full lg:h-48  rounded-lg bg-gray-300 flex justify-center ${className}`}
    >
      <h1 className="text-5xl text-center my-auto uppercase text-bold">{title}</h1>
    </div>
  );
};

export default PageBanners;
