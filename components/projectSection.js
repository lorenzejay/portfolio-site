import { BiRightTopArrowCircle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <section className="lg:min-h-screen">
      <div className="project-grid flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 text-white lg:gap-3 pt-10">
        <div className="bg-blue-400 lg:h-72 2xl:h-96 p-4 col-span-1 rounded-lg flex flex-col">
          <div className="h-full relative">
            <h3 className="text-4xl xl:text-4xl 2xl:text-5xl ">Kallo</h3>
            <p className="text-lg lg:text-base 2xl:text-2xl my-3">
              Kanban board and note taking website. Helps you stay organized and create agile boards
              to organize tasks.
            </p>
            {/* <p>Built with:</p> */}
            {/* <ul className="list-disc list-inside">
            <li>Next.js</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>Beautiful D&D - Drag and Drop</li>
            <li>Tailwind CSS</li>
          </ul> */}
            <a
              href="https://github.com/lorenzejay/kallo"
              target="_blank"
              className="underline mt-3 flex items-center text-xl absolute bottom-0"
            >
              <FaGithub /> <span className="ml-3 tex-t">View Code</span>
            </a>
          </div>
        </div>

        <div className="bg-red-400 col-span-2 min-h-80 lg:h-72 2xl:h-96 p-4 rounded-lg flex flex-col lg:flex-row my-5 lg:my-0 transition-all duration-700 ease-in-out ">
          <div className="xl:w-1/2 relative">
            <h3 className="text-4xl xl:text-4xl 2xl:text-5xl">The Sizzzle</h3>
            <p className="text-lg lg:text-base 2xl:text-2xl my-3">
              Revolutionizing Food Blogging into a simpler and minimalist social media type
              application.
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
          <iframe
            className="w-full md:h-72 lg:w-1/2 lg:h-52 2xl:h-72 pt-14"
            src="https://www.youtube.com/embed/yH-b5kJo_mY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="col-span-3 w-full flex flex-col lg:flex-row items-center justify-center">
          <motion.div
            className={`expanding-grid-item bg-purple-700  min-h-80 lg:h-72 2xl:h-96 p-4 rounded-lg flex flex-col items-center lg:flex-row my-5 lg:my-0 transition-all 0.5s ease-in-out lg:mr-3 ${
              span3 ? "lg:w-2/3" : "lg:w-1/3"
            }`}
            transition={{ duration: 2 }}
            onHoverStart={growGrid3}
          >
            <div>
              <h3 className="text-4xl xl:text-4xl 2xl:text-5xl">Photographer Preset Shop</h3>
              <p className="text-lg lg:text-base 2xl:text-2xl my-3 ">
                A site that generated over $900 of passive income selling digital presets during the
                first 3 months since it went live.
              </p>

              <div className="flex text-xl items-center mt-3 ">
                <a
                  href="https://github.com/lorenzejay/the-sizzzle"
                  target="_blank"
                  className="mr-2"
                >
                  <FaGithub />
                </a>
                <a href="https://thesizzzle.herokuapp.com/" target="_blank" className="underline">
                  Demo
                </a>
              </div>
            </div>
            {
              <img
                src={"/charis-presets-mockup-min.png"}
                alt="image of my project thumnail"
                className={`object-cover w-96 md:w-64  lg:h-64 lg:mx-0 ${
                  span4 ? "lg:hidden" : "lg:block"
                }`}
              />
            }
          </motion.div>

          <motion.div
            className={`expanding-grid-item w-full bg-blue-700  h-72 2xl:h-96 p-4 rounded-lg flex relative my-5 lg:my-0 ${
              span4 ? "lg:w-2/3" : "lg:w-1/3"
            }`}
            onHoverStart={growGrid4}
            onHoverEnd={growReset}
            transition={{ duration: 2 }}
          >
            <h3 className="text-4xl xl:text-4xl 2xl:text-5xl">See all projects</h3>
            <motion.img
              alt="a waving hand"
              src={"/unicornhand.svg"}
              className={`absolute bottom-0 left-0 right-0 w-32 h-32 mx-auto hidden ${
                span4 ? "lg:block" : "lg:hidden"
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
            {/* <img
            className={`absolute bottom-0 left-0 right-0 w-32 h-32 mx-auto hidden ${
              span4 ? "lg:block" : "lg:hidden"
            }`}
            src={"/unicornhand.svg"}
          /> */}

            <Link href="/projects">
              <BiRightTopArrowCircle
                size={64}
                className="absolute right-8 bottom-8 cursor-pointer"
              />
            </Link>
          </motion.div>
        </div>
      </div>
      {/* <section className="grid grid-cols-3 grid-rows-3 "></section> */}
    </section>
  );
};

export default ProjectSection;
