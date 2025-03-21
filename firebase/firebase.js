import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth';
import {
  getDatabase,
  ref as firebaseDatabaseRef,
  set as firebaseSet,
  child,
  get,
  onValue,
} from 'firebase/database';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC1I4OQ3tlWEGJbw9haCLbnPFHSVqXxBVg',
  authDomain: 'trainingapp-57742.firebaseapp.com',
  projectId: 'trainingapp-57742',
  databaseURL: 'https://trainingapp-57742-default-rtdb.firebaseio.com/',
  storageBucket: 'trainingapp-57742.appspot.com',
  appId: '1:293041969649:android:e8236d9046c31db00ecc50',
  messagingSenderId: '293041969649',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();

export {
  auth,
  firebaseDatabase,
  firebaseSet,
  firebaseDatabaseRef,
  child,
  get,
  onValue, //reload when db change
};
