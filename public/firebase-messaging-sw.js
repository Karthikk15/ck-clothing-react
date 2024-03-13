// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBbToR5jm2g_kbdwqqQEmsqpQ5gmvXWzWE",
    authDomain: "ck-clothing.firebaseapp.com",
    projectId: "ck-clothing",
    storageBucket: "ck-clothing.appspot.com",
    messagingSenderId: "673005093786",
    appId: "1:673005093786:web:8f9d9d9039e70f81c77023",
    measurementId: "G-SMSRVRVW30"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   console.log('Received background message ', payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

