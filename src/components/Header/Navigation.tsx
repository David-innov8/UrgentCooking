import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex gap-6">
      <NavLink
        end
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[##222222] font-semibold" : "text-[#6A6A6A] hover:text-gray-900"
        }
      >
        Service apartment
      </NavLink>
      <NavLink
        end
        to="/rent"
        className={({ isActive }) =>
          isActive ? "text-[##222222] font-semibold" : "text-[#6A6A6A] hover:text-gray-900"
        }
      >
        House rent
      </NavLink>
    </nav>
  );
};
