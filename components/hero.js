import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

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
      <div className="px-10 lg:pt-20 xl:px-20 flex flex-col items-center justify-center h-full z-10 text-white  md:flex-row md:justify-between">
        <article className="z-10 mb-14 mt-24 lg:mt-0">
          <p className="text-5xl mb-5">
            Lorenze Hernandez<span>👋</span>
          </p>
          <h1 className="text-2xl text-white z-3 mb-10 lg:text-3xl  py-2 lg:w-full w-11/12">
            Web Developer from Los Angeles.
          </h1>
          <span className="flex text-3xl">
            <a href="https://github.com/lorenzejay" target="_blank">
              <FaGithub className="mr-3 rounded-full hover:text-yellow-500" />
            </a>
            <a href="https://www.linkedin.com/in/lorenzehernandez/" target="_blank">
              <FaLinkedin className="hover:text-yellow-500" />
            </a>
          </span>
        </article>
        <img
          src={"/dev.jpg"}
          alt="vector image art of a web developer"
          className="rounded-full z-10 object-cover  w-64 h-64 md:w-56 md:h-56 2xl:w-80 2xl:h-80 mb-10 sm:mt-10 lg:mb-20"
        />
      </div>
    </motion.main>
  );
};

export default Hero;
