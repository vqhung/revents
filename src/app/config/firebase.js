import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8GxYCoZWdr2hSqsKCoHTs9LS1Fy2EvX0",
    authDomain: "revents-217203.firebaseapp.com",
    databaseURL: "https://revents-217203.firebaseio.com",
    projectId: "revents-217203",
    storageBucket: "revents-217203.appspot.com",
    messagingSenderId: "857686383588"
  }

  firebase.initializeApp(firebaseConfig);
  
  const firestore = firebase.firestore()

  const settings = {
      timestampsInSnapshots: true,
  }

  firestore.settings(settings)
  
  export default firebase;