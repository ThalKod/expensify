import * as firebase from "firebase";

const config = {
    apiKey: process.env.FAPI_KEY,
    authDomain: "expensify-b3bd9.firebaseapp.com",
    databaseURL: "https://expensify-b3bd9.firebaseio.com",
    projectId: "expensify-b3bd9",
    storageBucket: "expensify-b3bd9.appspot.com",
    messagingSenderId: "12038575609"
  };


firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
