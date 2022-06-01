
import firebaseClient from "./firebaseClient"
const COLLECTION= 'stadium.json';
export const getStadiums = ()=>{
    return firebaseClient
    .get('stadium.json')
    .catch(err =>console.log(`Error try get stadiums`, err));;
}

export const getStadiumById = (id) =>{
    return firebaseClient
    .get(`${COLLECTION}?orderBy="id"&equalTo="${id}"`)
    .catch(err =>console.log(`Error try get stadium by id: ${id}`, err));
}

export const addStadium =(stadium) =>{
    return firebaseClient
    .post(COLLECTION,stadium)
    .catch(err =>console.log(`Error try save stadium`, err));;
}