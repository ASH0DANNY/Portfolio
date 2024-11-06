import React, { useRef, useState } from "react";
import Footer from "./Footer";
import profile_image from "../images/profile.jpg";
import { Link } from "react-router-dom";
import {
  contactInfo,
  introGreeting,
  projects,
  subIntroduction,
  TechnicalSkills,
  yourName,
  yourRole,
} from "../data/PortfolioData";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import EastIcon from "@mui/icons-material/East";
import CustomCursor from "../utils/customCursor";

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
      <CustomCursor />
      <div
        ref={menuBlock}
        className="fixed top-5 right-5 bg-gray-500 w-14 h-14 shadow-lg z-40 rounded-full bg-opacity-50"
      >
        {open ? (
          <button
            ref={navBtn}
            className="w-full h-full cursor-pointer z-30 hover:text-white"
            onClick={handleMenuClick}
          >
            <CloseIcon />
          </button>
        ) : (
          <button
            ref={navBtn}
            className="w-full h-full cursor-pointer z-30 hover:text-white"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </button>
        )}

        {/* Menu Open Block */}
        {open ? (
          <div className="relative flex flex-col justify-center items-center bg-gray-500 gap-4 mt-2 w-[56px] h-auto z-40 bg-opacity-50 rounded-2xl shadow-lg p-4">
            <a href="#homeSection" className="mx-auto">
              <HomeRoundedIcon />
            </a>
            <a href="#tecSkillsSection" className="mx-auto hover:text-white">
              <DataObjectRoundedIcon />
            </a>
            <a href="#projectSection" className="mx-auto hover:text-white">
              <AssignmentRoundedIcon />
            </a>
            <a href="#contactSection" className="mx-auto hover:text-white">
              <TextsmsRoundedIcon />
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
};

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div
        id="homeSection"
        className="md:flex md:items-center md:justify-center w-full h-dvh p-6 md:p-16 bg-slate-200 gap-3 "
      >
        <div className="w-full md:w-1/2 h-[320px] md:h-full bg-white rounded-xl p-7 md:px-24 md:py-36 shadow-lg">
          <p className="text-gray-400 text-sm md:text-base">{introGreeting}</p>
          <p className="text-purple-700 text-3xl md:text-5xl mt-1 font-roboto font-bold">
            {yourName}
          </p>
          <p className="text-gray-500 text-xl md:text-xl mt-1">{yourRole}</p>
          <p className="text-purple-500 font-JetBrainsMono text-base mt-3 md:mt-5">
            {subIntroduction}
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-5 md:mt-0 h-[280px] md:h-full bg-purple-100 rounded-xl p-9 md:p-10 flex items-center justify-center shadow-lg">
          <div className="w-[181px] md:w-[270px] h-[181px] md:h-[270px] rounded-2xl bg-purple-200 shadow-purple-700 shadow-2xl rotate-12">
            <img
              src={profile_image}
              alt="profile_image"
              className="inset-0 h-full w-full rounded-2xl object-cover -rotate-12"
            />
          </div>
        </div>
      </div>
      <div
        id="tecSkillsSection"
        className="w-full h-auto md:px-10 py-14 md:py-14 flex justify-center items-center"
      >
        <div className="w-[95%] bg-purple-100 rounded-xl py-5 md:p-10">
          <p className="text-4xl text-center font-knewave text-purple-600">
            From Concept to Code 🛠️
          </p>
          <p className="text-xl text-center font-roboto text-purple-400">
            My Technical Skills
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-10 bg-gray-300">
              <ul>
                {TechnicalSkills.backend.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-gray-300">
              <ul>
                {TechnicalSkills.frontend.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-gray-300">
              <ul>
                {TechnicalSkills.core.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projectSection"
        className="w-full bg-purple-950 px-5 md:px-10 py-10 md:py-14"
      >
        <p className="text-3xl text-center font-knewave text-purple-50">
          The Projects That Define Me 📂
        </p>
        <p className="text-xl text-center font-roboto text-purple-400">
          My Projects
        </p>
        <div className="mt-7 md:mt-10 w-full flex flex-wrap justify-center items-center gap-8">
          {projects.map((item) => (
            <div
              key={item.key}
              className="bg-purple-800 hover:bg-purple-700 hover:shadow-lg mt-5 md:mt-10 p-7 rounded-lg"
            >
              <p className="text-2xl text-purple-100 font-bold mb-4">
                {item.heading}
              </p>
              <p className="text-lg text-purple-300 mb-3">{item.desc}</p>
              <p className="text-sm text-purple-400 mb-4">
                {item.tec_used.map((value) => value + " ")}
              </p>
              <p className="text-sm text-blue-400" dir="rtl">
                <Link
                  to={`//${item.project_link}`}
                  target="_blank"
                  className="hover:underline"
                >
                  <EastIcon />
                  View Project
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        id="contactSection"
        className="w-full md:flex justify-center items-center my-11 md:my-16 p-3 md:p-12"
      >
        <div className="flex flex-col flex-wrap gap-3 w-full md:w-2/5 justify-center items-center">
          {contactInfo.map((item) => (
            <div
              key={item.key}
              className="bg-purple-50 w-1/2 hover:bg-purple-200 shadow-md hover:shadow-lg p-7 rounded-lg"
            >
              <p className="text-base text-center font-bold">
                {item.media_name}
              </p>
              <p className="text-sm text-center">{item.meda_data}</p>
              <p dir="rtl">
                <Link
                  onClick={item.media_link}
                  className="text-sm text-center text-blue-500 hover:underline"
                >
                  <EastIcon /> {item.media_name} now
                </Link>
              </p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-3/5 shadow-xl py-6 px-3 md:py-20 md:px-10 bg-purple-200">
          <p className="text-3xl font-bold text-center">
            Let's Build Something Amazing Together 🚀
          </p>
          <div className="w-3/4 mr-auto ml-auto mt-10">
            <p className="text-lg mt-3 ">
              Whether you have a project in mind, want to collaborate, or simply
              want to chat about tech, I’d love to hear from you! I’m always
              excited to connect with like-minded individuals and creative
              problem-solvers.
            </p>

            <p className="text-lg mt-7">
              Feel free to drop me a message, and let's turn ideas into reality!
              💬
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
