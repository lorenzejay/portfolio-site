import Head from "next/head";
import React, { useState } from "react";
import InitialTransition from "../components/intialTransition";
import Layout from "../components/layout";
import PageBanners from "../components/pageBanners";
import axios from "axios";

const Contact = () => {
  const todayDate = new Date().toISOString().slice(0, 10);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    date: todayDate,
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        phoneNumber: "",
        date: todayDate,
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xyybqojo",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you for submitting. We will get back to you soon."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [message, setMessage] = useState("");
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Contact me if you have any questions, ideas, or to simply collaborate."
        />
      </Head>
      <InitialTransition />
      <Layout className="absolute w-full">
        {/* <section className="min-h-screen">
          <PageBanners title="Have an idea?" className="bg-red-300" />
          <h2 className="text-2xl font-thin lg:text-3xl lg:font-bold w-full text-center rounded-md my-10">
            Let's see if we're the right fit together.
          </h2>
          <form
            className="flex flex-col mx-auto items-center justify-center w-full lg:w-1/2 gap-3 relative mt-10"
            onSubmit={handleOnSubmit}
          >
            <input
              placeholder="name"
              value={inputs.name}
              name="name"
              id="name"
              onChange={handleChange}
              className="w-full border-b-2 border-black border-opacity-10 px-3 py-1 mt-2 rounded-none"
            />
            <input
              placeholder="phone number"
              value={inputs.phoneNumber}
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              className="w-full border-b-2 border-black  border-opacity-10 px-3 py-1 mt-2 rounded-none"
            />
            <input
              placeholder="email"
              value={inputs.email}
              name="email"
              id="email"
              onChange={handleChange}
              className="w-full border-b-2  border-black border-opacity-10 px-3 py-1 mt-2 rounded-none"
            />
            <textarea
              placeholder="message"
              name="message"
              id="message"
              value={inputs.message}
              onChange={handleChange}
              className="w-full border-b-2  border-black border-opacity-10 px-3 py-1 mt-2 rounded-none"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-5 py-2 mt-4 w-full mb-10"
            >
              {!status.submitting
                ? !status.submitted
                  ? "Submit"
                  : "Submitted"
                : "Submitting..."}
            </button>
            {status.info.error && (
              <div className="error text-red-500 mb-10">
                Error: {status.info.msg}
              </div>
            )}
            {!status.info.error && status.info.msg && (
              <p className="text-green-500 mb-10">{status.info.msg}</p>
            )}
          </form>
        </section> */}

        <iframe
          src="https://app.cal.com/lorenzejay"
          frameborder="0"
          allowfullscreen
          className="w-full p-10 min-h-screen"
        ></iframe>
      </Layout>
    </>
  );
};

export default Contact;

// <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Schedule a meeting</title><style>body {margin: 0;}iframe {height: calc(100vh - 4px);width: calc(100vw - 4px);box-sizing: border-box;}</style></head><body><iframe src="https://app.cal.com/lorenzejay" frameborder="0" allowfullscreen></iframe></body></html>
