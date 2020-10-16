import firebase from "firebase";
// eslint-disable-next-line
const firebaseConfig = {
apiKey: "AIzaSyA31-M0WzLf6_MloxPR0Stps4ahuO-Vrdc",
authDomain: "clone-18580.firebaseapp.com",
databaseURL: "https://clone-18580.firebaseio.com",
projectId: "clone-18580",
storageBucket: "clone-18580.appspot.com",
messagingSenderId: "719772949255",
appId: "1:719772949255:web:6acb3e0072840670ae43a2",
measurementId: "G-NRMYB2Z7EK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
const auth = firebase.auth();
export default auth;