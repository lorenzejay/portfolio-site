import React from "react";

const PageBanners = ({ title }) => {
  return (
    <div className="bg-gray-300 pt-20 relative h-80 flex justify-center">
      <h1 className="text-5xl text-center my-auto uppercase text-bold">{title}</h1>
    </div>
  );
};

export default PageBanners;
