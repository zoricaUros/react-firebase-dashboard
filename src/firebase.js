
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDEQGWZvNEPqZ6m2DzpwBu5AzwT8w1JhcY",

  authDomain: "auth-dashboard-second.firebaseapp.com",

  projectId: "auth-dashboard-second",

  storageBucket: "auth-dashboard-second.appspot.com",

  messagingSenderId: "616452786733",

  appId: "1:616452786733:web:513873f98151a3bb94c6a4"

})

export const auth = app.auth()
export default app