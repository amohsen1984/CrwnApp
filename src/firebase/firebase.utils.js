import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB5seLw_m6WyGNbs9YD2YaByLd0BtgKNkk",
    authDomain: "crwn-db-7488f.firebaseapp.com",
    databaseURL: "https://crwn-db-7488f.firebaseio.com",
    projectId: "crwn-db-7488f",
    storageBucket: "crwn-db-7488f.appspot.com",
    messagingSenderId: "325236807776",
    appId: "1:325236807776:web:c9ff2bc8b0e182bca5cb05",
    measurementId: "G-RKR7R8W71M"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
