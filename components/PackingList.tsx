import React from "react";
import { FaWindowClose } from "react-icons/fa";

interface ItemType {
  id: number;
  name: string;
  quantity: number;
  packed: boolean;
}

const initialItems = [
  { id: 1, name: "T-shirt", quantity: 2, packed: false },
  { id: 2, name: "Jeans", quantity: 1, packed: false },
  { id: 3, name: "Socks", quantity: 5, packed: true },
];

function Item({ item }: { item: ItemType }) {
  return (
    <li className="font-bold text-gray-800 flex justify-between  gap-3 items-center">
      <span
        className="flex items-center gap-2"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.name}{" "}
      </span>
      <button>
        <FaWindowClose />
      </button>
    </li>
  );
}

const PackingList = () => {
  return (
    <ul className="flex mx-auto justify-between items-center p-2  w-2/4 ">
      {initialItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default PackingList;
