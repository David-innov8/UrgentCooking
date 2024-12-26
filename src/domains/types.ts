export interface Test {
  name: string;
}

export interface Property {
  id: number;
  imageUrl: string;
  location: string;
  price: string;
  rating: number;
}
export interface PropertyDetails {
  id: number;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  host: {
    name: string;
    isSuperhost: boolean;
    responseTime: string;
  };
  amenities: {
    id: string;
    name: string;
    icon: string;
  }[];
  sleepingArrangements: {
    roomType: string;
    description: string;
  }[];
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}
