import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY29yMRdWa_PugnfZnnM3_OKbUDVvrEuo",
  authDomain: "js-store-aizirek.firebaseapp.com",
  projectId: "js-store-aizirek",
  storageBucket: "js-store-aizirek.appspot.com",
  messagingSenderId: "195780837815",
  appId: "1:195780837815:web:563c42a425cbf5a0196832",
  measurementId: "G-VZ9TB365R1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
