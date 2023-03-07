import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaA33gN-kLQtloMRs5zL6xgldzBHIVwsQ",
  authDomain: "coderhouse-420.firebaseapp.com",
  projectId: "coderhouse-420",
  storageBucket: "coderhouse-420.appspot.com",
  messagingSenderId: "858738267545",
  appId: "1:858738267545:web:920558bb870e364f866f08",
  measurementId: "G-PH1S3E7Z3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
