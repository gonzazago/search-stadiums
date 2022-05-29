import { ADD_STADIUM_ACCTION, SEARCH_STADIUMS, SEARCH_STADIUMS_SUCCESS, SEARCH_STADIUM_BY_ID, SEARCH_STADIUM_BY_ID_SUCCESS } from '../actions/stadiums/actions';

const initialSate = {
    fetching:true,
    stadium: {},
    stadiums: [],
    error: false,
    succes:false,
    refresh:false,
}

const stadiumReducer = (state = initialSate, action) =>{

    const {type, payload } = action;
    switch (type){
        case SEARCH_STADIUMS:
        case SEARCH_STADIUM_BY_ID:
        case ADD_STADIUM_ACCTION:
             return {...state, fetching: payload};
        case SEARCH_STADIUMS_SUCCESS: 
        return{   
            ...state,
            fetching: false,
            stadiums: payload
        };
        case SEARCH_STADIUM_BY_ID_SUCCESS:
            return{...state,fetching:false,stadium:payload};
        case SEARCH_STADIUMS_SUCCESS:
            return{...state, refresh:true, stadium:payload}
        default: return state;
    }
    
}

export default stadiumReducer;