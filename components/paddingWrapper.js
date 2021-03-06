import React from "react";

const PaddingWrapper = ({ children, className }) => {
  return <div className={`px-5 lg:px-16 xl:px-36 2xl:px-44 relative ${className}`}>{children}</div>;
};

export default PaddingWrapper;
