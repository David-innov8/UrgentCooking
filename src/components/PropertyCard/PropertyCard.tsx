import React from "react";
import { Heart } from "lucide-react";

interface PropertyCardProps {
  imageUrl: string;
  location: string;
  price: string;
  rating: number;
  isFavorite?: boolean;
}

export const PropertyCard = ({
  imageUrl,
  location,
  price,
  rating,
  isFavorite,
}: PropertyCardProps) => {
  return (
    <div className="group relative">
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={location}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white">
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-red-500 stroke-red-500" : "stroke-gray-600"
            }`}
          />
        </button>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{location.length > 30 ? `${location.substring(0,30)}...` : location}</h3>
          <div className="flex items-center gap-1">
            <span>★</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mt-1 underline">{price}</p>
      </div>
    </div>
  );
};
