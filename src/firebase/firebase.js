import * as firebase from "firebase/app";
import credentials from "./credentials.js"

export const firebaseApp = firebase.initializeApp(credentials.firebase);

