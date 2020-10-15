import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAgotvv4yqffGphuLwuMc1WDMOAaC3I5dU",
    authDomain: "discordclone-3eee6.firebaseapp.com",
    databaseURL: "https://discordclone-3eee6.firebaseio.com",
    projectId: "discordclone-3eee6",
    storageBucket: "discordclone-3eee6.appspot.com",
    messagingSenderId: "901068499949",
    appId: "1:901068499949:web:2d5c4f4fd8ec5be96595e4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider };
  export default db;