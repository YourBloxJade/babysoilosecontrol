import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Button = ({ title, icon }) => {
  return (
    <div className=" relative items-center space-x-1   ">
      <div className="flex items-center" onClick={() => changeResumeState()}>
        <div className="  text-[20px]">{icon}</div>
        <div className="pl-2">{title}</div>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Button;
