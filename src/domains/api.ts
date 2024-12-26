import { Property } from "./types";


export async function fetchProperties(): Promise<Property[]> {
  // Simulated API call - replace with real API endpoint
  return [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Tranquil Haven, Royal Pine, Lekki, Lagos",
      price: "₦55,000 total before taxes",
      rating: 4.92,
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Tranquil Haven, Royal Pine, Lekki, Lagos",
      price: "₦55,000 total before taxes",
      rating: 4.92,
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Tranquil Haven, Royal Pine, Lekki, Lagos",
      price: "₦55,000 total before taxes",
      rating: 4.92,
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      location: "Tranquil Haven, Royal Pine, Lekki, Lagos",
      price: "₦55,000 total before taxes",
      rating: 4.92,
    },
   
  ];
}

export async function fetchPropertyById(id: number): Promise<Property | null> {
  const properties = await fetchProperties();
  return properties.find((p) => p.id === id) ?? null;
}
