import React, { useState } from "react";
import { Calendar, Star } from "lucide-react";
import type { DateRange } from "../../../../domains/types";

interface BookingCardProps {
  price: string;
  rating: number;
  reviews: number;
}

export const BookingCard = ({ price, rating, reviews }: BookingCardProps) => {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
  });

  return (
    <div className="border rounded-xl p-6 shadow-lg sticky top-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xl font-semibold">{price}</span>
          <span className="text-gray-500"> / night</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 fill-current" />
          <span>{rating}</span>
          <span>·</span>
          <span className="underline">{reviews} reviews</span>
        </div>
      </div>

      <div className="border rounded-lg mb-4">
        <div className="grid grid-cols-2 border-b">
          <div className="p-3 border-r">
            <div className="text-xs font-medium">CHECK-IN</div>
            <div>Add date</div>
          </div>
          <div className="p-3">
            <div className="text-xs font-medium">CHECKOUT</div>
            <div>Add date</div>
          </div>
        </div>
        <div className="p-3">
          <div className="text-xs font-medium">GUESTS</div>
          <div>1 guest</div>
        </div>
      </div>

      <button className="w-full bg-black text-white rounded-lg py-3 font-medium">
        Reserve
      </button>

      <div className="mt-4 text-center text-gray-500 text-sm">
        You won't be charged yet
      </div>
    </div>
  );
};
