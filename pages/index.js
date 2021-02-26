import Head from "next/head";
import About from "../components/about";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ProjectSection from "../components/projectSection";
import styles from "../styles/Home.module.css";
import InitialTransition from "../components/intialTransition";
import ThreeTraits from "../components/threeTraits";

export default function Home() {
  return (
    <>
      {/* <InitialTransition /> */}
      <Layout homepage={true} className="absolute">
        <Hero imageSrc={"/homebg.png"} />
        <ThreeTraits />
        <About />
        <ProjectSection />

        <footer className={styles.footer}>
          <h2 className="font-bold">By Lorenze Hernandez</h2>
        </footer>
      </Layout>
    </>
  );
}
