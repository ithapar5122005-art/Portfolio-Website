import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-blue-900/20 to-transparent border-t border-blue-500/20 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 mb-4">
          Let's Connect
        </h3>
        <div className="flex justify-center gap-6 sm:gap-8 mb-8">
          <a
            href="https://github.com/ithapar5122005-art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
            title="GitHub"
          >
            <FaGithub size={24} className="sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/ishan-thapar-356403345/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin size={24} className="sm:w-8 sm:h-8" />
          </a>
          <a
            href="mailto:ithapar5122005@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
            title="Email"
          >
            <FaEnvelope size={24} className="sm:w-8 sm:h-8" />
          </a>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm">
          © {currentYear} Ishan Thapar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
