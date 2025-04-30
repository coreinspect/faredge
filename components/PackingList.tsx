import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import type { Item } from "@/types";

interface DeleteProps {
  onDeleteItems: (itemId: string) => void;
  onToggleItems: (itemId: string) => void;
}

const Item: React.FC<DeleteProps & { item: Item }> = ({
  item,
  onDeleteItems,
  onToggleItems,
}) => {
  return (
    <li className="font-bold text-gray-800 flex justify-center gap-3 items-center bg-amber-50 py-3 rounded-md text-wrap break-words">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          onToggleItems(item.id);
        }}
      />
      <span
        className="flex items-center gap-2 break-words"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>
        <FaWindowClose />
      </button>
    </li>
  );
};
const PackingList: React.FC<{
  items: Item[];
  onDeleteItems: (itemId: string) => void;
  onToggleItems: (itemId: string) => void;
  onClearList: () => void;
}> = ({ items, onDeleteItems, onToggleItems, onClearList }) => {
  // Sort items based on the selected criteria
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = [...items];

  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "packed") {
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  }

  return (
    <>
      <ul className="grid grid-cols-3 gap-4 mx-auto p-2 w-2/4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="w-full flex justify-center items-center mt-10 gap-2">
        <div className="h-10 max-w-max bg-amber-200 text-black px-3 flex justify-center rounded-full">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="outline-none bg-amber-200 text-black px-3 rounded-full"
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
        </div>
        <button
          onClick={onClearList}
          className="bg-red-500 text-white px-3 py-2 rounded-full"
        >
          Clear List
        </button>
      </div>
    </>
  );
};

export default PackingList;
