import PaddingWrapper from "./paddingWrapper";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
const ProjectSection = () => {
  const [span3, setSpan3] = useState(true);
  const [span4, setSpan4] = useState(false);

  const growGrid3 = () => {
    setSpan3(true);
    setSpan4(false);
  };
  const growGrid4 = () => {
    setSpan3(false);
    setSpan4(true);
  };

  const growReset = () => {
    setSpan3(true);
    setSpan4(false);
  };

  //grid of 3 cols
  return (
    <PaddingWrapper className="lg:min-h-screen">
      <section className="project-grid flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 text-white lg:gap-3 pt-10">
        <div className="bg-blue-400 h-80 xl:h-96 p-8 col-span-1 rounded-lg flex flex-col">
          <h3 className="text-4xl xl:text-5xl ">Uplift Digital Solutions</h3>
          <p className="text-sm my-3">
            Freelance Website which aims to help buisness utilize their websites to generate more
            revenue.
          </p>
          <a href="https://upliftdigitalsolutions.com/" target="_blank" className="underline ">
            Visit Site Here
          </a>
        </div>

        <div className="bg-red-400 col-span-2 min-h-80 lg:h-80 xl:h-96 p-8 rounded-lg flex flex-col lg:flex-row my-5 lg:my-0 transition-all duration-700 ease-in-out ">
          <div className="xl:w-1/2">
            <h3 className="text-4xl xl:text-5xl ">The Sizzzle</h3>
            <p className="text-sm xl:text-2xl my-3">
              Revolutionizing Food Blogging into a simpler and minimalist social media type
              application.
            </p>
            <p className="text-xs xl:text-lg">
              Built with Postgresql, React, Node.js, Express, Cloudinary
            </p>
            <div className="flex text-xl items-center mt-3">
              <a href="https://github.com/lorenzejay/the-sizzzle" target="_blank" className="mr-2">
                <FaGithub />
              </a>
              <a href="https://thesizzzle.herokuapp.com/" target="_blank" className="underline">
                Demo
              </a>
            </div>
          </div>
          <iframe
            className="w-full h-72  lg:w-1/2 lg:h-52 xl:h-72 pt-10"
            src="https://www.youtube.com/embed/gZYTl25idOU"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div
          className={`bg-purple-700  min-h-80 lg:h-80 xl:h-96 p-8 rounded-lg flex flex-col lg:flex-row my-5 lg:my-0 ${
            span3 ? "lg:col-span-2" : "lg:col-span-1"
          }`}
          onMouseEnter={growGrid3}
        >
          <div className="xl:w-1/2">
            <h3 className="text-4xl xl:text-5xl ">Photographer Preset Shop</h3>
            <p className="text-sm xl:text-2xl my-3">
              Created a site that generate $800 of passive income selling digital custom digital
              presets.
            </p>
            <p className="text-xs xl:text-lg">Built with Gatsby.js.</p>
            <div className="flex text-xl items-center mt-3">
              <a href="https://github.com/lorenzejay/the-sizzzle" target="_blank" className="mr-2">
                <FaGithub />
              </a>
              <a href="https://thesizzzle.herokuapp.com/" target="_blank" className="underline">
                Demo
              </a>
            </div>
          </div>
          {
            <img
              src={"/project1mockup.png"}
              className={`w-3/4 mx-auto lg:mx-0 lg:w-1/2 ${span3 ? "lg:block" : "lg:hidden"}`}
            />
          }
        </div>

        <div
          className={`.expanding-grid-item bg-blue-700 col-span-1 h-80 xl:h-96 p-8 rounded-lg flex relative my-5 lg:my-0 ${
            span4 ? "col-span-2" : "col-span-1"
          }`}
          onMouseEnter={growGrid4}
          onMouseLeave={growReset}
        >
          <h3 className="text-4xl xl:text-5xl w-1/2">See all projects</h3>

          <img
            className={`absolute bottom-0 left-0 right-0 w-32 h-32 mx-auto hidden ${
              span4 ? "lg:block" : "lg:hidden"
            }`}
            src={"/unicornhand.svg"}
          />

          <Link href="/projects">
            <BiRightTopArrowCircle size={64} className="absolute right-8 bottom-8 cursor-pointer" />
          </Link>
        </div>
      </section>
      {/* <section className="grid grid-cols-3 grid-rows-3 "></section> */}
    </PaddingWrapper>
  );
};

export default ProjectSection;
