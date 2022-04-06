
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDsHSy5DDJIE8ZpKhVQZ0_OsQiO7C0OXUg",
  authDomain: "land-scape-commerce.firebaseapp.com",
  projectId: "land-scape-commerce",
  storageBucket: "land-scape-commerce.appspot.com",
  messagingSenderId: "283700312998",
  appId: "1:283700312998:web:b492e56acc9d6359d3ed67"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)