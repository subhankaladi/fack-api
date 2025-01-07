import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { TbBrandShopee } from "react-icons/tb";

// Defining the interface for the Navbar props
export interface NavbarProps {
  cartCount: number; // Prop to receive cart count
}

// Navbar component
const Navbar = ({ cartCount }: NavbarProps) => {
  return (
    <div className="bg-gray-800 text-white fixed w-full top-0 left-0 z-10 py-4 px-6 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        VEGExFRUU <TbBrandShopee/>
      </h1>
      <div className="flex items-center space-x-4">
        <div className="text-lg flex items-center">
          <FaShoppingCart />
          <span className="ml-2">{cartCount}</span>
        </div>
      </div>
    </div>
  );
};

// Default export for the component
export default Navbar;
