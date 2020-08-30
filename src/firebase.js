// const firebaseConfig = {

//   };

  import firebase from  'firebase';

  const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyCDPXozbJKSrxpnKuFK5YUBy-7db0JbDbI",
    authDomain: "todo-app-react-9bc78.firebaseapp.com",
    databaseURL: "https://todo-app-react-9bc78.firebaseio.com",
    projectId: "todo-app-react-9bc78",
    storageBucket: "todo-app-react-9bc78.appspot.com",
    messagingSenderId: "922777989076",
    appId: "1:922777989076:web:661cded57fc12f2b173041",
    measurementId: "G-KH1V66S6YS"
  })

  const db = firebaseApp.firestore();
//   const auth = firebaseApp.auth();
//   const storage = firebase.storage();

  export default db;
  
