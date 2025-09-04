import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAT82LuFgjT1yKb-GI0u6GGFFM1NZeJGD4",
  authDomain: "react-assignments-9afc9.firebaseapp.com",
  projectId: "react-assignments-9afc9",
  storageBucket: "react-assignments-9afc9.firebasestorage.app",
  messagingSenderId: "323556254592",
  appId: "1:323556254592:web:745fa87b9fc9a4b5991765"
};

const app = initializeApp(firebaseConfig);


export {app}