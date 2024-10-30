import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full h-dvh p-16 bg-slate-200 gap-3">
        <div className="w-1/2 h-full bg-white rounded-lg pl-20">
          <p className="text-purple-700 text-5xl font-bold">Left Heading</p>
          <p className="text-purple-500 text-3xl mt-5">Left Description</p>
        </div>
        <div className="w-1/2 h-full bg-purple-100 rounded-2xl p-10 flex items-center justify-center">
          <div className="w-[350px] h-[350px] rounded-2xl bg-purple-200 ">
            img
          </div>
        </div>
      </div>
      <div className="w-full h-[400px]">Rest Lines</div>
      <Footer />
    </>
  );
};

export default LandingPage;
