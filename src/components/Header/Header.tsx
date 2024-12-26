import React from "react";
import { ChevronDown, Menu, User2 } from "lucide-react";
import { Navigation } from "./Navigation";

import flag from "../../assets/images/nigeria logo.png"
import Logo from "../../assets/images/LOGO.png";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="h-8 flex items-center">
        <img src={Logo} alt="logo" className=" w-full h-full " />
      </div>
      <Navigation />
      <div className="flex items-center items-center gap-5">
        <button className="text-gray-600 hover:text-gray-900 text-[10px] text-[#222222]">
          Lease house
        </button>
        <button className="flex items-center text-[10px] gap-1">
          <img src={flag} alt="flag" className="pr-2" />
          Lagos <ChevronDown size={15} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 flex items-center justify-between gap-2 border border-[#DDDDDD] px-3 py-1">
          <Menu size={15}/>
          <User2 size={30} className="bg-black text-white rounded-full p-1" />
        </button>
      </div>
    </header>
  );
};
