import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARzQZV3y5_2Tv0DaY120RujqS4iemxTkk",
    authDomain: "bulles-afatihyavasi.firebaseapp.com",
    projectId: "bulles-afatihyavasi",
    storageBucket: "bulles-afatihyavasi.appspot.com",
    messagingSenderId: 768579082366,
    appId: "1:768579082366:web:1ea940f6816788053e202f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;