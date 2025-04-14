// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCP-G3dq1jN7jwVFea9MVg0GJUO_lMfv3Y',
  authDomain: 'login-cec20.firebaseapp.com',
  projectId: 'login-cec20',
  storageBucket: 'login-cec20.appspot.com',
  messagingSenderId: '204775720747',
  appId: '1:204775720747:web:6d0d5580501afe3889a76e',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };
