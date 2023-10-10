import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/legacy/image";
import resto from "../public/assets/resto.png";
import carhub from "../public/assets/new-carhub.png";
import expense from "../public/assets/expense-racker.png";
import conference from "../public/assets/conference.png";
import nextboard from "../public/assets/nextboard.png";

const Project = () => {
  const nextButton = <button className="next-btn ml-1 w-40 h-10 ">Next</button>;
  const prevButton = <button className="prev-btn mr-1 w-40 h-10">Prev</button>;
  return (
    <section
      id="projects"
      className="sm:w-[70%] md:w-[80%] dark:bg-[#1f2937] p-3 rounded-[10px] shadow-md shadow-gray-400 dark:shadow-teal-500 mx-auto my-16"
    >
      <div className="mb-10">
        <p className="text-2xl tracking-widest text-center uppercase text-[#5651e5] dark:text-teal-400">
          Projects
        </p>
      </div>
      <AliceCarousel
        keyboardNavigation={true}
        mouseTracking={true}
        renderPrevButton={() => prevButton}
        renderNextButton={() => nextButton}
      >
        <div className="grid md:grid-cols-2">
          <div className="">
            <p className="text-xl my-2 tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              Conference Page
            </p>
            <p className="text-l tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              A Conference page to test my web development abilities built with
              html, css and vanilla Javascript. It has many features like
              responsiveness when used on mobile. When used on mobile it has a
              button to see more or less featured speakers . It also has an
              about section .Original design by Cindy shin
            </p>
            <ul className="mt-20">
              <li>1. HTML</li>
              <li>2. CSS</li>
              <li>3. JAVASCRIPT</li>
              <li>4. GIT/GITHUB</li>
            </ul>
          </div>
          <div className="border-solid border-2 dark:border-teal-400 px-1 py-0.5">
            <Image src={conference} />
          </div>
          <div className="mb-10">
            <a
              href="https://rishi-mishra0704.github.io/Capstone/index.html"
              target="_blank"
            >
              <button className="h-10 w-40 mx-1 my-8">Live demo</button>
            </a>
            <a
              href="https://github.com/Rishi-Mishra0704/Capstone"
              target="_blank"
            >
              <button className="h-10 w-40 mx-1 my-8">Source Code</button>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="">
            <p className="text-xl my-2  tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              Expense Tracker
            </p>
            <p className="text-l tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              This is an expense tracker that helps you keep track of all your
              expenses since 4 years . This was made to see how much improvement
              I need in using react.js . This is entirely built on react.js and
              Css-Modules. It has a special feature namely year filter to help
              you see your expense in particular year
            </p>
            <ul className="mt-20">
              <li>1. REACT</li>
              <li>2. CSS MODULES</li>
              <li>3. GIT/GITHUB</li>
            </ul>
          </div>
          <div className="border-solid border-2 dark:border-teal-400 px-1 py-0.5 m-3">
            <Image src={expense} />
          </div>
          <div>
            <a href="https://expense-racker.onrender.com/" target="_blank">
              <button className="h-10 w-40 mx-1 my-8">Live demo</button>
            </a>
            <a
              href="https://github.com/Rishi-Mishra0704/react-project"
              target="_blank"
            >
              <button className="h-10 w-40 mx-1 my-8">Source Code</button>
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="">
            <p className="text-xl my-2  tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              NextBoard
            </p>
            <p className="text-l tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              Built with Nextjs and tailwindcss. It is a dashboard site which's
              primary purpose was to test out my styling skills along with
              typescript. 
            </p>
            <ul className="mt-20">
              <li>1. Next.js</li>
              <li>2. Tailwind CSS</li>
              <li>3. Typescript</li>
              <li>3. GIT/GITHUB</li>
            </ul>
          </div>
          <div className="border-solid border-2 dark:border-teal-400 px-1 py-0.5 m-3">
            <Image src={nextboard} />
          </div>
          <div>
            <a href="https://rishi-nextboard.vercel.app/" target="_blank">
              <button className="h-10 w-40 mx-1 my-8">Live demo</button>
            </a>
            <a
              href="https://github.com/Rishi-Mishra0704/next_dashboard"
              target="_blank"
            >
              <button className="h-10 w-40 mx-1 my-8">Source Code</button>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="">
            <p className="text-xl my-2  tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              CarHub
            </p>
            <p className="text-l tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              The site was built with Nextjs and tailwindcss. It is a car
              dealership site where you can see all the cars available and their
              details. It has a special feature namely search bar to help you
              find your car easily. It was built to test my skills in Nextjs and
              tailwindcss
            </p>
            <ul className="mt-20">
              <li>1. Nextjs</li>
              <li>2. TailwindCSS</li>
              <li>3. REDUX</li>
              <li>4. Ruby on Rails</li>
              <li>5. PostgreSQL</li>
              <li>6. GIT/GITHUB</li>
            </ul>
          </div>
          <div className="border-solid border-2 dark:border-teal-400 px-1 py-0.5 m-3">
            <Image src={carhub} />
          </div>
          <div>
            <a href="https://carhub-2.vercel.app/" target="_blank">
              <button className="h-10 w-40 mx-1 my-8">Live demo</button>
            </a>
            <a
              href="https://github.com/Rishi-Mishra0704/carhub-backend"
              target="_blank"
            >
              <button className="h-10 w-40 mx-1 my-8">Front-end Code</button>
            </a>
            <a
              href="https://github.com/Rishi-Mishra0704/carhub-frontend"
              target="_blank"
            >
              <button className="h-10 w-40 mx-1 my-8">Front-end Code</button>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="">
            <p className="text-xl my-2 tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              React-resto
            </p>
            <p className="text-l tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              Developed a dynamic food ordering WebApp with API integration,
              facilitating seamless meal retrieval and order posting. Improved
              load time by 30% through optimized CSS modules.
            </p>
            <ul className="mt-20">
              <li>1. React.js</li>
              <li>2. Css Modules</li>
              <li>3. MongoDB</li>
              <li>4. Node/Express.js</li>
              <li>5. GIT/GITHUB</li>
            </ul>
          </div>
          <div className="border-solid border-2 dark:border-teal-400 px-1 py-0.5 m-3">
            <Image src={resto} />
          </div>
          <div>
            <a href="https://rishi-resto.vercel.app/" target="_blank">
              <button className="h-10 w-40 mx-1 my-8">Live demo</button>
            </a>
            <a
              href="https://github.com/Rishi-Mishra0704/rishi-resto"
              target="_blank"
            >
              <button className="h-10 w-40 mx-1 my-8">Front-end Code</button>
            </a>
            <a
              href="https://github.com/Rishi-Mishra0704/resto-backend"
              target="_blank"
            >
              <button className="h-10 w-40 mx-1 my-8">Back-end Code</button>
            </a>
          </div>
        </div>
      </AliceCarousel>
    </section>
  );
};

export default Project;
