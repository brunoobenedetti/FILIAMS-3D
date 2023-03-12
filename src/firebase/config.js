
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCHUqZU5QwVjAORAq91Xl60NjB7oGHT85I",
    authDomain: "filiams-3d-18054.firebaseapp.com",
    projectId: "filiams-3d-18054",
    storageBucket: "filiams-3d-18054.appspot.com",
    messagingSenderId: "542482395500",
    appId: "1:542482395500:web:657b577d41f50d5b24c349"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app