import { useState } from "react";
import {
  IoPersonCircleOutline,
  IoCart,
} from "react-icons/io5";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-[1440px] mx-auto bg-gray-900 text-white pl-10 pr-10">
      <div className="flex items-center gap-4">
        <a href="#"><h1>FOODSTORE</h1></a>
        <h1>Food</h1>
        <h1>Drink</h1>
        <h1>Snack</h1>
      </div>
      <div className="flex justify-between items-center gap-3">
        <div className="flex gap-3">
          <input placeholder="Cari di FoodStore" className=" placeholder-black w-100 h-7 p-2 text-black"/>
          <button className="border-1 rounded-md w-60 h-8">Search</button>
        </div>
        <button>
          <IoCart size={30} onClick={()=> console.log("CLICKED")} />
        </button>
        <button className="flex items-center gap-1"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}>
          <IoPersonCircleOutline size={30} onClick={()=> console.log("CLICKED")} title="Nama" />
          <span className="text-sm font-medium">Nama</span>
        </button>
        {isDropdownOpen && (
        <div className="absolute right-[200px] mt-[150px] w-40 bg-white border border-gray-200 shadow-lg rounded-md z-10 text-white bg-transparent">
          {/* Dropdown content goes here */}
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
