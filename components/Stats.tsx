import React from "react";

interface Item {
  id: string;
  packed: boolean;
  // Add other required properties based on your application
}

interface StatsProps {
  items: Item[];
}
const Stats = ({ items = [] }: StatsProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center text-black font-bold mt-8">
        There are no items in your list yet.
      </div>
    );
  }
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100) || 0;
  return (
    <div className="text-center text-black font-bold mt-8">
      {percentage === 100
        ? "You packed them all, you are set to go"
        : `You have ${numItems} items on your list, and you packed ${numPackedItems} ${percentage}%`}
    </div>
  );
};

export default Stats;
