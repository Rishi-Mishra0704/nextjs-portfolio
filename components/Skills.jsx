import React from "react";
import Image from "next/image";
import htmlImg from "../public/assets/html.png";
import cssImg from "../public/assets/css.png";
import jsImg from "../public/assets/javascript.png";
import reactImg from "../public/assets/react.png";
import githubImg from "../public/assets/github1.png";
import nodeImg from "../public/assets/node.png";
import rorImg from "../public/assets/ror.png";
import nextImg from "../public/assets/nextjs.png";
import postgresImg from "../public/assets/postgres.png";
import tailwindImg from "../public/assets/tailwind.png";


const Skills = () => {
  return (
    <div id="skills" className="w-full l:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] dark:text-teal-400">
          Skills
        </p>
        <h2 className="py-4 ">My Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src={htmlImg}
                  width="64"
                  height="64"
                  alt="html"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-xl">HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src={cssImg}
                  width="64"
                  height="64"
                  alt="css"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-xl">CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src={jsImg}
                  width="64"
                  height="64"
                  alt="javascript"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-xl">javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src={reactImg}
                  width="64"
                  height="64"
                  alt="react"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-xl">React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src={githubImg}
                  width="64"
                  height="64"
                  alt="github"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-xl">Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src={nodeImg}
                  width="64"
                  height="64"
                  alt="node.js"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-xl">Node.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src={rorImg}
                  width="64"
                  height="64"
                  alt="ruby on rails"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-xl">Ruby on Rails</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src={nextImg}
                  width="64"
                  height="64"
                  alt="next.js"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-xl">Next.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src={postgresImg}
                  width="64"
                  height="64"
                  alt="postrgres"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-xl">PostgresSQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src={tailwindImg}
                  width="64"
                  height="64"
                  alt="postrgres"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-xl">Tailwind</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
