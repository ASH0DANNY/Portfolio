import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAdE_DgvrPM5Rhk20eHCYceWpQZfOOY-9w",
  authDomain: "myportfolio-12dec.firebaseapp.com",
  projectId: "myportfolio-12dec",
  databaseURL: "https://myportfolio-12dec-default-rtdb.firebaseio.com/",
  storageBucket: "myportfolio-12dec.firebasestorage.app",
  messagingSenderId: "459226701551",
  appId: "1:459226701551:web:37f8f003ffe9d432a8451a",
  measurementId: "G-0DC7CXZE26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
const database = getDatabase(app);
export { database };
