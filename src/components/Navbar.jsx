import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    open ? setOpen(false) : setOpen(true);
    console.log("Menu Clicked");
  };

  return (
    <>
      <div className="fixed top-5 right-5 w-14 h-14 shadow-lg z-40 rounded-full">
        {open ? (
          <button
            className="w-full h-full cursor-pointer z-30"
            onClick={handleMenuClick}
          >
            <CloseIcon />
          </button>
        ) : (
          <button
            className="w-full h-full cursor-pointer z-30"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </button>
        )}

        {/* Menu Open Block */}
        {open ? (
          <div className="relative -top-8 right-[200px] w-[280px] h-[350px] bg-white"></div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
