import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBZ2SX4E9CxZRorgi0sUXmsiSBR7_57Eio",
    authDomain: "imkern.firebaseapp.com",
    projectId: "imkern",
    storageBucket: "imkern.appspot.com",
    messagingSenderId: "53484354019",
    appId: "1:53484354019:web:9320c2db6583cfbcf548d6",
    measurementId: "G-TKN3LLBZR5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;