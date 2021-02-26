import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 19;
  width: 100%;
  height: 100%;
  background: black;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 2rem;
  right: 1rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: pointer;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SideBarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  .darkmode-btn {
    cursor: pointer;
    margin-bottom: 15px;
  }
  li {
    font-size: 1.4rem;
    &:hover {
      color: green;
      transition: 0.2s ease-in-out;
    }
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  margin-bottom: 5vh;
  &:hover {
    color: green;
    transition: 0.2s ease-in-out;
  }
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideBar = ({ isOpen, toggle }) => {
  return (
    // <motion.div animate={isOpen ? "open" : "closed"} variants={variants} className="z-20">
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>

      <SideBarMenu className="text-white">
        <li>
          <SidebarLink href="/">Home</SidebarLink>
        </li>
        <li>
          <SidebarLink href="/about">About</SidebarLink>
        </li>
        <li>
          <SidebarLink href="/contact-us">Contact</SidebarLink>
        </li>
        <li>
          <SidebarLink href="/blog">Blog</SidebarLink>
        </li>
      </SideBarMenu>
    </SidebarContainer>
    // </motion.div>
  );
};

export default SideBar;
