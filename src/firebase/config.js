import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"



const firebaseConfig = {
    apiKey: "AIzaSyA2pkesUJEdU6zMlZGZmf9kncEnH-jbhBc",
    authDomain: "project-management-app-f9a42.firebaseapp.com",
    projectId: "project-management-app-f9a42",
    storageBucket: "project-management-app-f9a42.appspot.com",
    messagingSenderId: "384920130050",
    appId: "1:384920130050:web:0a1266eddb98f954d98d1b"
};


//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, projectStorage, timestamp }