import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaRegMoon,
  FaSun,
} from "react-icons/fa";
import { useRouter } from "next/router";
const Navbar = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState(darkmode);
  const [linkColor, setLinkColor] = useState("#1f2937");

  const router = useRouter();
  useEffect(() => {
    if (darkmode) {
      setNavBg("#1f2937");
      setLinkColor("#ecf0f3");
    } else {
      if (
        router.asPath === "/conference" ||
        router.asPath === "/expense" ||
        router.asPath === "/math" ||
        router.asPath === "/resto"
      ) {
        setNavBg("transparent");
        setLinkColor("#1f2937");
      } else {
        setNavBg("#ecf0f3");
        setLinkColor("#1f2937");
      }
    }
  }, [router.asPath, darkmode]);
  
  

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    if (darkmode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkmode]);
  function handleDarkmode() {
    setDarkmode(!darkmode);
  }

  return (
    <div
      style={{ backgroundColor: navBg }}
      className={`${
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      } ${darkmode ? "dark" : "light"}`}
    >
      <div className="flex justify-between item-center w-full h-full px-2  2xl:px-16">
        <Link href="/">
          <Image
            src="/../public/assets/nav-logo.png"
            width="80"
            height="30"
            alt="/"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/" key="home">
              <li className="m-5 text-sm uppercase hover:border-b ">Home</li>
            </Link>
            <Link href="/#about" key="about">
              <li className="m-5 text-sm uppercase hover:border-b ">About</li>
            </Link>
            <Link href="/#skills" key="skills">
              <li className="m-5 text-sm uppercase hover:border-b ">Skills</li>
            </Link>
            <Link href="/#projects" key="projects">
              <li className="m-5 text-sm uppercase hover:border-b ">Work</li>
            </Link>
            <Link href="/#contact" key="contact">
              <li className="m-5 text-sm uppercase hover:border-b ">
                Contact me
              </li>
            </Link>
            <div className="m-5 mr-100">
              <button onClick={() => handleDarkmode()}>
                {darkmode ? (
                  <FaSun className={darkmode && " text-orange-500 bg-[#1f2937]" } size={24} />
                ) : (
                  <FaRegMoon className={!darkmode && "text-[#5651e5] bg-dark-text" } size={24} />
                )}
              </button>
            </div>
          </ul>
          {nav ? null : (
            <div onClick={handleNav} className="md:hidden m-8">
              <AiOutlineMenu size={25} />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          nav ? "md:fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? `fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-3 ease-in duration-500 ${
                  darkmode ? "dark" : "light"
                }`
              : "fixed left-[-100%] top-0 p-3 ease-in duration-500"
          }
        >
          <div>
            <div className=" flex w-full items-center justify-between  ">
              <Link onClick={() => setNav(false)} href="/">
                <Image
                  src="/../public/assets/nav-logo.png"
                  width="100"
                  height="50"
                  alt="/"
                />
              </Link>
              
              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 m-2 cursor-pointer "
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className=" border-b border-gray-300 m-4 ">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className=" p-4 flex flex-col font-semibold">
            <ul className="uppercase">
              <Link href="/" key="home">
                <li onClick={handleNav} className="m-5 text-sm uppercase hover:border-b ">Home</li>
              </Link>
              <Link href="/#about" key="about">
                <li onClick={handleNav} className="m-5 text-sm uppercase hover:border-b ">About</li>
              </Link>
              <Link href="/#skills" key="skills">
                <li onClick={handleNav} className="m-5 text-sm uppercase hover:border-b ">
                  Skills
                </li>
              </Link>
              <Link href="/#projects" key="projects">
                <li onClick={handleNav} className="m-5 text-sm uppercase hover:border-b ">Work</li>
              </Link>
              <Link href="/#contact" key="contact">
                <li onClick={handleNav} className="m-5 text-sm uppercase hover:border-b ">
                  Contact me
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5653e5] text-lg">
                Lets's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 ">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 ">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 ">
                  <FaTwitter />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 ">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
            <div className="m-5 flex mx-auto my-15">
              <button onClick={() => handleDarkmode()}>
                {darkmode ? (
                  <FaSun className={darkmode && " text-orange-500 bg-[#1f2937]" } size={30} />
                ) : (
                  <FaRegMoon className={!darkmode && "text-[#5651e5] bg-dark-text" } size={30} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
