import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center border-t w-full h-full text-sm mt-20 py-10">
      {/* <h2 className="font-semibold mx-auto text-center text-black text-lg">Lorenze Hernandez</h2> */}
      <span className="flex text-3xl">
        <a
          href="https://github.com/lorenzejay"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="mr-3 rounded-full hover:text-gray-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/lorenzehernandez/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="mr-3 hover:text-blue-500" />
        </a>
        <a
          href="https://twitter.com/lorenzejayTech"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="hover:text-blue-500" />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
