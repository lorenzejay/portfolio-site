import Link from "next/link";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const MobileIcon = styled.div`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;

    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  text-align: center;
  margin-right: 22px;
  margin-top: auto;

  height: 100%;
  .darkmode-btn {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  li {
    margin-right: 15px;
  }
`;

const Header = ({ toggle }) => {
  return (
    <header
      className={`flex justify-between w-full items-center t-0 z-10 px-5 lg:px-20 xl:px-44 relative bg-transparent text-black`}
      style={{ height: "14vh" }}
    >
      <h1 className="text-3xl font-bold uppercase">Lorenze H.</h1>
      <MobileIcon onClick={toggle} className="block lg:hidden">
        <FaBars className="text-black" />
      </MobileIcon>
      <NavMenu className={"flex justify-around text-black items-center  text-lg lg:text-xl"}>
        <li>
          <Link className={""} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={""} href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className={""} href="/projects">
            Projects
          </Link>
        </li>
      </NavMenu>
    </header>
  );
};

export default Header;
