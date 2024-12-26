import React from "react";
import { Home, User } from "lucide-react";
import Logo from "../../assets/images/LOGO.png";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="h-8 flex items-center">
        <img src={Logo} alt="logo" className=" w-full h-full " />
      </div>
      <Navigation />
      <div className="flex bg-green-400 items-center gap-4">
        <button className="text-gray-600 hover:text-gray-900">
          {/* <Home className="w-5 h-5" /> */}
          Lease house
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
