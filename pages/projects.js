import Layout from "../components/layout";
import PageBanners from "../components/pageBanners";
import InitialTransition from "../components/intialTransition";
import Head from "next/head";

const Projects = () => {
  // const project  List = projects.results[0].data.body[0].items;
  const projectList = [];

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
          <div className="w-full text-center my-12 text-3xl tracking-[0.07em] text-white uppercase">
            Coming soon
          </div>
        </div>
      </Layout>
    </>
  );
};

// export async function getServerSideProps() {
//   const projects = await Client().query(
//     Prismic.Predicates.at("document.type", "projects_gallery")
//   );

//   return {
//     props: {
//       projects,
//     },
//   };
// }
export default Projects;
