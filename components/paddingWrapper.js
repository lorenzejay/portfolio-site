import React from "react";

const PaddingWrapper = ({ children, className }) => {
  return <div className={`px-5 lg:px-20 ${className}`}>{children}</div>;
};

export default PaddingWrapper;
