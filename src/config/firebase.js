import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAtefLwe-KAMUEJitk5AtBr5koGdEnK0fM",
  authDomain: "project-manager-e26ca.firebaseapp.com",
  projectId: "project-manager-e26ca",
  storageBucket: "project-manager-e26ca.appspot.com",
  messagingSenderId: "561522261981",
  appId: "1:561522261981:web:6de1f744f6803cef43c034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);