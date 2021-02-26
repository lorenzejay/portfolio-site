import Link from "next/link";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
// export const Nav = styled.header`
//   //handle transitions here
//   /* background: #fff; */

//   height: 80px;
//   margin-top: -80px;
//   display: flex;
//   align-items: center;
//   font-size: 1rem;
//   position: sticky;
//   top: 0;
//   z-index: 60;
// `;

// export const NavContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 80px;
//   z-index: 1;
//   width: 100%;
//   padding: 0 5vw;
//   @media screen and (min-width: 1024px) {
//     padding: 0 10vw;
//   }
//   /* max-width: 1100px; */
// `;

// //we are grabbing the link from gatsby link
// // export const NavLink = styled(LinkG)`
// //   color: ${props => (props.homePage ? "#fff" : "#000")};
// //   color: #fff;
// //   justify-self: flex-start;
// //   cursor: pointer;
// //   font-size: 1.5rem;
// //   display: flex;
// //   align-items: center;
// //   margin-left: 6px;
// //   font-weight: bold;
// //   text-decoration: none;
// //   text-transform: uppercase;
// //   letter-spacing: 5px;
// //   &:hover {
// //     text-decoration: none;
// //     color: #ea5454;
// //   }
// // `
// export const NavLogo = styled(Link)`
//   color: #000;
//   text-decoration: none;
//   display: grid;
//   margin-top: 40px;
//   height: 100%;
//   cursor: pointer;
//   text-transform: uppercase;
//   font-size: 32px;
//   &:hover {
//     color: #ea5454;
//     text-decoration: none;
//   }
// `;

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
    margin-right: 10px;
  }
`;

// export const NavItem = styled.li`
//   height: 80px;
// `;

// //scroll links
// export const NavLinks = styled(Link)`
//   color: #000;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   &:hover {
//     color: #000;
//     text-decoration: none;
//   }
// `;

const Header = ({ toggle, homePage = false }) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <header
      className={`flex justify-between w-full items-center t-0 z-10 px-5 lg:px-20 xl:px-44 absolute bg-transparent ${
        homePage ? "text-black" : "text-black"
      }`}
      style={{ height: "14vh" }}
    >
      <h1 className="text-3xl font-bold uppercase">Lorenze H.</h1>
      <MobileIcon onClick={toggle} className="block lg:hidden">
        <FaBars className={`${homePage ? "text-black" : "text-black"}`} />
      </MobileIcon>
      <NavMenu
        className={`flex justify-around ${
          homePage ? "text-black" : "text-black"
        } items-center  lg:text-xl`}
      >
        <li>
          <Link className={`${homePage ? "text-black" : "text-black"}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`${homePage ? "text-black" : "text-black"}`} href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className={`${homePage ? "text-black" : "text-black"}`} href="/projects">
            Projects
          </Link>
        </li>
      </NavMenu>
    </header>
  );
};

export default Header;
