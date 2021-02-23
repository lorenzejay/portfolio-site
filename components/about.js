import PaddingWrapper from "./paddingWrapper";

const About = () => {
  return (
    <PaddingWrapper className="py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-4 lg:min-h-screen">
      <img src={"/webdev.svg"} className="w-3/4 lg:w-1/2" />
      <div className="flex flex-col mb-5 items-start">
        <h2 className="text-3xl ">
          <span className="text-red-400">Specialist</span> in creative digital products.
        </h2>
        <p className="text-gray-500 leading-relaxed mt-4">
          Avid lover of technology, minimalism, and art. I enjoy creating customer facing
          applications that allow me to combine my background in tech and business.
        </p>
      </div>
    </PaddingWrapper>
  );
};

export default About;
