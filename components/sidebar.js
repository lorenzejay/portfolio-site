import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
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
    font-size: 2rem;
    margin: 10px 0;
    &:hover {
      color: #ea5454;
      transition: 0.2s ease-in-out;
    }
  }
`;

export const SidebarLink = styled(Link)`
  /* display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  margin-bottom: 5vh; */
`;

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
          <SidebarLink href="/projects">Projects</SidebarLink>
        </li>
        <li>
          <SidebarLink href="/contact">Contact</SidebarLink>
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
