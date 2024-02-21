import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsBookmarkCheck } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";

import { ImBlocked } from "react-icons/im";
import { HiOutlineTrash } from "react-icons/hi";
import { HiInboxArrowDown } from "react-icons/hi2";
import { GiBottomRight3DArrow } from "react-icons/gi";
import Sidebarbtn from "../components/Sidebarbtn";

const Inbox = () => {
  const inboxbtn = [
    { title: "Pinned", icon: <MdOutlineMarkEmailUnread />, number: 5 },
    { title: "All", icon: <IoChatbubbles />, number: 35 },
    { title: "Live Chat", icon: <HiInboxArrowDown />, number: 2 },
    { title: "Archived", icon: <BsBookmarkCheck /> },
    { title: "Blocked", icon: <ImBlocked /> },

    { title: "Trash", icon: <HiOutlineTrash /> },
  ];
  return (
    <div className="h-[100vh] flex flex-col items-center w-[15rem] bg-black ">
      {/* Top */}
      <div className=" px-4 ">
        <ul className="  space-y-0 pt-8 pl-4">
          {inboxbtn.map((btn) => (
            <Sidebarbtn title={btn.title} icon={btn.icon} number={btn.number} />
          ))}
        </ul>
      </div>

      {/* Bottom */}
      <div className="bg-purple-500 w-[11rem] h-[15rem]  rounded-[1rem] text-white flex  flex-col items-center justify-end text-center px-2 relative pb-4 mt-20">
        <p className="pt-4 text-[19px]">Get Premium</p>
        <p className="text-[14px] pt-2">
          Increase the quantity responses to your professional resume
        </p>
        <button className="mt-2 bg-black p-2.5 px-3.5 rounded-[1rem]">
          Buy Premium
        </button>
        <div className="absolute -top-16">
          <GiBottomRight3DArrow className="w-32 h-32  text-white -rotate-[80deg] " />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
