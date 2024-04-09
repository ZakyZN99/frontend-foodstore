import { IoPersonCircleOutline, IoCart } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex  justify-between items-center h-19 max-w-[1540px] mx-auto bg-blue-400 text-white">
      <div className="flex items-center gap-4">
        <img alt="FoodStore" src="" />
        <h1>Food</h1>
        <h1>Drink</h1>
        <h1>Snack</h1>
      </div>
      <div className="flex justify-between items-center gap-3" >
        <div>
          <input></input>
          <button>Search</button>
        </div>
        <IoCart size={30}/>
        <IoPersonCircleOutline size={30}/>
      </div>
    </div>
  );
};

export default Navbar;
