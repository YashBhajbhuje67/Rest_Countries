import React from "react";
import MoonLight from "../assets/moonLight.svg";

const Navbar = () => {
  return (
    <div className="border px-10 py-4 flex justify-between items-center ">
      <div className="font-bold text-2xl">Where in the world?</div>
      {/* <div className=" flex gap-4 align-center">
        <img src={MoonLight} alt="image of dark" className="h-6" />
        <div>Dark Mode</div>
      </div> */}
    </div>
  );
};

export default Navbar;
