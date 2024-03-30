import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// import { getDatabase } from "firebase/database";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;