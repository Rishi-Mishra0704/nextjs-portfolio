import React from "react";
import Image from "next/image";
import "next/legacy/image";
import { RiRadioButtonFill } from "react-icons/ri";
import expenseImg from "../../public/assets/expense.png";
import Link from "next/link";
const Conference = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          style={{ objectFit: "cover" }}
          fill
          src={expenseImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Expense tracker</h2>
          <h3>React.js , Css.modules</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="text-2xl font-bold">Overview</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            neque nihil dolorem quisquam voluptates. Deserunt ab error autem,
            non explicabo quia quaerat laudantium ducimus totam maxime
            temporibus sunt illum itaque fugiat minus magni unde! Similique quos
            libero, omnis esse enim animi, accusantium voluptate quia eos
            reiciendis laboriosam eaque delectus at.
          </p>
          <button className="px-8 mt-4 mr-8">Live Demo</button>
          <button className="px-8 mt-4">Source Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Css.modules
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Conference;
