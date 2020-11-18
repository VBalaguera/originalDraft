// 1. import firebase, auth, and storage
import firebase from 'firebase/app'; 
import "firebase/firestore";
import "firebase/auth"; 

// 2. we get Firebase's SDK snippet, and import it here
const config = {
    apiKey: "AIzaSyBl6UPk04I6GNqKoGbnVL2ZLePShhsR1Dk",
    authDomain: "frugalityappreactencore2020.firebaseapp.com",
    databaseURL: "https://frugalityappreactencore2020.firebaseio.com",
    projectId: "frugalityappreactencore2020",
    storageBucket: "frugalityappreactencore2020.appspot.com",
    messagingSenderId: "192292850908",
    appId: "1:192292850908:web:84a14899eba60a535c3819"
  };

  // 3. set everything up 
  firebase.initializeApp(config); 

  // 4. 
  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore(); 

  // 5. google auth utilities: 
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account '}); 
  export const signInWithGoogle = () => auth.signInWithPopup(provider); 

  // 6. exporting the whole library 
  export default firebase; 

  // 7. setting signin methods on auth: google, mail/password, and PHONE (which I will investigate later); 

  