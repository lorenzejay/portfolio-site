import React from "react";
import Layout from "../components/layout";

const Contact2 = () => {
  return (
    <Layout>
      <iframe
        frameBorder="0"
        scrolling="no"
        width="100%"
        height="750"
        src="https://prism-one-crm-backend.herokuapp.com/leads/view/2"
      ></iframe>
    </Layout>
  );
};

export default Contact2;
