import firebase from 'firebase/compat/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
} from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import snackbar from 'node-snackbar';
import firebaseConfig from './config';
import 'firebaseui/dist/firebaseui.css';

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());
const provider = new GoogleAuthProvider();
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '#/home',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '#/signin',
  // Privacy policy url.
  privacyPolicyUrl: '#/signin',
};

function signinUI() {
  ui.start('#firebaseui-auth-container', uiConfig);
}

function signOutUser() {
  firebase.auth().signOut()
    .then(() => {
      snackbar.show({
        text: 'Log-out successful!',
        pos: 'top-center',
        backgroundColor: '#18A0FB',
        textColor: 'white',
        actionTextColor: 'black',
        actionText: '<i class="fa-solid fa-xmark"></i>',
        duration: 3000,
        customClass: 'customSnackbar',
      });
    });
}

const userNameElement = document.getElementById('user-name');
const publishElement = document.getElementById('publish');
const signInButtonElement = document.getElementById('signin');
const signOutButtonElement = document.getElementById('logout');

// Returns the signed-in user's display name.
function getUserName() {
  return getAuth().currentUser.displayName;
}

// Returns the signed-in user's id.
function getUserID() {
  return getAuth().currentUser.uid;
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) {
    // User is signed in!
    const userName = getUserName();

    userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    userNameElement.removeAttribute('hidden');
    publishElement.removeAttribute('hidden');
    signOutButtonElement.removeAttribute('hidden');

    // Hide sign-in button.
    signInButtonElement.setAttribute('hidden', 'true');
  } else {
    // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.setAttribute('hidden', 'true');
    publishElement.setAttribute('hidden', 'true');
    signOutButtonElement.setAttribute('hidden', 'true');

    // Show sign-in button.
    signInButtonElement.removeAttribute('hidden');
  }
}

// Initiate firebase auth
function initFirebaseAuth() {
  // Listen to auth state changes.
  onAuthStateChanged(getAuth(), authStateObserver);
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!getAuth().currentUser;
}

export {
  signinUI, initFirebaseAuth, signOutUser, isUserSignedIn, getUserID, getUserName
};
