import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAyyh8NlacJClMM_V2A13X0GwFYRCM7VfY",
    authDomain: "auth-af84a.firebaseapp.com",
    projectId: "auth-af84a",
    storageBucket: "auth-af84a.appspot.com",
    messagingSenderId: "88867304276",
    appId: "1:88867304276:web:c09a88205c17adddf84ec1",
    measurementId: "G-046EH9F2ZK"
  };

  const app = initializeApp(firebaseConfig);


 export const auth = getAuth(app)