import Layout from "../components/layout";
import PageBanners from "../components/pageBanners";
import InitialTransition from "../components/intialTransition";

const Projects = () => {
  return (
    <Layout className="absolute w-full">
      <div className="min-h-screen">
        <InitialTransition />
        <PageBanners title={"Projects"} />
      </div>
    </Layout>
  );
};

export default Projects;
