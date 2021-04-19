import firebase from "firebase/app";
import 'firebase/auth/';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${ process.env.REACT_APP_FIREBASE_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket:`${ process.env.REACT_APP_FIREBASE_STORAGE}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;