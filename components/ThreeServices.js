import Image from "next/image";

const ThreeServices = () => {
  return (
    <div className="mt-12 lg:mt-24">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-12">
        <div className="">
          <div className="flex items-center justify-center">
            <Image
              src={"/design.svg"}
              alt="thumnail of my character traits"
              width={192}
              height={192}
            />
          </div>
          <p className="text-2xl lg:text-3xl tracking-widest font-medium text-white">
            Designer
          </p>
          <p className="xl:text-xl text-gray-300">
            I build user interfaces that make your users enjoy using your
            applications.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <Image
              src={"/coding.svg"}
              alt="thumnail of my character traits"
              width={192}
              height={192}
            />
          </div>
          <p className="text-2xl lg:text-3xl tracking-widest font-medium text-white">
            Developer
          </p>
          <p className="xl:text-xl text-gray-300">
            I am a frontend developer that translates design to a finished
            product.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <Image
              src={"/lifecycle.svg"}
              alt="thumnail of my character traits"
              width={192}
              height={192}
            />
          </div>
          <p className="text-2xl lg:text-3xl tracking-widest font-medium text-white">
            Complete Lifecycle
          </p>
          <p className="xl:text-xl text-gray-300">
            Engineering lifecycle encompasses both design and development
            stages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeServices;
