import {getFirestore,getDocs,collection} from 'firebase/firestore';
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
const db=getFirestore(app)


// Get a list of cities from your database
async function getProduct(data) {
  const query = collection(data, 'items');
  const querySnapshot = await getDocs(query)
  const itemList = querySnapshot.docs.map(doc => doc.data());
  try{
  return itemList
  }
  // eslint-disable-next-line no-unused-expressions
  catch{err=>console.log(err)}
}

export default getProduct(db)