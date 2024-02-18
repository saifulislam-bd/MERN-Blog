import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mern-blog-b936b.firebaseapp.com",
  projectId: "mern-blog-b936b",
  storageBucket: "mern-blog-b936b.appspot.com",
  messagingSenderId: "1068265379239",
  appId: "1:1068265379239:web:b78aaa1874550032e59282",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
