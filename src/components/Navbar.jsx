import React, { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuBlock = useRef(null);
  const navBtn = useRef(null);

  const handleMenuClick = () => {
    open ? setOpen(false) : setOpen(true);
    console.log("Menu Clicked");
    // if (open) {
    //   menuBlock.current.classList.remove("w-14", "h-14", "rounded-full");
    //   menuBlock.current.classList.add("w-[300px]", "h-[450px]", "bg-slate-200");
    //   navBtn.current.classList.add("float-right");
    // }
  };

  return (
    <>
      <div
        ref={menuBlock}
        className="fixed top-5 right-5 bg-gray-500 w-14 h-14 shadow-lg z-40 rounded-full bg-opacity-50"
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
        {open ? (
          <div className="relative flex flex-col justify-center items-center bg-gray-500 gap-4 mt-2 w-[56px] h-[210px] z-40 bg-opacity-50 rounded-2xl shadow-lg p-4">
            <div className="mx-auto">
              <HomeRoundedIcon />
            </div>
            <div className="mx-auto">
              <DataObjectRoundedIcon />
            </div>
            <div className="mx-auto">
              <AssignmentRoundedIcon />
            </div>
            <div className="mx-auto">
              <TextsmsRoundedIcon />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
