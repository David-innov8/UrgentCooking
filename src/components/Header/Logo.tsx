import React from "react";
import { Home } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Home className="w-6 h-6" />
      <span className="font-bold text-xl">rent.comfy</span>
    </div>
  );
};
