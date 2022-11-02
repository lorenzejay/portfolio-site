import Head from "next/head";
import React from "react";
import InitialTransition from "../components/intialTransition";
import Layout from "../components/layout";
import PageBanners from "../components/pageBanners";
import Image from "next/image";
const About = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Contact me if you have any questions, ideas, or to simply collaborate."
        />
      </Head>
      <InitialTransition />
      <Layout className="absolute w-full">
        <main className="min-h-screen">
          <PageBanners title="About Me" className="bg-blue-400" />
          <div className="py-12 w-full flex flex-col lg:flex-row justify-around lg:space-x-20 space-y-12 lg:space-y-0">
            <div className="lg:w-1/2">
              <div className="relative w-64 h-64 mx-auto md:w-[400px] md:h-[400px]">
                <Image
                  src="/ljaph-5.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="font-semibold text-3xl text-white">
                My name is Lorenze Hernandez and <br /> I make Full Stack Web
                Applications.
              </h3>
              <p className="my-3 text-xl 3xl:text-3xl text-gray-300">
                As an avid lover of technology, minimalism, and art, I enjoy
                creating customer-facing applications that combine my tech and
                business background. Being in the creative sphere since I was 14
                from taking photos or making videos for weddings, fast forward
                today, I enjoy creating applications accessible on the web. My
                main focus is to build accessible, inclusive products and
                digital experiences for various clients. I have experience using
                React.js, TailwindCSS, Redux, Node.js, SQL, Postgres, Firebase,
                MongoDB, Git, GitHub, and PHP and also design with tools like
                figma.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default About;
