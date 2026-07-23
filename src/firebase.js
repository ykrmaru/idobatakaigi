import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdYjjkTDK_NQy1qBA4DT6gkL3aP__NaC4",
  authDomain: "idobatakaigi-with-ham-ff270.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-ff270",
  storageBucket: "idobatakaigi-with-ham-ff270.firebasestorage.app",
  messagingSenderId: "834662640120",
  appId: "1:834662640120:web:da13f29da4c47e3e6f8e0d",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messagesRef = database.ref("messages");

export const pushMessage = (message) => {
  messagesRef.push(message);
};
