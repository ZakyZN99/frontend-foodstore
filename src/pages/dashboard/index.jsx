import Image from "../../assets/img/Image.jpg";
import { FaCartPlus, FaTag } from "react-icons/fa";

export const Dashboard = () => {
  return (
    <div className=" text-white pl-20 max-w-[1440px] mx-auto pt-10">
      <h1 className=" text-lg">Dashboard</h1>
      <div className="pt-2 flex gap-3">
      <h1 className="font-bold ">Tags:</h1>
      <button className="flex items-center">
        <FaTag size={10} />
        <h3>Tag</h3>
      </button>
      </div>
      <div className="flex gap-4">
        <div className=" bg-gray-800 w-72 h-105 border-gray-300 shadow rounded-lg mt-10">
          <img className=" rounded-r-lg" alt="Gambar FOOD" src={Image} />
          <div className="p-3">
            <a href="#">
              <h1>Food Title</h1>
            </a>
            <h2 className="pt-2">Category</h2>
            <button className="flex items-center pt-2">
              <FaTag size={10} />
              <h3>Tag</h3>
            </button>
            <h5 className="mt-2 text-lg">Rp.15.000</h5>
            <button className="flex justify-center border-1 w-20 h-10 items-center align-middle rounded-lg mt-8">
              <FaCartPlus size={25} onClick={() => console.log("CLICKED")} />
            </button>
          </div>
        </div>
        <div className=" bg-gray-800 w-72 h-105 border-gray-300 shadow rounded-lg mt-10">
          <img className=" rounded-r-lg" alt="Gambar FOOD" src={Image} />
          <div className="p-3">
            <a href="#">
              <h1>Food Title</h1>
            </a>
            <h2 className="pt-2">Category</h2>
            <button className="flex items-center pt-2">
              <FaTag size={10} />
              <h3>Tag</h3>
            </button>
            <h5 className="mt-2 text-lg">Rp.15.000</h5>
            <button className="flex justify-center border-1 w-20 h-10 items-center align-middle rounded-lg mt-8">
              <FaCartPlus size={25} onClick={() => console.log("CLICKED")} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
