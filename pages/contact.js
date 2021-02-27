import React, { useState } from "react";
import InitialTransition from "../components/intialTransition";
import Layout from "../components/layout";
import PageBanners from "../components/pageBanners";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Layout className="absolute w-full">
      <section className="min-h-screen">
        <InitialTransition />
        <PageBanners title="Have an idea?" className="bg-red-300" />
        <h2 className="text-2xl font-thin lg:text-3xl lg:font-bold w-full text-center rounded-md my-10">
          Let's see if we're the right fit together.
        </h2>
        <form className="flex flex-col mx-auto items-center justify-center w-full lg:w-1/2 gap-3 relative mt-10">
          <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b-2 border-black border-opacity-10 px-3 py-1"
          />
          <input
            placeholder="phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border-b-2 border-black  border-opacity-10 px-3 py-1"
          />
          <input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2  border-black border-opacity-10 px-3 py-1"
          />
          <textarea
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-b-2  border-black border-opacity-10 px-3 py-1"
            rows="5"
          ></textarea>
          <button type="submit" className="bg-black text-white px-5 py-2 w-full">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
