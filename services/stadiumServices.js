
import { addData, getData, getDataById } from "./firestoreClient";
const COLLECTION= 'stadium';
export const getStadiums = ()=>{
    return getData(COLLECTION)
}

export const getStadiumById = (id) =>{
    return getDataById(COLLECTION,id)
}

export const addStadium =(stadium) => addData(COLLECTION,stadium);