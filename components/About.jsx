import React from "react";
import Image from "next/image";
import aboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-teal-400">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <h3 className="py-2 text-gray-600 font-normal dark:text-teal-400">I'm Not your normal Developer</h3>
          <p className="py-2 text-gray-600">
            My name is Mishra Rishi, and I am a full-stack developer with a
            passion for crafting exceptional web applications. With extensive
            experience in HTML, CSS, JavaScript, React, Redux, Ruby, Ruby on
            Rails, Next.js, and PostgreSQL, I possess a deep understanding of
            the tools required to build robust, scalable, and responsive
            applications. I take pride in delivering high-quality code that is
            optimized for performance and user experience, and I am constantly
            striving to learn and apply new technologies to enhance my skills. I
            enjoy collaborating with teams and clients to translate ideas into
            tangible products that meet their needs and exceed their
            expectations. With my meticulous attention to detail and
            problem-solving abilities, I am confident in my ability to tackle
            any challenge that comes my way.
          </p>
          <p className="py-2 text-gray-600 ">
            Before I learned to code, I was an ordinary school-boy who
            experienced the challenges of today's educational environment
            firsthand. However, this experience taught me a valuable set of
            skills, including problem-solving, communication, and
            result-oriented thinking, which have been crucial to my success in
            software development. In particular, my problem-solving skills have
            proven invaluable when tackling complex coding challenges. My
            unmatched perspicacity and sheer indefatigability make me an
            excellent developer who is always eager to learn and grow
          </p>
        </div>
        <div className="hidden sm:hidden md:block lg:block">
          <Image
            src={aboutImg}
            width="800" 
            height="800"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
