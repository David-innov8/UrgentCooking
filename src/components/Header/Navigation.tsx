import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex gap-6">
      <Link
        to="/service-apartment"
        className="text-gray-600 hover:text-gray-900"
      >
        Service apartment
      </Link>
      <Link to="/house-rent" className="text-gray-600 hover:text-gray-900">
        House rent
      </Link>
    </nav>
  );
};
