// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDB6larWuk9fO5uiAYcwTrhTSHHgXbpLB4',
  authDomain: 'forex-trader-db0aa.firebaseapp.com',
  projectId: 'forex-trader-db0aa',
  storageBucket: 'forex-trader-db0aa.appspot.com',
  messagingSenderId: '107683925504',
  appId: '1:107683925504:web:0de5abcff16042aeff92e5',
  measurementId: 'G-YTTNS8D2X4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
