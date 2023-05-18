import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLfFqtRpJOORaMK1bKM17oH3ZrGgFdmeI",
  authDomain: "organic-valley-bd.firebaseapp.com",
  projectId: "organic-valley-bd",
  storageBucket: "organic-valley-bd.appspot.com",
  messagingSenderId: "826501992307",
  appId: "1:826501992307:web:657ad6fb8060f133337f06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
