import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import {useCollectionData} from 'react-firebase-hooks/firestore'

const config = {
    apiKey: "AIzaSyA-AGFECpTAERKO3-lDsAunvLuWYlWJvKQ",
    authDomain: "phone-store-28fab.firebaseapp.com",
    databaseURL: "https://phone-store-28fab-default-rtdb.firebaseio.com",
    projectId: "phone-store-28fab",
    storageBucket: "phone-store-28fab.appspot.com",
    messagingSenderId: "440253058004",
    appId: "1:440253058004:web:9b8eee95931bb806796441",
    measurementId: "G-81EZX9P88P"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase
// const firestore = firebase.firestore();


