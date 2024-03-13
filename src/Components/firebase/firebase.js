import {initializeApp} from "firebase/app";
import {GoogleAuthProvider, signInWithPopup, getAuth, createUserWithEmailAndPassword, 
  signOut, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
  import { getMessaging, getToken, onMessage } from "firebase/messaging";
import {getFirestore, doc, getDoc, setDoc, writeBatch, collection, query, getDocs} from 'firebase/firestore/';

var fireBaseConfig = {
    apiKey: "AIzaSyBbToR5jm2g_kbdwqqQEmsqpQ5gmvXWzWE",
    authDomain: "ck-clothing.firebaseapp.com",
    projectId: "ck-clothing",
    storageBucket: "ck-clothing.appspot.com",
    messagingSenderId: "673005093786",
    appId: "1:673005093786:web:8f9d9d9039e70f81c77023",
    measurementId: "G-SMSRVRVW30"
  };

  const app = initializeApp(fireBaseConfig);

  export const fireStore = getFirestore(app);
  const messaging = getMessaging(app);
  export const auth = getAuth();

  // Add the public key generated from the console here.
getToken(messaging, {vapidKey: "BP5xkva6ls60hY1Sgr22PT-ms94pjT0occtVTPYuvaFPV1SGmU0asBjN-OTLvBeloxi9LisDFsPejC_s2BeWm44"})
.then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log("Token received", currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});


// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       console.log("payload", payload)
//       resolve(payload);
//     });
//   });

  // Method to add shop page products list in the fire store.
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const batch = writeBatch(fireStore);
    //Getting collection reference
    const collectionRef = collection(fireStore, collectionKey);
    objectsToAdd.forEach((object) => {
      // Getting document reference
      const docRef = doc(collectionRef, object.title.toLowerCase());
      //Writes data in the document reference.
      batch.set(docRef, object); 
    })

    await batch.commit();
  }
  // Gets product category from fire store.
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(fireStore, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  };



  // Structure of Firebase DB (Collections -> Document -> Data) Eg. Shoes -> Nike AirMax(UID) -> {brand: 'Nike', createdDate: ''}
  export const addUserInfoInDb = async (user, additionalItems={}) => {
       if(!user) 
       return;
       // Giving collection and the document id to get the user information from DB
       const userRef = doc(fireStore, 'users', user.uid);
      // We pass this user information to retrieve the document
       const userSnapShot = await getDoc(userRef);
        //Checks whether logged in user info present in fire store document
       if(!userSnapShot.exists()) {
         try {
         const {displayName, email} = user;
         let createdAt = new Date();
         //Assigning data in the firebase document.
         await setDoc(userRef, {
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

  var provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    'prompt': 'select_account'
  });

 export const signInWithGoogle = function() {
  return signInWithPopup(auth, provider);
 } 

 export const createUserEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
 }

 export const signInUserEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
 }

 export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback); 

 export const signOutUser = async () => await signOut(auth);