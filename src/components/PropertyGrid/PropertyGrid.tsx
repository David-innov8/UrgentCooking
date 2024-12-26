import React from "react";
import { Link } from "react-router-dom";
import { PropertyCard } from "../PropertyCard/PropertyCard";
import { Property } from "../../domains/types";

interface PropertyGridProps {
  properties: Property[];
}

export const PropertyGrid = ({ properties }: PropertyGridProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {
        properties.length === 0 ? (
          <div className="text-center py-8 text-red-500">
            No properties found
          </div>
        ): 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <Link key={property.id} to={`/property/${property.id}`}>
            <PropertyCard
              imageUrl={property.imageUrl}
              location={property.location}
              price={property.price}
              rating={property.rating}
            />
          </Link>
        ))}
      </div>
      }
    </div>
  );
};
