import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAMjMKZNkDOP0OJJk2blqokEGLqxA63MX8",
  authDomain: "cadastrousuario-d2122.firebaseapp.com",
  databaseURL: "https://cadastrousuario-d2122-default-rtdb.firebaseio.com",
  projectId: "cadastrousuario-d2122",
  storageBucket: "cadastrousuario-d2122.appspot.com",
  messagingSenderId: "303479598686",
  appId: "1:303479598686:web:6d9ddfec2dfc6fb1988ecf",
  measurementId: "G-YQE92PKWCL",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
