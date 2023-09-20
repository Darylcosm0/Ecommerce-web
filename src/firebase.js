import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAT-6QAJK1TvaKIlINmj0cbqt1Tg4RZ4M",
  authDomain: "instagram-clone-db158.firebaseapp.com",
  projectId: "instagram-clone-db158",
  storageBucket: "instagram-clone-db158.appspot.com",
  messagingSenderId: "694337882978",
  appId: "1:694337882978:web:0d99ca9bb194bc70213a3b",
  measurementId: "G-6F6N62FGYK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();