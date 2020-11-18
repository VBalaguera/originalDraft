// firebase 1. import firebase, auth, and storage
import firebase from 'firebase/app'; 
import "firebase/firestore";
import "firebase/auth"; 

// firebase 2. we get Firebase's SDK snippet, and import it here
const config = {
    apiKey: "AIzaSyBl6UPk04I6GNqKoGbnVL2ZLePShhsR1Dk",
    authDomain: "frugalityappreactencore2020.firebaseapp.com",
    databaseURL: "https://frugalityappreactencore2020.firebaseio.com",
    projectId: "frugalityappreactencore2020",
    storageBucket: "frugalityappreactencore2020.appspot.com",
    messagingSenderId: "192292850908",
    appId: "1:192292850908:web:84a14899eba60a535c3819"
  };

  // firebase 3. set everything up 
  firebase.initializeApp(config); 

  // firebase 4. 
  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore(); 

  // firebase 5. google auth utilities: 
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account '}); 
  export const signInWithGoogle = () => auth.signInWithPopup(provider); 

  // firebase 6. exporting the whole library 
  export default firebase; 

  // firebase 7. setting signin methods on auth: google, mail/password, and PHONE (which I will investigate later); 

  // firebase 8. Inside App.js: import { auth } from './firebase/firebase.utils'; 
  //since we want to store the state of the user, and access the current user object, we need to convert this App component into a class component:
  /*
  

class App extends React.Component {
  constructor() {
    super(); 

    this.state = {
      currentUser: null
    }
  }

  // firebase 9. to fetch all data in the backend, and it will not do this again until this component gets rendered again; we do not want that. Firebase helps to do that; 

  // firebase 10. onAuthStateChanged() uses: a function where the parameter is what the userState is on the auth on our firebase project with an object where currentUser is the user object

  unsubscribeFromAuth = null

  componentDidMount() {
    // firebase 11. what follows is an open subscription: an open messaging system between the app and firebase; when changes ocurre, related to this app, firebase sends out a message about user updates (sign in or sign out); we do not need to manually fetch changes;

    // firebase 12. however, we also need to unmount this and close the subscription to prevent memory leaks on our app, that is why we set unsubscribeFromAuth
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user); 
      // firebase 13. firebase is now aware of the last user's login, that endpoint is doing good; however, the app hasn't saved the state. If we refresh, it will remaing logged until user signs out; 
    })
  }

  // firebase 14. how to close the subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  } 

  
  */ 