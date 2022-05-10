import axios  from "axios";
import {FIREBASE_URL} from '../constanst/firebase'

const  firebaseClient = axios.create({
    baseURL: FIREBASE_URL,
    headers:{
        'Content-Type': 'application/json'
    }

});

export default firebaseClient;

