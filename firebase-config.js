// firebase-config.js - RMED
const firebaseConfig = {
  apiKey: "AIzaSyC4J2exLSQ5gUPic_40Qm5AkAGA04KFrUs",
  authDomain: "rmed-c2cbd.firebaseapp.com",
  projectId: "rmed-c2cbd",
  storageBucket: "rmed-c2cbd.firebasestorage.app",
  messagingSenderId: "194968627346",
  appId: "1:194968627346:web:18ff2923778fc07c89de4b"
};

firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
console.log("Firebase شغال - RMED");
