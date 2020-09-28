// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFUYgXmL8iqCItnegZDj4DbBDIsf09WtY",
    authDomain: "tinder-clone-35500.firebaseapp.com",
    databaseURL: "https://tinder-clone-35500.firebaseio.com",
    projectId: "tinder-clone-35500",
    storageBucket: "tinder-clone-35500.appspot.com",
    messagingSenderId: "195246813283",
    appId: "1:195246813283:web:aef97c504f4185f9304856",
    measurementId: "G-YDS1SFSKSZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
export default database;