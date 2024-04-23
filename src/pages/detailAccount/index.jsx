import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const AccountDetails = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="text-white pl-20 max-w-[1440px] mx-auto">
      <form className="max-w-[900px] border-1 p-3 mx-40 mt-10" onSubmit={handleSubmit}>
        <h1 className=" text-lg pb-8 text-left font-semibold">
          Account
        </h1>
        <div className="border-1 flex">
            <div className="flex">
                <button>Profil</button>
                <button>Order</button>
                <button>Address</button>
                <button>Logout</button>
            </div>
        </div>
      </form>
    </div>
  );
};
