import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" relative h-screen ">
      <Image
        src={"/homebg.png"}
        alt="hero"
        layout="fill"
        className="absolute object-center object-cover"
      />
      <span className="overlay z-1"></span>
      <div
        className="flex flex-col items-center justify-center h-full z-3 text-white  md:flex-row md:justify-between px-5 lg:px-20"
        style={{ zIndex: 10 }}
      >
        <article className="z-10 mb-14 mt-24 ">
          <p className="text-2xl lg:text-5xl mb-5">
            Heyo my name is Lorenze <span>👋</span>
          </p>
          <h1 className="text-2xl text-white z-3 mb-10 lg:text-5xl bg-green-400 py-2 pl-2 lg:w-full w-11/12">
            Front End Web Developer 💻
          </h1>
          <p>My goal is to make a piece of tech that makes a difference.</p>
        </article>
        <Image
          src={"/ljpp.jpg"}
          layout="intrinsic"
          alt="this is a portrait of the author"
          height="250"
          width="250"
          quality="75"
          className="rounded-full z-3 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
