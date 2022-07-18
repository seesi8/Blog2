import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

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


export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const fromMillis = firebase.firestore.Timestamp.fromMillis;


export async function getUserWithUsername(username){
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

export function postToJSON(doc){
    console.log("DOC",doc.data())
    const data = doc.data();
    return {
        ...data,

        createdAt: data.createdAt.toMillis(),
        updatedAt: data.createdAt.toMillis(),
    };
}