import rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyA3PTQ2mP37o8eHoQc5wGA4Zavg4k5E2iw',
  authDomain: 'qwales1-test-fa2c0.firebaseapp.com',
  databaseURL: 'https://morse-translator.firebaseio.com/',
});

const db = database(app);
const base = rebase.createClass(db);

export default base;
