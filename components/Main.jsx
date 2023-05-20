import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Main = () => {
  return (
    <div id="home" className=" w-full h-screen text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-md tracking-widest text-gray-600">
            Let's Build Something Big Together
          </p>
          <h1 className="py-4 text-gray-700 dark:text-[#ecf0f3]">
            Hi, I'm <span className="text-[#5651e5]">Rishi</span>
          </h1>
          <h1 className="py-4 text-gray-700 dark:text-[#ecf0f3]">
            A FullStack Web Developer{" "}
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto text-md ">
            I specialize in fullstack web development My skills enable me to
            create scalable, high-performance web applications with dynamic user
            interfaces tailored to specific business and user needs. as well as
            my expertise in Ruby on Rails and Ruby, I design and develop robust
            server-side components for seamless and reliable web application
            functionality.
          </p>
          <div className="flex justify-between items-center max-w-[330px] m-auto py-4 dark:text-teal-400">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-400">
              <a href="https://www.linkedin.com/in/rishi-mishra-756718257/">
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-400">
              <a href="https://github.com/Rishi-Mishra0704">
                <FaGithub size={24} />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-400">
              <FaTwitter size={24} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-400">
              <AiOutlineMail size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
