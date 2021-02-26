import Layout from "../components/layout";
import PaddingWrapper from "../components/paddingWrapper";
import PageBanners from "../components/pageBanners";
import { motion } from "framer-motion";
import { useRef } from "react";
import InitialTransition from "../components/intialTransition";
const Projects = () => {
  return (
    <Layout>
      <InitialTransition />
      <PageBanners title={"Projects"} />
      <PaddingWrapper>
        <h1>Projects</h1>
      </PaddingWrapper>
    </Layout>
  );
};

export default Projects;
