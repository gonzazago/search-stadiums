import { SEARCH_STADIUMS, SEARCH_STADIUMS_SUCCESS, SEARCH_STADIUM_BY_ID } from "./actions"
import data from '../../../mocks/stadiums.json'

export function searchStadiumsAction(){
    return async (dispatch) =>{
        dispatch(searchStadiums());
        setTimeout(()=>{
        dispatch(searchStadiumsSuccess(data.stadiums));
        },5000)
    }
}

export function searchStadiumByIdAction (id){
    return async (dispatch) =>{
        dispatch(searchStadiumById());
        setTimeout(()=>{
            console.log('ID: ',id)
        const stadium = data.stadiums.filter(s => s.id === id)
        dispatch(searchStadiumByIdSuccess(stadium));
        },5000)
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
    type: SEARCH_STADIUM_BY_ID,
    payload: stadium
});