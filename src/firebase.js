import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCCvSzEnrCR0wBdk7Pyd3dSj7yn1e-pRjg",
  authDomain: "linkedinn-b1139.firebaseapp.com",
  projectId: "linkedinn-b1139",
  storageBucket: "linkedinn-b1139.appspot.com",
  messagingSenderId: "860749882929",
  appId: "1:860749882929:web:c85844bcf9062fff919710",
  measurementId: "G-BC0J6LNKTB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
