import { initializeApp } from "firebase/app";
import { getStorage, ref,uploadBytesResumable,getDownloadURL  } from "firebase/storage";

const firebaseConfig = {
  apiKey: '6dc449238ebed9c55f199407c8b7dc27821e92d3	',
  storageBucket:'gs://coderhouse-rn.appspot.com'
};
const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp.options)
//const storage = getStorage(firebaseApp)
//console.log(storage)

// Get a reference to the storage service, which is used to create references in your storage bucket
//const storage = getStorage(firebaseApp,'gs://coderhouse-rn.appspot.com');


