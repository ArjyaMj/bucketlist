
import * as  firebase from 'firebase'
import Rebase from 're-base';   
  // Your web app's Firebase configuration 

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional     
    var firebaseConfig = { 

    apiKey: process.env.REACT_APP_APIKEY, 

    authDomain: process.env.REACT_APP_AUTHDOMAIN, 

    databaseURL: process.env.REACT_APP_DATABASEURL, 

    projectId: process.env.REACT_APP_PROJECTID, 

    storageBucket: process.env.REACT_APP_STORAGEBUCKET, 

    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID, 

    appId: process.env.REACT_APP_APPID, 

    measurementId: process.env.REACT_APP_MEASUREMENTID 

  }; 

  // Initialize Firebase 

 const fire = firebase.initializeApp(firebaseConfig); 
 const database = fire.database()
 const base = Rebase.createClass(fire.database()) 



 export  {fire , base ,database};
