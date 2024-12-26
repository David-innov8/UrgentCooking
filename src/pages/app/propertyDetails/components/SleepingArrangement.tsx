import React from "react";
import { Bed } from "lucide-react";

interface SleepingArrangement {
  roomType: string;
  description: string;
}

interface SleepingArrangementsProps {
  arrangements: SleepingArrangement[];
}

export const SleepingArrangements = ({
  arrangements,
}: SleepingArrangementsProps) => {
  return (
    <div className="py-8 border-t">
      <h2 className="text-xl font-semibold mb-4">Where you'll sleep</h2>
      <div className="grid grid-cols-2 gap-4">
        {arrangements.map((arrangement, index) => (
          <div key={index} className="border rounded-lg p-6">
            <Bed className="w-6 h-6 mb-4" />
            <div className="font-medium">{arrangement.roomType}</div>
            <div className="text-gray-500">{arrangement.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
