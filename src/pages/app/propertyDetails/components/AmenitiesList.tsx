import React from "react";
import { Wifi, Tv, Car, Coffee } from "lucide-react";

interface Amenity {
  id: string;
  name: string;
  icon: string;
}

interface AmenitiesListProps {
  amenities: Amenity[];
}

const iconMap: Record<string, React.ElementType> = {
  wifi: Wifi,
  tv: Tv,
  parking: Car,
  kitchen: Coffee,
};

export const AmenitiesList = ({ amenities }: AmenitiesListProps) => {
  return (
    <div className="py-8 border-t">
      <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity) => {
          const Icon = iconMap[amenity.icon] || Coffee;
          return (
            <div key={amenity.id} className="flex items-center gap-4">
              <Icon className="w-6 h-6" />
              <span>{amenity.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
