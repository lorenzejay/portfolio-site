import PaddingWrapper from "./paddingWrapper";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { FaGithub, FaLaptop } from "react-icons/fa";
const ProjectSection = () => {
  //grid of 3 cols
  return (
    <PaddingWrapper>
      <section className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-3 text-white lg:gap-4">
        <div className="bg-blue-400 h-80 xl:h-96 p-8 col-span-1 rounded-lg flex flex-col">
          <h3 className="text-3xl xl:text-5xl ">Uplift Digital Solutions</h3>
          <p className="text-lg my-3">
            Freelance Website which aims to help buisness utilize their websites to generate more
            revenue.
          </p>
          <a href="https://upliftdigitalsolutions.com/" target="_blank" className="underline ">
            Visit Site Here
          </a>
        </div>

        <div className="bg-red-400 col-span-2 min-h-80 lg:h-80 xl:h-96 p-8 rounded-lg flex flex-col lg:flex-row my-5 lg:my-0">
          <div className="xl:w-1/2">
            <h3 className="text-3xl xl:text-5xl ">The Sizzzle</h3>
            <p className="text-lg xl:text-2xl my-3">
              Revolutionizing Food Blogging into a simpler and minimalist social media type
              application.
            </p>
            <p className="text-xs xl:text-lg">
              Built with Postgresql, React, Node.js, Express, Cloudinary
            </p>
            <div className="flex text-xl items-center">
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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="bg-purple-700 col-span-2 h-80 xl:h-96 p-8 rounded-lg"></div>

        <div className="bg-blue-700 col-span-1 h-80 xl:h-96 p-8 rounded-lg flex relative my-5 lg:my-0">
          <h3 className="text-3xl xl:text-5xl w-1/2">See all projects</h3>

          <BiRightTopArrowCircle size={48} className="absolute right-3 bottom-3 cursor-pointer" />
        </div>
      </section>
      {/* <section className="grid grid-cols-3 grid-rows-3 "></section> */}
    </PaddingWrapper>
  );
};

export default ProjectSection;
