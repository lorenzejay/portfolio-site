import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PaddingWrapper from "./paddingWrapper";
const Hero = () => {
  return (
    <div className=" relative min-h-screen lg:h-screen ">
      <Image
        src={"/homebg.png"}
        alt="hero"
        layout="fill"
        className="absolute object-center object-cover"
      />
      <span className="overlay z-1"></span>
      <PaddingWrapper className="flex flex-col items-center justify-center h-full z-10 text-white  md:flex-row md:justify-between">
        <article className="z-10 mb-14 mt-24 lg:mt-0">
          <p className="text-4xl lg:text-6xl mb-5">
            Lorenze Hernandez<span>👋</span>
          </p>
          <h1 className="text-2xl text-white z-3 mb-10 lg:text-3xl  py-2 lg:w-full w-11/12">
            Web Developer from Los Angeles.
          </h1>
          <span className="flex text-3xl">
            <a href="https://github.com/lorenzejay" target="_blank">
              <FaGithub className="mr-3 rounded-full" />
            </a>
            <a href="https://www.linkedin.com/in/lorenzehernandez/" target="_blank">
              <FaLinkedin />
            </a>
          </span>
        </article>
        <img
          src={"/ljpp.jpg"}
          alt="this is a portrait of the author"
          className="rounded-full z-10 object-cover w-64 h-64 lg:w-80 lg:h-80 mb-5"
        />
      </PaddingWrapper>
    </div>
  );
};

export default Hero;
