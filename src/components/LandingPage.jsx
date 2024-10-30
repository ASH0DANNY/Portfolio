import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import profile_image from "../images/profile.jpg";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="md:flex md:items-center md:justify-center w-full h-dvh p-6 md:p-16 bg-slate-200 gap-3">
        <div className="w-full md:w-1/2 h-[280px] md:h-full bg-white rounded-xl p-7 md:p-10 shadow-lg">
          <p className="text-purple-700 text-5xl font-bold">Left Heading</p>
          <p className="text-purple-500 text-3xl mt-5">Left Description</p>
        </div>
        <div className="w-full md:w-1/2 h-[280px] md:h-full bg-purple-100 rounded-xl p-9 md:p-10 flex items-center justify-center shadow-lg">
          <div className="w-[181px] md:w-[270px] h-[181px] md:h-[270px] rounded-2xl bg-purple-200 shadow-2xl">
            <img
              src={profile_image}
              alt="profile_image"
              className="inset-0 h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[400px]">Rest Lines</div>
      <Footer />
    </>
  );
};

export default LandingPage;
