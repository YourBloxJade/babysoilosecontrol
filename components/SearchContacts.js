import React from "react";
import photo1 from "../assets/profile1.jpg";
import photo2 from "../assets/profile2.jpg";
import photo3 from "../assets/profile3.jpg";
import { RiSearchLine } from "react-icons/ri";
import Profile from "./Profile";
import { MdKeyboardArrowDown } from "react-icons/md";

const SearchContacts = () => {
  const profiles1 = [
    { name: "John Tornton", photo: photo1, message: "Maybe on Friday?" },
    { name: "Amanda Buyns", photo: photo2, message: "See you tomorrow" },
    {
      name: "Russel Hue",
      photo: photo3,
      message: "Good i sent you their adress to their house",
    },
  ];
  const categories = ["From team", "From companies", "All Messages"];
  return (
    <div className="w-[17rem] h-[100vh] bg-[#20232b] flex flex-col items-center pt-4">
      {/* Input */}
      <div className="relative flex  items-center  ">
        <input
          type="text"
          className="bg-[#16171b] placeholder:text-gray-400 p-3 rounded-[1rem] pl-10  px-0 py-3.5 "
          placeholder="Search"
        />
        <RiSearchLine className="absolute text-[19px]  text-gray-400 ml-3" />
      </div>
      {/* Unread */}
      <div className="w-full   ">
        <div className=" mx-4 pt-3">
          <p className="text-gray-400">Unread</p>
          <div className="space-y-1 pt-3">
            {profiles1.map((profile) => (
              <Profile
                name={profile.name}
                photo={profile.photo}
                message={profile.message}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className=" mt-3   w-full">
        <div className="mx-4 space-y-3">
          {categories.map((category) => (
            <div className="w-full text-gray-400 text-[15px] flex items-center justify-between  ">
              <div className="">{category}</div>
              <MdKeyboardArrowDown className="mr-4 text-[19px]" />
            </div>
          ))}
        </div>
      </div>
      {/* Profiles */}
      <div className="w-full   ">
        <div className=" mx-4 pt-3">
          <div className="space-y-1 pt-3">
            {profiles1.map((profile) => (
              <Profile
                name={profile.name}
                photo={profile.photo}
                message={profile.message}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContacts;
