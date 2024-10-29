import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <>
      <div className="w-20 h-20 bg-white shadow-lg z-40">
        <button className="w-full h-full cursor-pointer hover:bg-slate-400">
          <MenuIcon />
        </button>
      </div>
    </>
  );
};

export default Navbar;
