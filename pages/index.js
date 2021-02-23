import Head from "next/head";
import About from "../components/about";
import Hero from "../components/hero";
import Layout from "../components/layout";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />

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
  );
}
