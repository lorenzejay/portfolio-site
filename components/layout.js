import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import PaddingWrapper from "./paddingWrapper";
import SideBar from "./sidebar";

const Layout = ({ children, homepage, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Header toggle={toggle} homePage={homepage} />
      <PaddingWrapper className={className}>{children}</PaddingWrapper>
      <Footer />
    </>
  );
};

export default Layout;
