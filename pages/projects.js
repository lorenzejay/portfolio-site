import Layout from "../components/layout";
import PageBanners from "../components/pageBanners";
import InitialTransition from "../components/intialTransition";
import { Client } from "../prismic-configuration.js";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import Head from "next/head";

const Projects = ({ projects }) => {
  const projectList = projects.results[0].data.body[0].items;

  return (
    <>
      <Head>
        <title>Projects | Lorenze Hernandez </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Demonstrating the projects I have built so far. They range from freelance projects to personalized hobby websites. All projects goal is to bring more value to customers or any end user."
        />
      </Head>
      <InitialTransition />
      <Layout className="absolute w-full">
        <div>
          <PageBanners title={"Projects"} />
          {projectList.map((project, i) => {
            return (
              <section
                className="flex flex-col lg:flex-row items-center lg:justify-between w-full my-3 lg:my-5 mb-10"
                key={i}
              >
                <img
                  src={project.project_image.url}
                  alt="project thumnail"
                  className="object-cover w-64 h-64 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96"
                />
                <div className="lg:w-1/2 lg:mt-20  2xl:mt-10">
                  <div className="text-4xl font-bold">
                    <RichText render={project.project_title} />
                  </div>
                  <div className="text-base">
                    <RichText render={project.project_description} />
                  </div>
                  <div>
                    <h4 className="font-medium mt-4 mb-2">Built with:</h4>
                    <ul className="list-disc list-inside lg:list-none lg:flex lg:flex-wrap lg:w-full lg:gap-3">
                      {project.project_technologies.map((x) => (
                        <li>{x.text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const projects = await Client().query(Prismic.Predicates.at("document.type", "projects_gallery"));

  return {
    props: {
      projects,
    },
  };
}
export default Projects;
