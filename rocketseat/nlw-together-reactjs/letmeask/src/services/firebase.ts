import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyB2LrdnXCo9hbmalrxVtkg-BKbdSi9WSa0",
  authDomain: "letmeask-ce969.firebaseapp.com",
  databaseURL: "https://letmeask-ce969-default-rtdb.firebaseio.com",
  projectId: "letmeask-ce969",
  storageBucket: "letmeask-ce969.appspot.com",
  messagingSenderId: "153325775391",
  appId: "1:153325775391:web:89a587b1bd8a1e0652832a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }