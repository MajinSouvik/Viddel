import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBJGxhIk7QbLbEsiQ15JzaWfxkUIu2vahM",
  authDomain: "viddel-4f504.firebaseapp.com",
  projectId: "viddel-4f504",
  storageBucket: "viddel-4f504.appspot.com",
  messagingSenderId: "982778439728",
  appId: "1:982778439728:web:8c65877da11ed68dab25f5"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);