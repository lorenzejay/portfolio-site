import { motion } from "framer-motion";
import Link from "next/link";

const TestAnimate = () => {
  const leftCenter = "left center";
  return (
    <div className="h-96 items-center grid grid-cols-3 justify-center grid-rows-1">
      <motion.div
        className="square col-span-2"
        // style={{ background: "black", width: 48, height: 48, margin: "0 auto" }}
        whileHover={{ scale: 5 }}
      />
      <motion.div
        className="square"
        // style={{ background: "black", width: 48, height: 48, margin: "0 auto" }}
        whileHover={{ scale: 2, transformOrigin: leftCenter }}
      />
      <motion.div
        className="square"
        // style={{ background: "black", width: 48, height: 48, margin: "0 auto" }}
        whileHover={{ scale: 5 }}
      />
    </div>
  );
};

export default TestAnimate;
