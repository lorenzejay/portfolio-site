import React from "react";

const PageBanners = ({ title, className }) => {
  return (
    <div
      className={`relative  w-full h-48 2xl:h-64 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center ${className}`}
    >
      <h1 className="text-3xl sm:text-5xl text-center my-auto uppercase text-bold">
        {title}
      </h1>
    </div>
  );
};

export default PageBanners;
