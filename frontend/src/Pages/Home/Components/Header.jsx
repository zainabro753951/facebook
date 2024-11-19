import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { IoIosContacts } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { VscGame } from "react-icons/vsc";
const Header = () => {
  return (
    <div className="p-2 grid grid-cols-3">
      <div className="flex gap-3 items-center">
        <div className="w-[45px] h-[45px] bg-themeBlue text-4xl flex items-end justify-center rounded-full text-white">
          <FaFacebookF />
        </div>
        <div className="flex gap-5 items-center px-3 bg-[#f0f2f5] rounded-full w-[60%]">
          <IoIosSearch className="text-2xl" />
          <input
            className="w-full py-2 bg-transparent outline-none"
            type="search"
            id=""
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex items-center">
        <span className="px-10 py-3 text-3xl border-b-2 border-themeBlue text-themeBlue ">
          <MdHomeFilled />
        </span>
        <span className="px-10 py-3 text-3xl text-gray-500 transition-all duration-100 hover:bg-gray-200 rounded-md cursor-pointer">
          <AiOutlineShop />
        </span>
        <span className="px-10 py-3 text-3xl text-gray-500 transition-all duration-100 hover:bg-gray-200 rounded-md cursor-pointer">
          <IoIosContacts />
        </span>
        <span className="px-10 py-3 text-3xl text-gray-500 transition-all duration-100 hover:bg-gray-200 rounded-md cursor-pointer">
          <VscGame />
        </span>
      </div>
      <div className="flex items-center justify-end gap-3">
        <span className="text-3xl bg-gray-300 p-2 rounded-full transition-all duration-100 hover:bg-gray-400">
          <CgMenuGridR />
        </span>
        <span className="text-2xl bg-gray-300 p-3 rounded-full transition-all duration-100 hover:bg-gray-400">
          <FaFacebookMessenger />
        </span>
        <span className="text-2xl bg-gray-300 p-3 rounded-full transition-all duration-100 hover:bg-gray-400">
          <IoNotifications />
        </span>
        <span className="text-2xl bg-gray-300 p-3 rounded-full transition-all duration-100 hover:bg-gray-400">
          <FaRegUserCircle />
        </span>
      </div>
    </div>
  );
};

export default Header;
