import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Header = ({ toggle }) => {
  return (
    <header
      className={`flex justify-between w-full items-center t-0 z-10 px-5 lg:px-32 2xl:max-w-8xl mx-auto relative bg-transparent text-black `}
      style={{ height: "14vh" }}
    >
      <h1 className="text-3xl font-bold uppercase tracking-widest ">
        Lorenze Jay
      </h1>
      <div
        onClick={toggle}
        className="block text-white text-2xl cursor-pointer md:hidden "
      >
        <FaBars className="text-black" />
      </div>
      <ul
        className={
          "hidden md:flex justify-around list-none text-black items-center   text-lg lg:text-xl tracking-wide font-semibold"
        }
      >
        <li className="hidden md:block hover:border-b-2 border-red-300 mx-4">
          <Link className={""} href="/">
            Home
          </Link>
        </li>
        <li className="hover:border-b-2 border-red-300 mx-4">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:border-b-2 border-red-300 mx-4">
          <Link className={""} href="/projects">
            Projects
          </Link>
        </li>
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
