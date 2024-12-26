import React from "react";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between gap-4 p-2 rounded-full border shadow-lg backdrop-blur bg-white">
        <div className="w-56 pl-4">
          <label className="block text-sm">Where</label>
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full outline-none text-xs"
          />
        </div>
        <div className="border-l px-2">
          <label className="block text-sm">Check in</label>
          <input type="text" placeholder="Add dates" className="outline-none text-xs" />
        </div>
        <div className="border-l px-2">
          <label className="block text-sm">Check out</label>
          <input type="text" placeholder="Add dates" className="outline-none text-xs" />
        </div>
        <div className="border-l px-2">
          <label className="block text-sm">Size</label>
          <input type="text" placeholder="48dm" className="outline-none text-xs" />
        </div>
        <div className="border-l px-2">
          <label className="block text-sm">Who</label>
          <input
            type="text"
            placeholder="Add guests"
            className="outline-none text-xs"
          />
        </div>
        <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
