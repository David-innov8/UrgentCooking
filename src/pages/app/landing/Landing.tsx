import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProperties } from "../../../domains/api";
import { SearchBar } from "../../../components/SearchBar/SearchBar";
import { PropertyGrid } from "../../../components/PropertyGrid/PropertyGrid";
import { Header } from "../../../components/Header/Header";
export const Landing = () => {
  const {
    data: properties,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });

  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">
        Error loading properties
      </div>
    );

  return (
    <main className="py-6">
      <Header />
      <SearchBar />
      <div className="mt-8">
        <PropertyGrid properties={properties || []} />
      </div>
    </main>
  );
};
