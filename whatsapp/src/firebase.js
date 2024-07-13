
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAAVVaPiMejcLlz1rHiFLgLmndIpEadgoE",
  authDomain: "whatsapp-clone-3d16d.firebaseapp.com",
  projectId: "whatsapp-clone-3d16d",
  storageBucket: "whatsapp-clone-3d16d.appspot.com",
  messagingSenderId: "427608387340",
  appId: "1:427608387340:web:bda3eed3daff1bb9af2329"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export {auth, provider};
export default db;