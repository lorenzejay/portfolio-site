import { BiRightTopArrowCircle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

  // console.log("span3", span3);
  // console.log("span4", span4);

  //grid of 3 cols
  return (
    <section className="">
      <div className="project-grid flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 items-center text-white md:gap-3 pt-10">
        <div className="bg-blue-400 md:h-72 2xl:h-96 p-4 col-span-1 rounded-lg flex flex-col">
          <div className="h-full relative">
            <h3 className="text-4xl xl:text-4xl 2xl:text-4xl ">Kallo</h3>
            <p className="text-lg lg:text-base 2xl:text-2xl my-3">
              Kanban board and note taking website. Helps you stay organized and
              create agile boards to organize tasks.
            </p>
            <div className="md:absolute md:bottom-0 flex items-center text-xl">
              <a
                href="https://github.com/lorenzejay/kallo"
                target="_blank"
                className="underline mt-3 mr-3"
              >
                <FaGithub />
              </a>
              <a
                className="underline mt-3 "
                href="https://kallo-productivity.herokuapp.com/"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </div>
        </div>

        <div className="relative bg-red-400 col-span-2 md:h-72 2xl:h-96 p-4 rounded-lg flex flex-col md:flex-row my-5 lg:my-0 transition-all duration-700 ease-in-out ">
          <div className="md:w-3/4 xl:w-1/2 relative">
            <h3 className="text-4xl xl:text-4xl 2xl:text-4xl">The Sizzzle</h3>
            <p className="text-lg lg:text-base 2xl:text-2xl my-3">
              Revolutionizing Food Blogging into a simpler and minimalist social
              media type application.
            </p>

            <div className="flex text-xl items-center mt-3 lg:absolute lg:bottom-0 ">
              <a
                href="https://github.com/lorenzejay/the-sizzzle"
                target="_blank"
                className="mr-2 text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://thesizzzle.herokuapp.com/"
                target="_blank"
                className="underline  text-xl"
              >
                Demo
              </a>
            </div>
          </div>
          <div className="h-full w-full md:pt-12 lg:p-0 hidden md:block">
            <iframe
              className="h-64 w-full mt-5   md:h-56 lg:h-72 lg:w-full   2xl:h-96 md:pb-20 2xl:pb-16  "
              src="https://www.youtube.com/embed/yH-b5kJo_mY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="group col-span-3 w-full flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className={`expanding-grid-item peer bg-purple-700 min-h-80 md:h-72 2xl:h-96 p-4 rounded-lg flex flex-col items-center md:flex-row my-5 md:my-0 transition-all 0.5s ease-in-out md:mr-3 ${
              span3 ? "lg:w-2/3" : "lg:w-1/3"
            }`}
            transition={{ duration: 2 }}
            onHoverStart={growGrid3}
          >
            <div className={`h-full ${span3 && "w-full"}`}>
              <h3 className="transition-all ease-in-out duration-300 text-4xl 2xl:text-4xl">
                Esthetician Business Website
              </h3>
              <p
                className={`text-lg lg:text-base 2xl:text-2xl my-3 ${
                  span3 && "w-full line-clamp-5"
                }`}
              >
                Features a beautifully designed website showcasing an
                estheticians business. The website has helped the owner get more
                bookings.
              </p>

              <div className="flex text-xl items-center mt-3 ">
                <a
                  href="https://github.com/lorenzejay/the-sizzzle"
                  target="_blank"
                  className="mr-2"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://lorientskincare.com/"
                  target="_blank"
                  className="underline"
                >
                  Website
                </a>
              </div>
            </div>
            {
              <div
                className={`relative  md:w-3/4 md:h-full lg:mx-0 ${
                  span4 ? "hidden" : "md:block"
                }`}
              >
                <Image
                  src={"/lorient_mockup.png"}
                  alt="image of my project thumnail"
                  layout="fill"
                  className="object-cover"
                />
              </div>
            }
          </motion.div>

          <motion.div
            className={`expanding-grid-item w-full bg-blue-700  h-72 2xl:h-96 p-4 rounded-lg flex relative my-5 md:my-0 ${
              span4 ? "md:w-2/3" : "md:w-1/3"
            }`}
            onHoverStart={growGrid4}
            onHoverEnd={growReset}
            transition={{ duration: 2 }}
          >
            <h3 className="text-4xl xl:text-4xl 2xl:text-4xl">
              See all projects
            </h3>
            <motion.img
              alt="a waving hand"
              src={"/unicornhand.svg"}
              className={`absolute bottom-0 left-0 right-0 w-32 h-32 mx-auto hidden ${
                span4 ? "lg:block" : "md:hidden"
              }`}
              transition={{
                yoyo: Infinity,
                from: 0,
                duration: 0.2,
                ease: "easeInOut",
                type: "tween",
              }}
              whileHover={{ rotate: 20 }}
            />
            <Link href="/projects">
              <div>
                <BiRightTopArrowCircle
                  size={64}
                  className="absolute right-8 bottom-8 cursor-pointer"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* <section className="grid grid-cols-3 grid-rows-3 "></section> */}
    </section>
  );
};

export default ProjectSection;
