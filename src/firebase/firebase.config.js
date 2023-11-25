
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhdBh_VUnRehGzLscquJMP_tdA3_1C_iM",
  authDomain: "polling-survey-app-f1aca.firebaseapp.com",
  projectId: "polling-survey-app-f1aca",
  storageBucket: "polling-survey-app-f1aca.appspot.com",
  messagingSenderId: "222531218525",
  appId: "1:222531218525:web:c8d5c0c73542e086e4f1b4"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;