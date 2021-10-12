// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX40OXMOdApM3zdQb6FmYOC5u2Yi0bxv0",
  authDomain: "fir-auth-573f2.firebaseapp.com",
  projectId: "fir-auth-573f2",
  storageBucket: "fir-auth-573f2.appspot.com",
  messagingSenderId: "74080084502",
  appId: "1:74080084502:web:2f8137eb72a14e85fe0b37"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };