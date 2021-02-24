import React, { useState } from "react";
import Header from "./header";
import SideBar from "./sidebar";

const Layout = ({ children , homepage}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Header toggle={toggle} homePage={homepage} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
