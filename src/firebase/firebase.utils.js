import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAdEhkwBKQ3HJoYlHR48R3ksdZ70szmSCc",
    authDomain: "react-store-b9a32.firebaseapp.com",
    databaseURL: "https://react-store-b9a32.firebaseio.com",
    projectId: "react-store-b9a32",
    storageBucket: "react-store-b9a32.appspot.com",
    messagingSenderId: "971841807659",
    appId: "1:971841807659:web:062252443895d3a70d516e",
    measurementId: "G-PK7VMC192J"
};

export const createUserProfileDocument = async (userAuth, data) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            });
        } catch(error) {
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
