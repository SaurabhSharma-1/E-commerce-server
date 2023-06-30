// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNNW3ZWFEuohI3MidO9BCg7Lxf-zGUG54",
  authDomain: "beatles-fa64c.firebaseapp.com",
  projectId: "beatles-fa64c",
  storageBucket: "beatles-fa64c.appspot.com",
  messagingSenderId: "819876669681",
  appId: "1:819876669681:web:6e0d4cf146470c314fe150",
  measurementId: "G-HWNE6ZXYT6",
  databaseURL : "https://beatles-fa64c-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app1);
const db = getFirestore(app1);

// async function getProduct(db) {
//     const productCol = collection(db, 'product');
//     const productSnapshot = await getDocs(productCol);
//     const productList = productSnapshot.docs.map(doc => doc.data());
//     return productList;
//   }

export default app1 ;