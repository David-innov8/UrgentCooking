import React from "react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 rounded-xl overflow-hidden">
      <div className="col-span-2 row-span-2">
        <img
          src={images[0]}
          alt={`${title} - Main`}
          className="w-full h-full object-cover"
        />
      </div>
      {images.slice(1, 5).map((image, index) => (
        <div key={index} className="aspect-square">
          <img
            src={image}
            alt={`${title} - ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};
