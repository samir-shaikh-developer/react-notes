import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyD1nlDtdWzqfp5PzRXGAaRP2IJEJZ7fEHk",
   authDomain: "notes-3590b.firebaseapp.com",
   databaseURL: "https://notes-3590b.firebaseio.com",
   projectId: "notes-3590b",
   storageBucket: "notes-3590b.appspot.com",
   messagingSenderId: "298392237920"
 };
 firebase.initializeApp(config);
 firebase.firestore().settings({timestampsInSnapshots: true})

 export default firebase; 
