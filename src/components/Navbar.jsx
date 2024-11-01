import React, { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuBlock = useRef(null);
  const navBtn = useRef(null);

  const handleMenuClick = () => {
    open ? setOpen(false) : setOpen(true);
    console.log("Menu Clicked");
    if (open) {
      menuBlock.current.classList.remove("w-14", "h-14", "rounded-full");
      menuBlock.current.classList.add("w-[300px]", "h-[450px]", "bg-slate-200");
      navBtn.current.classList.add("float-right");
    } else {
      menuBlock.current.classList.add("w-14", "h-14", "rounded-full");
      menuBlock.current.classList.remove(
        "w-[300px]",
        "h-[450px]",
        "bg-slate-200"
      );
      navBtn.current.classList.add("float-right");
    }
  };

  return (
    <>
      <div
        ref={menuBlock}
        className="fixed top-5 right-5 w-14 h-14 shadow-lg z-40 rounded-full border-green-300"
      >
        {open ? (
          <button
            ref={navBtn}
            className="w-full h-full cursor-pointer z-30"
            onClick={handleMenuClick}
          >
            <CloseIcon />
          </button>
        ) : (
          <button
            ref={navBtn}
            className="w-full h-full cursor-pointer z-30"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </button>
        )}

        {/* Menu Open Block */}
        {/* {open ? (
          <div className="relative right-[200px] w-[280px] h-[350px] bg-white"></div>
        ) : null} */}
      </div>
    </>
  );
};

export default Navbar;
