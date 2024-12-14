//Firebase Database declared above
import { useEffect, useState } from "react";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const GetProjects = () => {
  const [projects, setProjects] = useState([]);

  const getProjectData = async () => {
    try {
      const productsRef = collection(db, "projects");
      const temp = await getDocs(productsRef);
      setProjects(temp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error.message);
    }

    // getDoc(productRef)
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       const projectsArray = Object.entries(snapshot.val()).map(
    //         ([id, data]) => ({
    //           id,
    //           ...data,
    //         })
    //       );
    //       setProjects(projectsArray);
    //     } else {
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  useEffect(() => {
    getProjectData();
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
