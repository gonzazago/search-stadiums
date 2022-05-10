import { SEARCH_STADIUMS, SEARCH_STADIUMS_SUCCESS, SEARCH_STADIUM_BY_ID, SEARCH_STADIUM_BY_ID_SUCCESS } from "./actions"
import data from '../../../mocks/stadiums.json'
import firebaseClient from "../../../services/axios";
import { transformData } from "../../../utils/transformData";

export function searchStadiumsAction(){
    return async (dispatch) =>{
        dispatch(searchStadiums());
        try{
            const response = await firebaseClient.get('stadium.json');
            dispatch(searchStadiumsSuccess(transformData(response.data)))
        }catch(err){
            console.log(err);
        }
    }
}

export function searchStadiumByIdAction (id){
    return async dispatch =>{
        try{
            const response = await firebaseClient.get(`stadium.json?orderBy="id"&equalTo=${id}`);
            const stadium = transformData(response.data);
            dispatch(searchStadiumByIdSuccess(stadium))
        }catch(err){
            console.log(err);
        }
    }  
}

const searchStadiums = () =>({
    type: SEARCH_STADIUMS,
    payload: true
});

const searchStadiumsSuccess = stadiums =>({
    type: SEARCH_STADIUMS_SUCCESS,
    payload: stadiums
});

const searchStadiumById = () =>({
    type: SEARCH_STADIUM_BY_ID,
    payload: true
});

const searchStadiumByIdSuccess = (stadium) =>({
    type: SEARCH_STADIUM_BY_ID_SUCCESS,
    payload: stadium
});