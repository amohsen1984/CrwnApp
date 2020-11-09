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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    }
    catch(e){
      console.error('Error creating user', e.message);
    }
  }

  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
