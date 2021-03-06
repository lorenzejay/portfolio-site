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
        className="absolute object-center object-cover rounded-lg"
      />
      <span className="overlay z-1 rounded-3xl"></span>
      <div className="px-10 lg:py-5 lg:pt-20 xl:px-20 flex flex-col items-center justify-center h-full lg:min-h-3/4 z-10 text-white  md:flex-row md:justify-between">
        <article className="z-10 mb-14 mt-24 lg:mt-0">
          <p className="text-5xl mb-5">
            Lorenze Hernandez<span>👋</span>
          </p>
          <h1 className="text-2xl text-white z-3 mb-10 xl:text-xl 2xl:text-3xl  py-2  md:w-3/4 lg:w-1/2 w-11/12">
            A web developer from Los Angeles. I build accessible, inclusive products and digital
            experiences for a variety of clients.
          </h1>
          <Link href="/projects">
            <button className="text-white bg-blue-400 px-4 py-2 rounded-md cursor-pointer focus:outline-none">
              See Projects
            </button>
          </Link>
        </article>
        <img
          src={"/ljpp.jpg"}
          alt="portrait of lorenze hernandez."
          className="rounded-full z-10 object-cover  w-64 h-64 md:rounded-md md:w-80 md:h-80 2xl:h-96  mb-10 sm:mt-10 lg:mb-10 lg:mt-0 "
        />
      </div>
    </motion.main>
  );
};

export default Hero;
