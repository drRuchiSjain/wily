import  firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCPs3gQRekD62ueqWqiwXtEdaQ6rEEqopY",
    authDomain: "wilyapp-9a857.firebaseapp.com",
    databaseURL:"https://wilyapp-9a857.firebaseio.com",
    projectId: "wilyapp-9a857",
    storageBucket: "wilyapp-9a857.appspot.com",
    messagingSenderId: "114578125450",
    appId: "1:114578125450:web:8a49c18640385dc1707373"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  {
     firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();