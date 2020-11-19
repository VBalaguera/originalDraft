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

  // firebase 23. storing auth data into firestore.  An async function with the userAuth object and any additional data we might need. When we sign out we receive a null, which is a value but not an object. 
  // From the notes: firestore library gives two types of objects: a queryReference or a querySnapshot. A query is us asking firestore for a doc/collection. It returns a queryReference, as a doc or a collection. Firestore always return us these objects, even if NOTHING EXISTS AT FROM THAT QUERY.  
  //a queryReference object is an object that represents the "current" place in the database that we are querying. It does not have the actual data of the collection/doc, but the PROPERTIES THAT TELL US DETAILS ABOUT IT, OR THE METHOD TO GET THE SNAPSHOT OBJECT WHICH GIVE US THE DATA WE'RE LOOKING FOR. 
  /**/

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; 

    /* // firebase 24. const userRef = firestore.doc('user/123randomnonexistentidLOOKHERE'); //this is for testing */

    const userRef = firestore.doc(`users/${userAuth.uid}`); 
    //we will get the userReference at that location. I should see exist: false, but I cannot find it. Must have a different name now. However, the id we get back is the same from the auth library. 

    /* // firebase 25. console.log(firestore.doc('user/123randomnonexistentidLOOKHERE')); */

    const snapShot = await userRef.get(); 

    // // firebase 26. console.log(snapShot); //NOTE: for the life of me, I cannot find the "exist" prop when console.log(snapShot); 

    if(!snapShot.exists) {
      //if the snapShot data does not exists, we will create it from scratch; for that we need documentRef through CRUD methods; but with which data?
      const { displayName, email } = userAuth; 
      const createdAt = new Date(); //a js object for a timestamp

      // firebase 27. and we wrap everything into here, by doing an async request to the db to store the data: 
      try { 
        await userRef.set({ //.set is the create method, and we pass this object: 
          displayName,
          email,
          createdAt,
          ...additionalData
        }); 
      } catch (error) { //if it fails
        console.log('error creating user', error.message); 
      }

    }
    // firebase 28. this function will always also return the userRef data, because we may want it for other purposes
    return userRef; 
    // and it works, but we need to store all of it so we can use it in our app

  }
  // firebase 23. (cont)
  /* to test this, we will use the fake 123randomexistentidLOOKHERE, on App.js:
  
  before: 
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user); 
      
    })
  after importing createUserProfileDocument: 

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user); 
    })

    Long story short, this is a way to probe the db and seek for the data we may need. NOTE: object structure may, and will, vary. The one in the tutorial and several sites is not the same. In my case, when looking for the collection and id: 

    o_: {…}
​​
      C_: {…}
      ​​​
        path: {…}
        ​​​​
          g: 2
          ​​​​
          offset: 0
          ​​​​
          segments: (2) […]
          ​​​​​
            0: "user"
            ​​​​​
            1: "123randomnonexistentidLOOKHERE"
  
      A mouthful, but a doable one. 

    FROM COURSE'S NOTES: we use documentRef objs to perform CRUD methods (create, retreive, update, delete). Those methods are: .set(), .get(), .update(), .delete(). We can add docs to collections using .add(). // collectionRef.add({value: prop})

    We get the snapshotObject from the referenceObject using the .get() method. Ie: documentRef.get() or collectionRef.get() 

    Remember: documentRef returns a documentSnapshot object. collectionRef returns a querySnapshot object. 

    
  */

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

  /* // firebase 22. (exploring firestore) CREATING CLOUD FIRESTORE: 

  is a NO SEQUEL DATABASE = a huge json object in 

    Data is structured in collections, which have documents; all fields have values and ids; 

    to access a collection: 

    import firebase from 'firebase/app';
    import 'firebase/firestore';

    const firestore = firebase.firestore();

    firestore.collectionExample('example').doc('idExample').anotherCollectionExample('anotherExample').doc('anotherIdExample'); and so on; 

    self-explanatory.

    another way to query: 
    firestore.doc('/example/idExample/anotherExample/anotherIdExample'); 

    if we want a certain collection of items, anotherExample:
    firestore.collection('/example/idExample/anotherExample/');

    We are going to store all users in our db. Right now, there are only in auth. HOW TO DO THIS: 

    When signing in with google, we receive a lot of properties, those needed are: 
    -displayName, email, phoneNumber, and uid (dynamically created id given when we sign in, we can check it out in firebase). We have to take the user object, selecting all needed properties, and put it into the db; 



  */

  /* // firebase 29. storing user data in our state: 

  on App.js:
  before: 

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user); 
    }); 
    
  after: 

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //we pass back the userRef object from firebase.utils, we will use it to check if the db has updated at that ref with new data. we are not going to update the user. 
        //when this method instanciates/when our code runts it, it will still send us a snapShot object representing the store data in our db. That method is onSnapshot(), which is similar to onAuthStateChanged()
        userRef.onSnapshot(snapShot => { //on the snapShot object is where we get the data related to the stored user, or the already stored data related to the user
        //FROM THE NOTES: we get a documentSnapshot object from our documentReference object.  It allows us to check if a doc exists at this query using the .exists property. We can get the actual properties of the obj by using data(). This returns a JSON. if we console.log(snapShot.data()), we can see it. 

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
            // note,       console.log(this.state); cannot go after setState because setState is async, so we pass a second funct as a par in setState
          }/* , () => {
            console.log(this.state); 
          } *//*);

          
        });

        
      } else { //and, if the user signs out, we go back to null
        this.setState({
          currentUser: userAuth
        }); 
      }
    }); 

    Yeah. 
  
  */

  /* // firebase 30. creating the sign up component

import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createdUserProfileDocument, createUserProfileDocument } from '../../firebase/firebase.utils.js';

class SignUp extends React.Component {
    constructor(){
        super(); 

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        //prevents submitting by default 
        //also, we want to create a new user

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return; 
        }

        try { //we will use a new auth method that comes with the library called createUserWithEmailAndPassword
            const { user } = await auth.createUserWithEmailAndPassword(email, password); 

            await createUserProfileDocument(user, { displayName });
            //we write await because if createUserProfileDocument succeeds, we want to reset the state 
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
                //we're setting the state to its initial state here, thus clearing the form
            })
        } catch (error) {
            console.error(error); 
        }
    };

    handleChange = event => {
        const { name, value } = event.target; 

        this.setState({ [name]: value}); //this sets dynamically both object properties with their respective values
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your mail and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={ //destructured values from the state 
                        displayName
                    }
                    onChange={this.handleChange}
                    label='Display Name'
                    required/>

                    
                    <FormInput
                    type='email'
                    name='email'
                    value={ //destructured values from the state 
                        email
                    }
                    onChange={this.handleChange}
                    label='Mail'
                    required/>

                    
                    <FormInput
                    type='password'
                    name='password'
                    value={ //destructured values from the state 
                        password
                    }
                    onChange={this.handleChange}
                    label='Password'
                    required/>

                    
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={ //destructured values from the state 
                        confirmPassword
                    }
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required/>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            
            </div>
        )
    }
}

export default SignUp;

*/ 

/* // firebase 31. importing SignUp to sign-in-sign-up page

  then testing everything: on App.js 

  this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
            // note,       console.log(this.state); cannot go after setState because setState is async, so we pass a second funct as a par in setState
          }/* , () => {
            console.log(this.state); 
          } );

          console.log(this.state); // more testing  
  
  it works; 
*/ 