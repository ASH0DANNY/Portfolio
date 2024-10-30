import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import profile_image from "../images/profile.jpg";

const LandingPage = () => {
  const TechnicalSkills = [
    "React JS",
    "Node JS",
    "Python",
    "Java",
    "C++",
    "Mongo DB",
    "Firebase",
    "Tailwind CSS",
    "MySQL",
    "PHP",
  ];
  return (
    <>
      <Navbar />
      <div className="md:flex md:items-center md:justify-center w-full h-dvh p-6 md:p-16 bg-slate-200 gap-3">
        <div className="w-full md:w-1/2 h-[320px] md:h-full bg-white rounded-xl p-7 md:px-24 md:py-36 shadow-lg">
          <p className="text-purple-700 text-5xl font-bold">Left Heading</p>
          <p className="text-purple-500 text-3xl mt-5">Left Description</p>
        </div>
        <div className="w-full md:w-1/2 mt-5 md:mt-0 h-[280px] md:h-full bg-purple-100 rounded-xl p-9 md:p-10 flex items-center justify-center shadow-lg">
          <div className="w-[181px] md:w-[270px] h-[181px] md:h-[270px] rounded-2xl bg-purple-200 shadow-purple-700 shadow-2xl">
            <img
              src={profile_image}
              alt="profile_image"
              className="inset-0 h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto md:px-10 py-14 md:py-14 flex justify-center items-center">
        <div className="w-[95%] bg-slate-300 rounded-xl py-5 md:p-14">
          <p className="text-4xl text-center text-purple-600 font-bold">
            Technical Skills
          </p>
          <div className="flex flex-wrap justify-center items-center mt-1 p-[10px] md:p-20 space-x-3 md:space-x-12">
            {TechnicalSkills.map((item, index) => (
              <span key={index} className="p-2 md:p-3 my-4 bg-purple-200 rounded-2xl text-purple-700 text-[17px] md:text-xl font-bold shadow-md">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
