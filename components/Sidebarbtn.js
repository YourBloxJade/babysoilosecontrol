import React from "react";

const Sidebarbtn = ({ title, icon, number }) => {
  return (
    <li className="text-gray-500  flex items-center justify-between text-[20px] space-x-2  hover:bg-yellow-200 hover:text-gray-600 py-3 rounded-[1rem] duration-200 ease-out px-4">
      <div className="flex items-center">
        <div className="">{icon}</div>
        <div className="pl-2"> {title}</div>
      </div>

      <div className="">{number}</div>
    </li>
  );
};

export default Sidebarbtn;
