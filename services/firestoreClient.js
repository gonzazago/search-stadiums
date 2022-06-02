
import { collection, getDocs, getFirestore, addDoc, query, where, limit } from "firebase/firestore/lite";
import {firebaseApp} from './firebase';
const db = getFirestore(firebaseApp);



export const getData = async (collectionName) =>{
  const stadiumCollection = collection(db,collectionName);
  const stadiumSnapshot = await getDocs(stadiumCollection);
  const stadiumList = stadiumSnapshot.docs.map(doc => doc.data());
  return stadiumList;
}

export const addData = async (collectionName, document) =>{
  await addDoc(collection(db,collectionName),document)
}

export const getDataById = async (collectionName,id) =>{
  const dbRef = collection(db,collectionName);
  const q = query(dbRef,where("id","==",id),limit(1))
  const documentsSnapShot = await getDocs(q);
  const documentList = documentsSnapShot.docs.map(doc => doc.data());
  console.log(documentList)
  return documentList[0]
}