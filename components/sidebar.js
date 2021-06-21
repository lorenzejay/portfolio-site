import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const SideBar = ({ isOpen, toggle }) => {
  return (
    // <motion.div animate={isOpen ? "open" : "closed"} variants={variants} className="z-20">
    <div
      className={`fixed w-screen h-screen z-50 bg-black grid justify-center top-0 left-0 transition-all ease-in-out duration-500 ${
        isOpen ? "opacity-100" : "opacity-0"
      } ${isOpen ? "top-0" : "-top-full"} `}
      onClick={toggle}
    >
      <div className="absolute top-10 right-8 bg-transparent text-4xl cursor-pointer focus:outline-none outline-none text-white">
        <FaTimes />
      </div>

      <ul className="text-white text-3xl list flex flex-col justify-center items-center list-none">
        <li className="my-1">
          <Link href="/">Home</Link>
        </li>
        <li className="my-1">
          <Link href="/about">About</Link>
        </li>
        <li className="my-1">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="my-1">
          <Link href="/contact">Contact</Link>
        </li>
        {/* <li>
          <Link href="/blog">Blog</Link>
        </li> */}
      </ul>
    </div>
    // </motion.div>
  );
};

export default SideBar;
