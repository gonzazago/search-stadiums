import {firebaseApp} from './firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { Alert } from 'react-native';

const storage = getStorage(firebaseApp);



const metadata = {
    contentType: 'image/jpg',
  };

export const uploadFile = async (fileUri) =>{
    const file = await fetch(fileUri)
    console.log('FILE',file)
    const fileBlob = await file.blob();
    const name = new Date().getTime()+'.jpg'
    const imagesRef = ref(storage,`images/${name}`);
    const task = uploadBytesResumable(imagesRef,fileBlob);

    let finalUrl;

    task.on('state_changed',
    (snapshot) =>{
        console.log('bytes Transferred', snapshot.bytesTransferred)
        console.log('bytes totalBytes', snapshot.totalBytes)
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
    },
    (error)=>{
        console.log(error);
        Alert.alert(
            'Error subiendo la imagen seleccionada')
    },
    ()=>{
        getDownloadURL(task.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            finalUrl = downloadURL;
          });
    });
    console.log('URL:', finalUrl)
    return finalUrl;
}

