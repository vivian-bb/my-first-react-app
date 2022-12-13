// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVof9-bs73jmKplGOeJbxU1Wm3SivsUHE",
  authDomain: "react-portfolio-78770.firebaseapp.com",
  projectId: "react-portfolio-78770",
  storageBucket: "react-portfolio-78770.appspot.com",
  messagingSenderId: "311997465755",
  appId: "1:311997465755:web:80ca61b6a8958ec64b723e"
};

// Initialize Firebase
//const app = 
initializeApp(firebaseConfig);

const auth = getAuth();

export const registerNewUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
.then(( userCredentials ) => {
    const user = userCredentials.user
    console.log(user);    
})
.catch((error) => {
    console.log(error.code);
    console.log(error.message);
});

export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
.then((userCredentials ) => {
    const user = userCredentials.user
    console.log(user);    
})
.catch((error) => {
    console.log(error.code);
    console.log(error.message);
});
export const signOutUser = () => signOut(auth)
.then(()=>{
    console.log('Signed out');
})
.catch(error => {
    console.log(error.code);
    console.log(error.message);
});