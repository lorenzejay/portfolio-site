import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  return (
    <motion.main
      className="relative  w-full lg:h-[500px] rounded-lg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={"/homebg.png"}
        alt="hero"
        layout="fill"
        className="object-center object-cover rounded-lg"
      />
      <span className="overlay z-1 rounded-3xl"></span>
      <div className="h-full w-full flex flex-col justify-center items-center lg:flex-row px-10 lg:py-5 lg:pt-20 xl:px-20 2xl:pt-32">
        <div className="z-10 mb-14 mt-24 lg:mt-0 w-full ">
          <p className="text-5xl mb-5 text-white uppercase trackig-wide">
            Lorenze Jay<span>👋</span>
          </p>
          <h1 className="text-2xl text-white z-3 font-normal mb-10 xl:text-2xl py-2  md:w-3/4 lg:max-w-[400px] w-11/12">
            I help technology startups, artists, and professional services
            <span className="text-secondary font-medium">
              {" "}
              convert visitors to users.
            </span>
          </h1>
          <Link href="https://www.upliftdigitalsolutions.com/">
            <button className="btn btn-primary w-48 tracking-[0.08em]">
              See Work
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 z-10 mx-auto ">
          <div className="relative w-64 h-64 lg:w-72 lg:h-72 mb-24 rounded-full shadow-2xl overflow-hidden">
            <Image
              src="/ljaph-5.jpg"
              alt="Portrait of Lorenze Jay Hernandez"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl hover:scale-125 transition-transform ease-in-out duration-500"
            />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Hero;
