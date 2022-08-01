import React from "react";

const PaddingWrapper = ({ children, className }) => {
  return (
    <main
      className={`px-5 lg:px-16  xl:px-32 max-w-8xl mx-auto relative ${className}`}
    >
      {children}
    </main>
  );
};

export default PaddingWrapper;
