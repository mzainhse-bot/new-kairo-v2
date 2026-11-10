  // firebase-config.js - RMED - rmed-c2cbd
const firebaseConfig = {
  apiKey: "AIzaSyC4J2exLSQSgUPic_40Qm5AkAGA04KFtUs",
  authDomain: "rmed-c2cbd.firebaseapp.com",
  projectId: "rmed-c2cbd",
  storageBucket: "rmed-c2cbd.firebasestorage.app",
  messagingSenderId: "194968627346",
  appId: "1:194968627346:web:18ff2923778fc07c89de4b"
};

// تشغيل فايربيز - نسخة compat عشان تشتغل مع كل الصفحات
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("✅ Firebase شغال - RMED");
