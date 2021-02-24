import Head from "next/head";
import About from "../components/about";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ProjectSection from "../components/projectSection";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Layout homepage={true}>
        <Hero imageSrc={"/homebg.png"} />
        <About />
        <ProjectSection />
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </Layout>
    </motion.div>
  );
}
