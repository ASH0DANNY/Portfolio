import React from "react";
import { get, ref } from "firebase/database";
import { database } from "../firebase";
import { useEffect, useState } from "react";
import local_ProfilePhoto from "../images/myprofile.png";

const GetIntroData = () => {
  const [introData, setIntroData] = useState([]);
  useEffect(() => {
    const userRef = ref(database, "introduction");
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const projectsArray = snapshot.val();
          setIntroData(projectsArray);
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="w-full md:w-1/2 md:h-full bg-white rounded-xl p-7 md:px-24 md:py-36 shadow-lg">
        <p className="text-gray-500 text-sm md:text-base">
          {introData.introGreeting}
        </p>
        <p className="text-purple-700 text-3xl md:text-5xl mt-1 font-roboto font-bold">
          {introData.yourName}
        </p>
        <p className="text-gray-700 text-xl md:text-xl mt-1">
          {introData.yourRole}
        </p>
        <p className="text-purple-500 font-JetBrainsMono text-sm md:text-base mt-8 md:mt-10">
          {introData.subIntroduction}
        </p>
      </div>

      <div className="w-full md:w-1/2 mt-5 md:mt-0 h-[280px] md:h-full bg-purple-100 rounded-xl p-9 md:p-10 flex items-center justify-center shadow-lg">
        <div className="w-[181px] md:w-[270px] h-[181px] md:h-[270px] rounded-2xl bg-purple-200 shadow-purple-700 shadow-2xl rotate-12">
          <img
            src={
              introData.profilePhoto === ""
                ? local_ProfilePhoto
                : introData.profilePhoto
            }
            alt="profile_image"
            className="inset-0 h-full w-full rounded-2xl object-cover -rotate-12"
          />
        </div>
      </div>
    </>
  );
};

export default GetIntroData;
