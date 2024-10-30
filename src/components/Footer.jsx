import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const socialLinks = [
    { name: GitHubIcon, link: "www.github.com" },
    { name: InstagramIcon, link: "www.instagram.com" },
    { name: FacebookIcon, link: "www.facebook.com" },
    { name: YouTubeIcon, link: "www.youtube.com" },
  ];
  const quickLinks = [
    "Book a cab",
    "Drive with us",
    "Outstation",
    "Rental",
    "Ola Money",
    "Corporate",
  ];
  const navLinks = [
    "About Us",
    "Contact Us",
    "Support",
    "Careers",
    "Media Centre",
    "Investor Relations",
  ];

  const otherLinks = ["Ola S1", "Futurefactory", "Electric"];

  return (
    <>
      <footer className="bg-black border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center">
                <img src="ola-logo.svg" alt="Ola Logo" className="w-24 h-8" />
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

            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <ul>
                {quickLinks.map((item, index) => (
                  <li key={index} className="text-gray-500 hover:text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <ul>
                {navLinks.map((item, index) => (
                  <li key={index} className="text-gray-500 hover:text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <ul>
                {otherLinks.map((item, index) => (
                  <li key={index} className="text-gray-500 hover:text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-4 text-gray-500">
            <div className="flex justify-between items-center">
              <p>
                &copy; 2024 Ola Electric Mobility Pvt. Ltd. All Rights Reserved
              </p>
              <div>
                <Link to="#" className="text-gray-500 hover:text-gray-700 mr-4">
                  Notices
                </Link>
                <Link to="#" className="text-gray-500 hover:text-gray-700 mr-4">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-gray-500 hover:text-gray-700 mr-4">
                  Terms of Service
                </Link>
                <select className="border border-gray-200 rounded-md px-2 py-1">
                  <option value="India">India</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
