
import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB8UHuJkn2qNaiV4UKzqgxcBQ0T2StaKlk",
    authDomain: "recipe-generator-7f50e.firebaseapp.com",
    databaseURL: "https://recipe-generator-7f50e-default-rtdb.firebaseio.com",
    projectId: "recipe-generator-7f50e",
    storageBucket: "recipe-generator-7f50e.appspot.com",
    messagingSenderId: "386732262085",
    appId: "1:386732262085:web:00f1fe654bd966b54c26ac"
  };

  const firebase = initializeApp(firebaseConfig);

  


  export default firebase;
  
