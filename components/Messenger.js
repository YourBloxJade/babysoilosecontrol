import Image from "next/image";
import React from "react";
import profile from "../assets/profile1.jpg";

import { MdContentPaste } from "react-icons/md";
import { BsFillFileEarmarkRuledFill } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";

const Messenger = () => {
  return (
    <div className="">
      <div className="text-white w-[46rem] bg-[#20232b] h-full  pt-4 px-4 ">
        {/* Top */}
        <div className="bg-black rounded-t-[1.7rem] h-16 flex items-center justify-between mt-0">
          <div className="flex items-center ">
            <div className="w-10 h-10 flex ml-4">
              <Image src={profile} className="object-cover rounded-full" />
            </div>
            <p className="ml-3 text-gray-500">
              Conversations with{" "}
              <span className=" text-gray-200">Russel Hue</span>{" "}
            </p>
          </div>
          <div className="flex items-center space-x-4 mr-4">
            <div className="bg-[#16171b] p-2 rounded-[0.8rem]">
              <button className="text-white">Apply to Offer</button>
            </div>
            <MdContentPaste className="text-[22px]" />
            <BsFillFileEarmarkRuledFill className="text-[22px]" />
          </div>
        </div>

        {/* Content */}
        <div className="h-full bg-[#1d1e24] pt-4 pl-4 pr-4">
          {/* First Message */}
          <div className="flex justify-center bg-[#16171b] w-[17rem] rounded-r-[1rem] rounded-bl-[1rem] py-1">
            <p className="p-4 ">How does it sound for you?</p>
          </div>

          {/* Purple messages */}
          <div className="w-full  flex  flex-col items-end pt-12">
            <div className="flex justify-center   w-[17rem] rounded-l-[1rem] rounded-tr-[1rem] py-1 bg-[#b785f5] mr-4">
              <p className="p-4 ">How does it sound for you?</p>
            </div>
            <div className="flex justify-center   w-[22rem] rounded-l-[1rem] rounded-tr-[1rem] py-1 bg-[#b785f5] mr-4 mt-3">
              <p className="p-4 ">
                See you tomorrow morning, can't wait for this!
              </p>
            </div>
          </div>

          {/* Black message */}

          <div className="flex justify-center bg-[#16171b] w-[17rem] rounded-r-[1rem] rounded-bl-[1rem] py-1 mt-10">
            <p className="p-4 ">Good send you their vidual</p>
          </div>

          {/* Bottom */}
          <div className="bg-[#16171b] h-[4rem] w-full mt-[8.8rem] rounded-[1.5rem] relative ">
            <input
              type="search"
              className="w-full h-full rounded-[1.5rem] bg-[#16171b] outline-none pl-8"
            />
            <button className=" p-4 shrink-0">
              <FaRegPaperPlane className="absolute bg-yellow-300   text-black shrink-0 w-10 h-10 top-3 p-2 rounded-[0.5rem]  right-[1rem]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
