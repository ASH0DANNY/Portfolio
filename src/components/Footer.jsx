import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import {
  handleCallClick,
  handleSendMailClick,
  handleWhatsappClick,
} from "../data/PortfolioData";
import mylogo from "../images/mylogo.png";

const Footer = () => {
  const socialLinks = [
    { name: GitHubIcon, link: "https://github.com/ASH0DANNY" },
    { name: InstagramIcon, link: "www.instagram.com" },
    { name: FacebookIcon, link: "www.facebook.com" },
    { name: YouTubeIcon, link: "www.youtube.com" },
  ];

  const navLinks = [
    { name: "Home", link: "#homeSection" },
    { name: "About", link: "#" },
    { name: "Skills", link: "#tecSkillsSection" },
    { name: "Projects", link: "#projectSection" },
    { name: "Contact", link: "#contactSection" },
  ];

  return (
    <>
      <footer className="bg-black border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center">
                <img src={mylogo} alt="Logo" className="w-10 h-10" />
              </div>
              <div className="mt-4">
                {socialLinks.map((item, index) => (
                  <Link
                    to={`//${item.link}`}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer" // Important for security
                    className="text-gray-500 hover:text-gray-700 mx-2"
                  >
                    {<item.name />}
                  </Link>
                ))}
              </div>
            </div>
            {/* 
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <ul>
                {quickLinks.map((item, index) => (
                  <li key={index} className="text-gray-500 hover:text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <ul className="ml-8 md:ml-auto">
                {navLinks.map((item, index) => (
                  <a href={item.link}>
                    <li
                      key={index}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {item.name}
                    </li>
                  </a>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <ul className="py-2 mr-8 md:mr-auto">
                <Link
                  onClick={handleWhatsappClick}
                  target="_blank"
                  rel="noopener noreferrer" // Important for security
                >
                  <li className="text-gray-500 hover:text-gray-700 p-2">
                    <WhatsAppIcon />
                  </li>
                </Link>
                <Link
                  onClick={handleSendMailClick}
                  target="_blank"
                  rel="noopener noreferrer" // Important for security
                >
                  <li className="text-gray-500 hover:text-gray-700 p-2">
                    <EmailIcon />
                  </li>
                </Link>
                <Link
                  onClick={handleCallClick}
                  target="_blank"
                  rel="noopener noreferrer" // Important for security
                >
                  <li className="text-gray-500 hover:text-gray-700 p-2">
                    <CallIcon />
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-4 text-gray-500">
            <div className="flex justify-between items-center">
              <p>&copy; 2024 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
