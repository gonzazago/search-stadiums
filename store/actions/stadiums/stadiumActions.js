import { ADD_STADIUM_ACCTION_ERROR, ADD_STADIUM_ACCTION_SUCCESS, SEARCH_STADIUMS, SEARCH_STADIUMS_SUCCESS, SEARCH_STADIUM_BY_ID, SEARCH_STADIUM_BY_ID_SUCCESS } from "./actions"
import { transformData } from "../../../utils/transformData";
import { getStadiumById, getStadiums,addStadium } from "../../../services/stadiumServices";
import { Alert } from "react-native";

export function searchStadiumsAction(){
    return async (dispatch) =>{
        dispatch(searchStadiums());
        try{
            const response = await getStadiums('stadium.json');
            console.log(response)
            dispatch(searchStadiumsSuccess(transformData(response.data)))
        }catch(err){
            console.log(err);
        }
    }
}

export function searchStadiumByIdAction (id){
    return async dispatch =>{
        try{
            const response = await getStadiumById(id);
            const stadium = transformData(response.data);
            dispatch(searchStadiumByIdSuccess(stadium))
        }catch(err){
            console.log(err);
        }
    }  
}

export function addStadiumAction (stadium){
    return async dispatch =>{
        try{
            const response = await addStadium(stadium);
            console.log(response);
            dispatch(addStadiumSuccess(response.data))
            Alert.alert(
                "Cancha Agregada Correctamente",
                "Su cancha ha sido guardad correctamente",
            )
        }catch(err){
            console.log(err)
            dispatch(addStadiumError())
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



const addStadiumSuccess = (stadium) =>({
    type: ADD_STADIUM_ACCTION_SUCCESS,
    payload: stadium
})

const addStadiumError = () =>({
    type: ADD_STADIUM_ACCTION_ERROR,
    payload: true
})