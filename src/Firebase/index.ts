import { initializeApp, getApps } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5kNcEa3oKsaS8DrEn5o2M039h8QSFtDA",
  authDomain: "passage-talent.firebaseapp.com",
  projectId: "passage-talent",
  storageBucket: "passage-talent.appspot.com",
  messagingSenderId: "95267376918",
  appId: "1:95267376918:web:3c5bb22497fdc5f7d88a37",
  measurementId: "G-MW4QNG70SC",
};

if (typeof window !== "undefined" && getApps().length === 0) {
  initializeApp(firebaseConfig);
}
