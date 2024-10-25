// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlr0SVJzDHhV5oXDhjM-i04TdWGECGOvQ",
  authDomain: "fir-82ad8.firebaseapp.com",
  databaseURL: "https://fir-82ad8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-82ad8",
  storageBucket: "fir-82ad8.appspot.com",
  messagingSenderId: "1034710128109",
  appId: "1:1034710128109:web:66f6be9681c7ce5969c3e4",
  measurementId: "G-8DT5HM97F3"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const cong = initializeApp(firebaseConfig);

export default cong;