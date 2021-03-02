import { SiPostgresql, SiTailwindcss } from "react-icons/si";
import { DiReact, DiJavascript1, DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";
const TechIUse = () => {
  return (
    <div className="w-full h-auto mb-24 bg-blue-300 py-8">
      <div className="grid grid-cols-6 grid-rows-2 lg:px-24 xl:px-14 2xl:px-56 mx-auto px-2 justify-center">
        <SiPostgresql
          size={64}
          className="bg-gray-200 border-2 p-3 w-18 h-18 lg:w-32  lg:h-32 xl:h-36 xl:w-36 col-span-1"
        />
        <DiReact
          size={64}
          className=" bg-gray-200 border-2 p-3 w-18 h-18 lg:w-32  lg:h-32 xl:h-36 xl:w-36 row-start-2 col-start-2"
        />
        <DiJavascript1
          size={64}
          className="bg-gray-200 border-2 p-3 w-18 h-18 lg:w-32  lg:h-32 xl:h-36 xl:w-36 col-start-3"
        />
        <SiTailwindcss
          size={64}
          className="bg-gray-200 border-2 p-3 w-18 h-18 lg:w-32  lg:h-32 xl:h-36 xl:w-36 col-start-4 row-start-2"
        />
        <FaNode
          size={64}
          className="bg-gray-200 border-2 p-3 w-18 h-18 lg:w-32  lg:h-32 xl:h-36 xl:w-36 col-start-5 row-start-1"
        />
        <DiMongodb
          size={64}
          className="bg-gray-200 border-2 p-3 w-18 h-18 lg:w-32  lg:h-32 xl:h-36 xl:w-36 col-start-6 row-start-2"
        />
      </div>
    </div>
  );
};

export default TechIUse;
