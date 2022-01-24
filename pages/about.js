import Head from "next/head";
import React from "react";
import InitialTransition from "../components/intialTransition";
import Layout from "../components/layout";
import PageBanners from "../components/pageBanners";

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
          <div className="py-12 w-full flex flex-col lg:flex-row justify-around">
            <div className="lg:w-1/2">
              {/* <h3 className="mr-auto font-bold text-3xl sm:text-4xl ">
                Who is Lorenze ?
              </h3> */}
              <img
                src="/ljaph-5.jpg"
                className="rounded-full object-cover w-64 h-64 mx-auto my-10 lg:mx-0 lg:rounded-md"
                alt="profile"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="font-semibold ">
                My name is Lorenze Hernandez and I make Full Stack Web
                Applications.
              </h3>
              <p className="my-3 text-xl">
                As an avid lover of technology, minimalism, and art, I enjoy
                creating customer-facing applications that combine my tech and
                business background. Being in the creative sphere since I was 14
                from taking photos or making videos for weddings, fast forward
                today, I enjoy creating applications accessible on the web. My
                main focus is to build accessible, inclusive products and
                digital experiences for various clients. I have experience using
                React.js, TailwindCSS, Redux, Node.js, SQL, Postgres, Firebase,
                MongoDB, Git, GitHub, and PHP. I am currently open to
                opportunities in Web Development.
              </p>
              {/* <p className="my-3 text-xl">
                I love building full applications because I get the full
                experience of how an entire application works. Being an artist I
                love creating the front-end. At the same time, I believe to have
                a great frontend, it's important to understand how the backend
                works. The backend is where our application can communicate with
                servers and databases as well as where most of our logic /
                algorithms live. Developing an application from front to back
                lets me build things we commonly use on a day to day basis -
                like productivity, blogs, or social media applications.
              </p> */}
              <p className="my-3 text-xl">
                My main focus is to build accessible, inclusive products and
                digital experiences for a variety of clients.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default About;
