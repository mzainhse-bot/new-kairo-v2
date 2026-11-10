// firebase-config.js - RMED
const firebaseConfig = {
  apiKey: "حط هنا الـ apiKey بتاعك",
  authDomain: "حط هنا الـ authDomain",
  projectId: "حط هنا الـ projectId",
  storageBucket: "حط هنا الـ storageBucket",
  messagingSenderId: "حط هنا الـ messagingSenderId",
  appId: "حط هنا الـ appId"
};

firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
console.log("Firebase شغال - RMED");
