import { get, ref } from "firebase/database";
import { database } from "../firebase";
import { useEffect, useState } from "react";

import React from "react";

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
  );
};

export default GetIntroData;
