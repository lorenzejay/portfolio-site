import React from "react";
import Image from "next/image";

import Layout from "../components/layout";
import Link from "next/link";

const socialLinks = [
  {
    name: "personal website",
    href: "/",
  },
  {
    name: "github",
    href: "https://github.com/lorenzejay",
  },
  {
    name: "twitter",
    href: "https://twitter.com/lorenzejayTech",
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/channel/UCJYobKvhV4dmnUeWgHcmf7w",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/lorenzehernandez/",
  },
  {
    name: "kallo - kanban board app",
    href: "https://github.com/lorenzejay/kallo",
  },
];

const Links = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-12">
        <div className="max-w-xs">
          <Image
            src={"/ljaph-5.jpg"}
            alt={"Portrait of Lorenze"}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>
        <p className="font-medium text-lg tracking-[0.03em] text-white my-6 w-3/4 text-center">
          Check out some of my work and personal projects.
        </p>
        <div className="flex flex-col space-y-6 w-full justify-center items-center">
          {socialLinks.map((links, i) => (
            <Link href={links.href} rel="noreferrer" key={i}>
              <a className="text-[#1d1b1b] uppercase font-medium py-4 rounded-md shadow-xl w-full sm:w-3/4 max-w-2xl 3xl:max-w-3xl text-center bg-white border hover:scale-105 transition-transform ease-in-out duration-300 tracking-[0.03em]">
                {links.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Links;
