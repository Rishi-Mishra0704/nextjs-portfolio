import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import bookStore from "../public/assets/bookstore.png";
import math from "../public/assets/math.png";
import expense from "../public/assets/expense.png";
import conference from "../public/assets/conference.png";
import Image from "next/legacy/image";
const Project = () => {
  const nextButton = <button className="next-btn w-40 h-10 mx-10">Next</button>;
  const prevButton = <button className="prev-btn w-40 h-10 mx-10">Prev</button>;
  return (
    <section
      id="projects"
      className="w-full dark:bg-[#1f2937] p-3 md:p-5 lg:p-10 rounded-[10px] shadow-md shadow-gray-400 dark:shadow-teal-500"
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
            <p className="text-xl tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
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
          <div className="border-solid border-2 dark:border-teal-400 px-1 py-0.5 m-3">
            <Image src={conference} />
          </div>
          <div className="mb-10">
            <button className="h-10 w-40 mx-1">Live demo</button>
            <button className="h-10 w-40 mx-1">Source Code</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="">
            <p className="text-xl tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
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
            <button className="h-10 w-40 mx-1">Live demo</button>
            <button className="h-10 w-40 mx-1">Source Code</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="">
            <p className="text-xl tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              Math Magician
            </p>
            <p className="text-l tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              The site was built with React and includes a homepage, a
              calculator page, and a quotes page, all of which are easily
              accessible using React Router. With its efficient routing system
              and use of React, this site provides a seamless user experience
              for navigating between different pages and features.
            </p>
            <ul className="mt-20">
              <li>1. REACT</li>
              <li>2. CSS MODULES</li>
              <li>3. REDUX</li>
              <li>4. GIT/GITHUB</li>
            </ul>
          </div>
          <div className="border-solid border-2 dark:border-teal-400 px-1 py-0.5 m-3">
            <Image src={math} />
          </div>
          <div>
            <button className="h-10 w-40 mx-1">Live demo</button>
            <button className="h-10 w-40 mx-1">Source Code</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="">
            <p className="text-xl tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              Bookstore CMS
            </p>
            <p className="text-l tracking-widest text-center uppercase text-[#1f2937] dark:text-[#ecf0f3]">
              A simple React with Redux book store web app, where you can add
              and remove books, update reading progress and list by categories
            </p>
            <ul className="mt-20">
              <li>1. REACT</li>
              <li>2. CSS MODULES</li>
              <li>3. REDUX</li>
              <li>4. GIT/GITHUB</li>
            </ul>
          </div>
          <div className="border-solid border-2 dark:border-teal-400 px-1 py-0.5 m-3">
            <Image src={bookStore} />
          </div>
          <div>
            <button className="h-10 w-40 mx-1">Live demo</button>
            <button className="h-10 w-40 mx-1">Source Code</button>
          </div>
        </div>
      </AliceCarousel>
    </section>
  );
};

export default Project;
