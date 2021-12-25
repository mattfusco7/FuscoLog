import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyBc2TjlxLd0Ww5G_9B4OF64urPf2PH2mhA",
    authDomain: "fuscolog.firebaseapp.com",
    projectId: "fuscolog",
    storageBucket: "fuscolog.appspot.com",
    messagingSenderId: "681179039959",
    appId: "1:681179039959:web:d4fec7d8e3d9cc99284892",
    measurementId: "G-9HV5BNNGR7"
})

export const auth = firebase.auth()
export default app