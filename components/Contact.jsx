import React from "react";
import contactImg from "../public/assets/contact.jpg";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] dark:text-teal-400">
          Contact me
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/** Left Side */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
            <div className="lg:p-4 h-full ">
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={contactImg}
                alt="/"
              />
              <div>
                <h2 className="py-2">Rishi Mishra</h2>
                <p className="text-gray-600 dark:text-teal-400">
                  FullStack Developer
                </p>
                <p className="py-4">
                  I'm available as a freelancer or full-time positions . Contact
                  me and let's talk
                </p>
              </div>
              <p className="uppercase pt-8 ">connect with me</p>
              <div className="flex items-center justify-between py-4 dark:text-teal-500">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-500">
                <a href="https://www.linkedin.com/in/rishi-mishra-756718257/"><FaLinkedinIn
                    size={24}
                  /></a>  
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-500">
                 <a href="https://github.com/Rishi-Mishra0704"> <FaGithub
                    size={24}
                  /></a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-500">
                  <a href="https://twitter.com/RishiMi31357764">
                    <FaTwitter size={24} />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-500">
                  <a href="https://www.instagram.com/rishi_mishra0704/">
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/** Right Side */}

          <div className="col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone.No</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    rows="5"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-500">
              <HiOutlineChevronDoubleUp
                className="text-[#5651e5] dark:text-teal-400 "
                size={24}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
