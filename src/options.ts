import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

const config = {
  apiKey: "AIzaSyCrnGvl3Ad19xC5BLXgam7i_DiWcIMlvZ0",
  authDomain: "proven-chain-407513.firebaseapp.com",
  projectId: "proven-chain-407513",
  storageBucket: "proven-chain-407513.appspot.com",
  messagingSenderId: "649715351530",
  appId: "1:649715351530:web:2b68f4267506e1ce997c93",
};

const options = {
  logging: true,
};

export const dataProvider = FirebaseDataProvider(config, options);
export const authProvider = FirebaseAuthProvider(config, options);
