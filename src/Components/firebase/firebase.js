import firebase from "firebase/app";
import 'firebase/auth';
 import 'firebase/firestore';

var fireBaseConfig = {
    apiKey: "AIzaSyBbToR5jm2g_kbdwqqQEmsqpQ5gmvXWzWE",
    authDomain: "ck-clothing.firebaseapp.com",
    projectId: "ck-clothing",
    storageBucket: "ck-clothing.appspot.com",
    messagingSenderId: "673005093786",
    appId: "1:673005093786:web:8f9d9d9039e70f81c77023",
    measurementId: "G-SMSRVRVW30"
  };

  firebase.initializeApp(fireBaseConfig);

  export const fireStore = firebase.firestore();
  export const auth = firebase.auth();
  export const addUserInfoInDb = async (user, additionalItems) => {
       if(!user) 
       return;
       const userRef = fireStore.doc(`users/${user.uid}`);

       const userSnapShot = await userRef.get();
       if(!userSnapShot.exists) {
         try {
         const {displayName, email} = user;
         let createdAt = new Date();

         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalItems
         })
        } catch(error) {
          console.log(error.message);
        }
       }

       return userRef;
  }

  var provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    'prompt': 'select_account'
  });

 export const signInWithGoogle = function() {
    firebase.auth().signInWithPopup(provider);
 } 

 export default firebase;