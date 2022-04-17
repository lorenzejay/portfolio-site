import React from "react";

const PaddingWrapper = ({ children, className }) => {
  return (
    <div
      className={`px-5 lg:px-16  xl:px-32 max-w-8xl mx-auto relative ${className}`}
    >
      {children}
    </div>
  );
};

export default PaddingWrapper;
