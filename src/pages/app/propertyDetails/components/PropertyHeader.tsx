import React from "react";
import { Star } from "lucide-react";

interface PropertyHeaderProps {
  title: string;
  rating: number;
  reviews: number;
  location: string;
}

export const PropertyHeader = ({
  title,
  rating,
  reviews,
  location,
}: PropertyHeaderProps) => {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 fill-current" />
          <span>{rating}</span>
          <span>·</span>
          <span className="underline">{reviews} reviews</span>
          <span>·</span>
          <span className="underline">{location}</span>
        </div>
      </div>
    </div>
  );
};
