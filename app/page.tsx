"use client";
import { useState } from "react";
import { Item } from "@/types";

// Components
import Form from "@/components/Form";
import Logo from "@/components/Logo";
import PackingList from "@/components/PackingList";
import Stats from "@/components/Stats";

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  function handleAddItems(item: Item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: Item["id"]) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: Item["id"]) {
    console.log("Toggling item with id:", id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Function to clear the list
  function handleClearList() {
    const confirmClear = confirm(
      "Are you sure you want to clear the list? This action cannot be undone."
    );
    if (confirmClear) return setItems([]);
  }
  return (
    <>
      <div className="@container h-full w-full bg-background">
        <div className="flex flex-col items-center  px-4 sm:px-6 md:px-8 py-12 max-w-7xl mx-auto min-h-screen">
          <div className="w-full  mx-auto   ">
            <div className="flex justify-center items-center">
              <Logo />
            </div>

            <div className="mt-8 text-center">
              <h1 className="text-green-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Welcome to Far Edge Collection
              </h1>
            </div>
            <div className="bg-yellow-400 w-full lg:w-full sm:w-2xl mx-auto mt-8 p-10 rounded-lg shadow-lg">
              <Form onAddItems={handleAddItems} />
            </div>
          </div>
          <div className="w-full h-full">
            <div className="bg-gray-400 w-full lg:w-full sm:w-2xl mx-auto mt-8 p-10 rounded-lg shadow-lg break-words text-wrap overflow-hidden">
              <PackingList
                items={items}
                onDeleteItems={handleDeleteItem}
                onToggleItems={handleToggleItem}
                onClearList={handleClearList}
              />
            </div>

            <Stats items={items} />
          </div>
        </div>
      </div>
    </>
  );
}
