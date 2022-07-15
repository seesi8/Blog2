import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD9WlZg_nTXg4xvhZtADv_Mezs-hxHwGRg",
    authDomain: "nextfrie-a.firebaseapp.com",
    projectId: "nextfrie-a",
    storageBucket: "nextfrie-a.appspot.com",
    messagingSenderId: "474100051587",
    appId: "1:474100051587:web:3ba1ebcfe61f1f065135b6",
    measurementId: "G-N6NK6ZYEB8"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();