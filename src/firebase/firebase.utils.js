
import firebase from 'firebase/app'; 
import "firebase/firestore";
import "firebase/auth"; 


const config = {
    apiKey: "AIzaSyBl6UPk04I6GNqKoGbnVL2ZLePShhsR1Dk",
    authDomain: "frugalityappreactencore2020.firebaseapp.com",
    databaseURL: "https://frugalityappreactencore2020.firebaseio.com",
    projectId: "frugalityappreactencore2020",
    storageBucket: "frugalityappreactencore2020.appspot.com",
    messagingSenderId: "192292850908",
    appId: "1:192292850908:web:84a14899eba60a535c3819"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {

      const { displayName, email } = userAuth; 
      const createdAt = new Date();
      try { 
        await userRef.set({ 
          displayName,
          email,
          createdAt,
          ...additionalData
        }); 
      } catch (error) { 
        console.log('error creating user', error.message); 
      }

    }

    return userRef; 


  }; 

  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
    console.log(transformedCollection); 

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection; 
      return accumulator; 
    }, {}); 
  }; 

  export const convertPublicationsSnapshotToMap = publications => {
    const transformedPublications = publications.docs.map(doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
    console.log(transformedPublications); 

    return transformedPublications.reduce((accumulator, publication) => {
      accumulator[publication.title.toLowerCase()] = publication; 
      return accumulator; 
    }, {}); 
    
  }; 

  firebase.initializeApp(config); 

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch(); 

    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc(); 
      batch.set(newDocRef, obj); 
    }); 

    return await batch.commit()

  };

  export const addPublicationsAndDocuments = async (publicationKey, objectsToAdd) => {
    const publicationsRef = firestore.collection(publicationKey);

    const batch = firestore.batch(); 

    objectsToAdd.forEach(obj => {
      const newPublicationsDocRef = publicationsRef.doc(); 
      batch.set(newPublicationsDocRef, obj); 
    }); 

    return await batch.commit()

  };

  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account '}); 
  export const signInWithGoogle = () => auth.signInWithPopup(provider); 

  export default firebase; 




