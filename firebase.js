import { initializeApp,getApps,getApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnclUHC-NUNO5z3YGtqHSqPzLIUEvE2xg",
  authDomain: "chatapp-mdj.firebaseapp.com",
  projectId: "chatapp-mdj",
  storageBucket: "chatapp-mdj.appspot.com",
  messagingSenderId: "794468019489",
  appId: "1:794468019489:web:591aeeea3ac1a7dd41e260",
  measurementId: "G-LKDWKZBT0P"
};

// Initialize Firebase
let app;

if(getApps().length===0){
  app=initializeApp(firebaseConfig);
}
else{
  app=getApp();
}
const auth=getAuth(app);
export {auth};
