import Layout from "../components/layout";
import PaddingWrapper from "../components/paddingWrapper";
import PageBanners from "../components/pageBanners";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <motion.div>
      <Layout>
        <PageBanners title={"Projects"} />
        <PaddingWrapper>
          <h1>Projects</h1>
        </PaddingWrapper>
      </Layout>
    </motion.div>
  );
};

export default Projects;
