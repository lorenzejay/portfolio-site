import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  return (
    <motion.main
      className=" relative  w-full lg:max-h-threeFourths  rounded-lg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={"/homebg.png"}
        alt="hero"
        layout="fill"
        className="relative object-center object-cover rounded-lg"
      />
      <span className="overlay z-1 rounded-3xl"></span>
      {/* <div className="relative px-10 lg:py-5 lg:pt-20 xl:px-20 flex flex-col items-center justify-center h-full lg:min-h-3/4 z-10 text-white  md:flex-row md:justify-between"> */}
      <div className="h-full lg:min-h-3/4 flex flex-col lg:flex-row w-full px-10 lg:py-5 lg:pt-20 xl:px-20 xl:pt-32">
        <div className="z-10 mb-14 mt-24 lg:mt-0 w-full">
          <p className="text-5xl mb-5 text-white uppercase trackig-wide">
            Lorenze Jay<span>👋</span>
          </p>
          <h1 className="text-2xl text-white z-3 font-normal mb-10 xl:text-2xl 2xl:text-4xl   py-2  md:w-3/4 lg:w-1/2 w-11/12">
            I build accessible, inclusive products and digital experiences for a
            variety of clients.
          </h1>
          <Link href="/projects">
            <button className="text-white bg-blue-400 px-4 py-2 rounded-md cursor-pointer focus:outline-none">
              See Projects
            </button>
          </Link>
        </div>
        {/* <img
          src={"/ljaph-5.jpg"}
          alt="portrait of lorenze hernandez."
          className="relative rounded-full z-10 object-cover  w-72 h-72 md:max-h-96 md:w-1/2 lg:h-3/4  xl:h-72     mb-10 sm:mt-10 lg:mb-10 xl:mb-0  lg:mt-0 "
        /> */}
        <div className="relative w-64 h-64 lg:w-72 lg:h-56 xl:w-96 xl:h-72 mb-24  bg-white rounded-full">
          <img
            src="/ljaph-5.jpg"
            alt="Portrait of Lorenze Jay Hernandez"
            className="rounded-full w-full object-cover h-full"
          />
        </div>
      </div>
    </motion.main>
  );
};

export default Hero;
