//Firebase Database declared above
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../firebase";

import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

const GetProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const userRef = ref(database, "projects");
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const projectsArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setProjects(projectsArray);
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {projects.map((item) => (
        <div
          key={item.key}
          className="bg-purple-800 hover:bg-purple-700 hover:shadow-lg mt-5 md:mt-10 p-7 rounded-lg"
        >
          <p className="text-[22px] text-purple-100 font-bold mb-4">
            {item.heading}
          </p>
          <p className="text-base text-purple-300 mb-3">{item.desc}</p>
          <p className="text-sm text-purple-400 mb-4">
            {item.tec_used.map((value) => value + " , ")}
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
    </>
  );
};

export default GetProjects;
