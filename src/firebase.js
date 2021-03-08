import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZdCZu-6J1aUdOtnF43bZyXQ0WhSxgXyo",
  authDomain: "linkedin-clone-add09.firebaseapp.com",
  projectId: "linkedin-clone-add09",
  storageBucket: "linkedin-clone-add09.appspot.com",
  messagingSenderId: "718849398325",
  appId: "1:718849398325:web:fbbe0304d5108fab06037c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };

export default db;
