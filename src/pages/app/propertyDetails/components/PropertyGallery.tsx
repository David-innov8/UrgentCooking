import React from "react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  return (
    <div className="grid grid-cols-4 gap-5 rounded-xl overflow-hidden">
      <div className="col-span-2 row-span-2">
        <img
          src={images[0]}
          alt={`${title} - Main`}
          className="w-full max-h-[600px] object-cover"
        />
      </div>
      {images.slice(1, 5).map((image, index) => (
        <div key={index} className="aspect-square">
          <img
            src={image || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
            alt={`${title} - ${index + 1}`}
            className="w-full max-h-[285px] h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};
