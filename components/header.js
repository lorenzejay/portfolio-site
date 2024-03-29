import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = ({ toggle }) => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      if (pageYOffset > 150) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        showNav ? "bg-none" : "sticky top-0 block "
      } flex justify-between w-full items-center h-[10vh] z-[100] px-5 lg:px-32 2xl:max-w-8xl mx-auto transition duration-500 ease-in-out`}
    >
      <Link href={"/"}>
        <a className="uppercase tracking-[0.07em] font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Lorenze Jay
        </a>
      </Link>
      <div
        onClick={toggle}
        className={`block text-white text-2xl cursor-pointer md:hidden `}
      >
        <FaBars className="" />
      </div>
      <ul
        className={
          "hidden md:flex justify-around list-none text-white uppercase items-center text-lg tracking-[0.03em] font-medium"
        }
      >
        <li className="hover:border-b-2 border-red-300 mx-4">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="hover:border-b-2 border-red-300 mx-4">
          <Link href="/about">About</Link>
        </li>
        {/* <li className="hover:border-b-2 border-red-300 mx-4">
          <Link className={""} href="/projects">
            Portfolio
          </Link>
        </li> */}
        <li className="hover:border-b-2 border-red-300 mx-4">
          <Link className={""} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
