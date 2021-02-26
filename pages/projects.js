import Layout from "../components/layout";
import PageBanners from "../components/pageBanners";
import InitialTransition from "../components/intialTransition";

const Projects = () => {
  return (
    <Layout className="absolute w-full">
      <div>
        <InitialTransition />
        <PageBanners title={"Projects"} />
      </div>
    </Layout>
  );
};

export default Projects;
