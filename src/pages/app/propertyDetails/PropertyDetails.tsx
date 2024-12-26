import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PropertyHeader } from "./components/PropertyHeader";
import { PropertyGallery } from "./components/PropertyGallery";
import { AmenitiesList } from "./components/AmenitiesList";
import { SleepingArrangements } from "./components/SleepingArrangement";
import { BookingCard } from "./components/BookingCard";
import { useFetchPropertyQuery } from "../../../domains/query";
import { Header } from "../../../components/Header/Header";
import { SearchBar } from "../../../components/SearchBar/SearchBar";

export const PropertyDetails = () => {
  const { id } = useParams();
  const {
    data: property,
    isLoading,
    error,
  } = useFetchPropertyQuery(Number(id));

  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">
        Error loading property
      </div>
    );
  if (!property)
    return <div className="text-center py-8">Property not found</div>;

  const mockAmenities = [
    { id: "1", name: "Wifi", icon: "wifi" },
    { id: "2", name: "TV", icon: "tv" },
    { id: "3", name: "Free parking", icon: "parking" },
    { id: "4", name: "Kitchen", icon: "kitchen" },
  ];

  const mockSleepingArrangements = [
    { roomType: "Bedroom", description: "1 queen bed" },
  ];

  return (
    <div className="">
      <Header />
      <SearchBar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <PropertyHeader
          title={property.location}
          rating={property.rating}
          reviews={427}
          location="Lekki, Lagos"
        />

        <div className="mt-6">
          <PropertyGallery
            images={[
              property.imageUrl,
              property.imageUrl,
              property.imageUrl,
              property.imageUrl,
              property.imageUrl,
            ]}
            title={property.location}
          />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <div className="pb-8 border-b">
              <h2 className="text-xl font-semibold">About this place</h2>
              <p className="mt-4 text-gray-600">
                This is a serene apartment at TMPL Apartments located at the
                center of the best part of Lekki. The location is 5 minutes walk
                and drive to major restaurants, malls and recreational centers.
              </p>
            </div>

            <AmenitiesList amenities={mockAmenities} />
            <SleepingArrangements arrangements={mockSleepingArrangements} />
          </div>

          <div>
            <BookingCard
              price={property.price}
              rating={property.rating}
              reviews={427}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
