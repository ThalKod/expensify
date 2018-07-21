import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCJfyqoUGeAPeR9aBER1_I6afsSjTgH9O4",
    authDomain: "expensify-b3bd9.firebaseapp.com",
    databaseURL: "https://expensify-b3bd9.firebaseio.com",
    projectId: "expensify-b3bd9",
    storageBucket: "expensify-b3bd9.appspot.com",
    messagingSenderId: "12038575609"
  };

  firebase.initializeApp(config);

firebase.database().ref().set({
    name: "Thal Marcelin"
});

