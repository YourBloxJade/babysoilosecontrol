import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo1.png";
import profile from "../assets/profile.jpg";
import { AiOutlineFile } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoCallOutline, IoNotificationsOutline } from "react-icons/io5";
import {
  BsFillChatSquareTextFill,
  BsToggle2On,
  BsMoon,
  BsSun,
} from "react-icons/bs";

import { AiTwotoneAppstore } from "react-icons/ai";

import Button from "./Button";

const Navbar = () => {
  const navbuttons = [
    { title: "Resume", icon: <AiOutlineFile />, id: 1 },
    { title: "Contacts", icon: <MdContacts />, id: 2 },
    { title: "Statistics", icon: <IoStatsChartSharp /> },
    { title: "Chats", icon: <BsFillChatSquareTextFill /> },
    { title: "Settings", icon: <AiTwotoneAppstore /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <div className={`flex items-center justify-between bg-[#20232b] h-20 px-8`}>
      {/* Left Side */}
      <div className="flex items-center h-full  text-white">
        <div className="flex items-center">
          <div className="mr-2 w-10  ">
            <Image src={logo} className="" />
          </div>
          <p className="text-white font-bold">Chat App</p>
        </div>
        <div className="space-x-8 hidden  xl:flex pl-8 text-gray-400  ">
          {navbuttons.map((button) => (
            <Button title={button.title} icon={button.icon} id={button.id} />
          ))}
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center space-x-6 text-white">
        <div
          className="cursor-pointer hidden sm:flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <div className="relative flex items-center  text-purple-700">
              <BsToggle2On className="h-12 w-12  " />

              <BsMoon className="absolute  text-white right-[0.3rem]" />
            </div>
          ) : (
            <div className="relative flex items-center  text-purple-700">
              <BsToggle2On className="h-12 w-12 rotate-180  " />
              <BsSun className="absolute  text-white left-[0.45rem]" />
            </div>
          )}
        </div>
        <IoCallOutline className="  w-6 h-6  hidden sm:flex" />
        <div className="relative  hidden sm:flex ">
          <IoNotificationsOutline className="w-6 h-6 " />
          <div className="bg-red-400 h-[0.4rem] w-[0.4rem] rounded-full absolute top-0 right-0 "></div>
        </div>
        <div className="flex items-center">
          <div className=" flex flex-col items-end pr-3 pl-8 ">
            <p>Good Evening John</p>
            <p className="text-[14px]">+(1) 345-123-5467</p>
          </div>

          <div className=" flex   ">
            <Image
              src={profile}
              className="rounded-full w-[3rem] h-[3rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
