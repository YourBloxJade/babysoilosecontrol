import Image from "next/image";
import React from "react";

const Profile = ({ name, photo, message }) => {
  return (
    <div className="flex items-center text-white hover:bg-[#16171b] p-1 rounded-[0.8rem] whitespace-nowrap shrink-0">
      <div className="w-10 h-10  flex shrink-0 ml-2">
        <Image src={photo} className="rounded-full object-cover shrink-0" />
      </div>
      <div className=" pl-3 truncate mr-2 text-[14px]">
        <p>{name}</p>
        <p className="text-[11px] text-gray-400">+(1) 345-123-5432</p>
        <p className="text-[13px] text-gray-400 truncate pt-1">{message}</p>
      </div>
    </div>
  );
};

export default Profile;
