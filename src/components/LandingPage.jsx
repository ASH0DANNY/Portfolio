import React, { useRef, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {
  aboutParagraph,
  contactInfo,
  CVDriveLink,
  QualificationData,
  TechnicalSkills,
} from "../data/PortfolioData";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import EastIcon from "@mui/icons-material/East";
import CustomCursor from "../utils/customCursor";
import MonitorIcon from "@mui/icons-material/Monitor";
import StorageIcon from "@mui/icons-material/Storage";
import DataObjectIcon from "@mui/icons-material/DataObject";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import GetProjects from "./GetProjects";
import GetIntroData from "./GetIntroData";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

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
            <a href="#aboutmeSection" className="mx-auto">
              <PersonIcon />
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
  const [successAlert, setSuccessAlert] = useState(false);
  const [warningAlert, setWarningAlert] = useState(false);
  const [uName, setuName] = useState("");
  const [uEmail, setuEmail] = useState("");
  const [uComment, setuComment] = useState("");
  const dataref = collection(db, "queries");

  const handleSubmit = () => {
    let formData = { name: "", email: "", comment: "" };
    if (uName && uEmail && uComment !== "") {
      formData = {
        name: uName,
        email: uEmail,
        comment: uComment,
      };
      try {
        addDoc(dataref, formData);
        console.log("Data added");
      } catch (e) {
        console.log(e);
      }

      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);

        setuName("");
        setuEmail("");
        setuComment("");
      }, 2000);
    } else {
      setWarningAlert(true);
      setTimeout(() => {
        setWarningAlert(false);
      }, 2000);
    }
  };

  return (
    <>
      <Navbar />

      <div
        id="homeSection"
        className="flex-col md:flex md:flex-wrap md:items-center md:justify-center w-full h-screen p-6 md:p-16 bg-slate-200 gap-3"
        // bg-gradient-to-r from-purple-800 via-purple-500 to-purple-200 glow-effect //for second effect
      >
        <GetIntroData />
      </div>

      {/* About ME Section */}
      <div
        id="aboutmeSection"
        className="w-full pt-12 md:pt-16 pb-20 px-10 bg-purple-950"
      >
        <div>
          <p className="text-2xl md:text-3xl text-center font-knewave text-purple-50">
            Some Lines 👋
          </p>
          <p className="text-lg md:text-xl text-center font-roboto text-purple-400">
            About Me
          </p>
        </div>
        <div className="w-full mt-5 p-2 flex justify-center items-center gap-10">
          <Button
            variant="contained"
            onClick={() => window.open(CVDriveLink, "_blank")}
          >
            View CV
          </Button>
          <a href="#contactSection">
            <Button variant="contained">Contact Me</Button>
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-7 justify-center items-center border-b-gray-300">
          <div className="w-full md:w-[50%] h-full bg-purple-800 rounded-lg shadow-inner">
            <p className="text-purple-200 text-base p-5 text-justifyp-5 rounded-lg shadow-inner">
              {aboutParagraph}
            </p>
          </div>

          <div className="mt-3 w-full md:w-[47%] rounded-lg shadow-inner grid grid-cols-2 justify-items-center gap-2">
            {QualificationData.map((item) => (
              <div
                key={item.key}
                className="bg-purple-800 hover:bg-blue-600 p-3 w-full text-purple-200 rounded-lg"
              >
                <span className="text-lg text-purple-100 font-bold underline">
                  {item.degreeName}
                </span>
                {item.emoji}
                <p className="text-sm text-purple-100 pt-3">{item.insName}</p>
                <p className="text-sm text-blue-400 pt-1">{item.duaration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div
        id="tecSkillsSection"
        className="w-full h-auto md:px-10 py-14 md:py-14 flex justify-center items-center"
      >
        <div className="w-[95%] bg-purple-100 rounded-xl py-5 md:p-10">
          <p className="text-2xl md:text-3xl text-center font-knewave text-purple-600">
            From Concept to Code 🛠️
          </p>
          <p className="text-lg md:text-xl text-center font-roboto text-purple-400">
            My Technical Skills
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">
            <div className="w-2/3 md:w-auto p-6 md:p-10 bg-purple-300 rounded-lg flex flex-wrap items-center justify-center">
              <div className="w-full my-2 flex flex-wrap items-center justify-center hover:text-white">
                <MonitorIcon />
              </div>
              <ul className="w-full">
                {TechnicalSkills.frontend.map((item) => (
                  <li
                    key={item}
                    className="group/item hover:bg-slate-100 px-3 rounded-lg py-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-2/3 md:w-auto p-6 md:p-10 bg-purple-300 rounded-lg flex flex-wrap items-center justify-center">
              <div className="w-full my-2 flex flex-wrap items-center justify-center hover:text-white">
                <StorageIcon />
              </div>
              <ul className="w-full">
                {TechnicalSkills.backend.map((item) => (
                  <li
                    key={item}
                    className="group/item hover:bg-slate-100 px-3 rounded-lg py-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-2/3 md:w-auto p-6 md:p-10 bg-purple-300 rounded-lg flex flex-wrap items-center justify-center">
              <div className="w-full my-2 flex flex-wrap items-center justify-center hover:text-white">
                <DataObjectIcon />
              </div>
              <ul className="w-full">
                {TechnicalSkills.core.map((item) => (
                  <li
                    key={item}
                    className="group/item hover:bg-slate-100 px-3 rounded-lg py-2"
                  >
                    {item}
                  </li>
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
        <p className="text-2xl md:text-3xl text-center font-knewave text-purple-50">
          The Projects That Define Me 📂
        </p>
        <p className="text-lg md:text-xl text-center font-roboto text-purple-400">
          My Projects
        </p>
        <div className="mt-7 md:mt-10 w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-3">
          <GetProjects />
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
              className="bg-purple-950 text-purple-100 w-[60%] md:w-1/2 my-2 hover:bg-purple-900 hover:border-white shadow-md hover:shadow-lg p-5 md:p-7 rounded-lg"
            >
              <p className="text-base text-center font-bold">
                <item.icon className="mx-3" />
                {item.media_name}
              </p>
              <p className="text-sm text-center mt-3">{item.meda_data}</p>
              <p dir="rtl" className="mt-2">
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
        <div className="w-full my-14 md:w-3/5 md:my-5 shadow-xl rounded-lg py-6 px-3 md:py-16 md:px-10 bg-purple-200">
          <p className="text-2xl md:text-3xl font-bold text-center">
            Let's Build Something Amazing Together 🚀
          </p>
          <div className="w-3/4 mr-auto ml-auto mt-10">
            <form className="flex flex-col w-full">
              <input
                id="u_name"
                type="text"
                value={uName}
                onChange={(e) => setuName(e.target.value)}
                placeholder="Enter name.."
                className="mt-1 mb-3 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2  focus:ring-purple-500"
              />
              <input
                id="u_email"
                type="email"
                value={uEmail}
                onChange={(e) => setuEmail(e.target.value)}
                placeholder="Enter email.."
                className="mt-1 mb-3 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2  focus:ring-purple-500"
              />
              <input
                id="u_comment"
                type="text"
                value={uComment}
                onChange={(e) => setuComment(e.target.value)}
                placeholder="Your comment.."
                className="mt-1 mb-8 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2  focus:ring-purple-500"
              />
              <Button
                variant="outlined"
                className="w-full lg:w-1/2 self-center"
                onClick={handleSubmit}
              >
                Get Help
              </Button>
              <div className="h-10 w-full mt-1 items-center">
                {successAlert ? (
                  <Alert severity="success">Query Sent Successfully!!</Alert>
                ) : (
                  ""
                )}
                {warningAlert ? (
                  <Alert severity="warning">All fields are mandatory!!</Alert>
                ) : (
                  ""
                )}
              </div>
            </form>

            <p className="text-base md:text-lg mt-7">
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
