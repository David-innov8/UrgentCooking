import React from "react";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center gap-4 p-2 rounded-full border shadow-sm bg-white">
        <div className="flex-1 px-4">
          <label className="block text-sm text-gray-500">Where</label>
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full outline-none"
          />
        </div>
        <div className="border-l px-4">
          <label className="block text-sm text-gray-500">Check in</label>
          <input type="text" placeholder="Add dates" className="outline-none" />
        </div>
        <div className="border-l px-4">
          <label className="block text-sm text-gray-500">Check out</label>
          <input type="text" placeholder="Add dates" className="outline-none" />
        </div>
        <div className="border-l px-4">
          <label className="block text-sm text-gray-500">Size</label>
          <input type="text" placeholder="48dm" className="outline-none" />
        </div>
        <div className="border-l px-4">
          <label className="block text-sm text-gray-500">Who</label>
          <input
            type="text"
            placeholder="Add guests"
            className="outline-none"
          />
        </div>
        <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
