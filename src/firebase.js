import firebase from "firebase";

let config = {
    apiKey: 'AIzaSyDLn7mFLlSF9f85j3-OacPvV07mJdeXzU8',
    authDomain: 'meczyki.firebaseapp.com',
    projectId: 'meczyki'
};

firebase.initializeApp(config);

export default firebase;