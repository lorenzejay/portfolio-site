import React from "react";
import { Client } from "/path-to-your-prismic-configuration";

const Post = ({ posts }) => {
  return (
    // Render your page component...
    <h1>page here</h1>
  );
};

export async function getStaticProps({ params }) {
  const client = Client();

  const doc = await client.getByUID("page", params.uid);

  return {
    props: {
      doc,
    },
  };
}

export async function getStaticPaths() {
  return {
    // You can run a separate query here to get dynamic parameters from your documents.
    paths: [{ params: { uid: "1" } }, { params: { uid: "2" } }],
    fallback: false,
  };
}

export default Page;
