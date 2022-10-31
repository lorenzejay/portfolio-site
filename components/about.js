const About = () => {
  return (
    <section className=" flex flex-col-reverse md:flex-row items-center justify-between gap-4 xl:gap-10 h-auto my-52">
      <img
        src={"/webdev.svg"}
        alt="guy on laptop with github squares behind"
        className="w-3/4 lg:w-1/2"
      />
      <div className="flex flex-col mb-5 items-start">
        <h2 className="text-3xl xl:text-5xl text-gray-100 lg:max-w-xl">
          <span className="text-red-400">Specialist</span> in creative digital
          products.
        </h2>
        <p className="text-gray-300 leading-relaxed mt-4 xl:text-xl xl:w-3/4">
          Helping technology startups, artists, and professional services create
          digital experiences that build trust, authenticity and convert
          visitors to users.
        </p>
      </div>
    </section>
  );
};

export default About;
