// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: 'real-estate-cf275.firebaseapp.com',
  projectId: 'real-estate-cf275',
  storageBucket: 'real-estate-cf275.appspot.com',
  messagingSenderId: '944747869683',
  appId: '1:944747869683:web:38456fc01683e774a94e86'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
