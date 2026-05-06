import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-2">
      <p className="text-center p-4 text-sm text-gray-500 ml-100">
        Built with React, Vite, Tailwind and React Router
      </p>
      <a
        href="https://github.com/MaxY342"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-4 group mr-100"
      >
        <FaGithub className="text-gray-500 group-hover:text-gray-100 transition-colors duration-200" />
        <p className="text-gray-500 group-hover:text-gray-100 transition-colors duration-200">
          Github
        </p>
      </a>
    </footer>
  );
};
