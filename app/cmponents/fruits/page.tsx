"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../navbar/page";
import { FaShoppingCart } from "react-icons/fa"; // Importing cart icon from React Icons

interface User {
  name: string;
  price: string;
  id: string;
  image: string;
}

export default function Fruits() {
  const [users, setUsers] = useState<User[]>([]);
  const [cartCount, setCartCount] = useState<number>(0); // To track the number of items in the cart

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://677d5b464496848554ca40f6.mockapi.io/testmockapi"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle "Add to Cart"
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />

      <div className="px-6 py-12 mt-16">
        <h1 className="text-3xl font-bold mb-8">Fruits List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={user.image}
                  alt={user.name}
                  className="w-full h-64 object-cover"
                  width={500}
                  height={500}
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
                  <button className="text-gray-100 font-semibold text-lg"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                  <p className="text-gray-700 text-sm">${user.price}</p>
                </div>
                <div className="text-lg text-gray-600">
                  <button
                    className="text-black font-semibold text-lg"
                    onClick={addToCart} // Add item to the cart on click
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
