import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDG8WM-JkZgprVrhCi0QNRppBCkB5QAfIA",
  authDomain: "coderhouse-rn.firebaseapp.com",
  databaseURL: "https://coderhouse-rn-default-rtdb.firebaseio.com",
  projectId: "coderhouse-rn",
  storageBucket: "coderhouse-rn.appspot.com",
  messagingSenderId: "709226826594",
  appId: "1:709226826594:web:9175ea0f2d37da5288fa3b",
  measurementId: "G-50ZPR573HF"
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;