import Head from "next/head";
import About from "../components/about";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ProjectSection from "../components/projectSection";
import ThreeTraits from "../components/threeTraits";
// import TechIUse from "../components/techIUse";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Developer | Lorenze Hernandez</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Los Angeles Based Front-End Web Developer portfolio site. Come check out a clean UI, modern design and added animation."
        />
        <meta
          name="twitter:title"
          content="Web Developer | Lorenze Hernandez"
        />
        <meta
          name="twitter:description"
          content="Los Angeles Based Front-End Web Developer portfolio site. Come check out a clean UI, modern design and added animation. "
        />
        <meta name="twitter:image" content="/ljpp.jpg" />
        <meta
          name="twitter:card"
          content="Front End Web Developer Portfolio Website. Check out this clean UI!"
        />
        <meta name="twitter:creator" content="@lorenzejayTech" />
      </Head>
      {/* <InitialTransition /> */}
      <Layout homepage={true} className="relative">
        <Hero />

        <ThreeTraits />
        <About />
        {/* <TechIUse /> */}
        <ProjectSection />
      </Layout>
    </>
  );
}
