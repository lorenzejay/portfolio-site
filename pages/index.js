import Head from "next/head";
import About from "../components/about";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ProjectSection from "../components/projectSection";
import ThreeTraits from "../components/threeTraits";
import TechIUse from "../components/techIUse";

export default function Home() {
  return (
    <>
      {/* <InitialTransition /> */}
      <Layout homepage={true} className="absolute">
        <Hero imageSrc={"/homebg.png"} />
        <ThreeTraits />
        <About />
        <TechIUse />
        <ProjectSection />
      </Layout>
    </>
  );
}
