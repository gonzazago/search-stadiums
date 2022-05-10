import { SEARCH_STADIUMS, SEARCH_STADIUMS_SUCCESS, SEARCH_STADIUM_BY_ID, SEARCH_STADIUM_BY_ID_SUCCESS } from '../actions/stadiums/actions';

const initialSate = {
    fetching:true,
    stadium: {},
    stadiums: [],
}

const stadiumReducer = (state = initialSate, action) =>{

    const {type, payload } = action;
    switch (type){
        case SEARCH_STADIUMS:
        case SEARCH_STADIUM_BY_ID:
             return {...state, fetching: payload};
        case SEARCH_STADIUMS_SUCCESS: 
        return{   
            ...state,
            fetching: false,
            stadiums: payload
        };
        case SEARCH_STADIUM_BY_ID_SUCCESS:
            console.log('SEARCH_STADIUM_BYD')
            console.log('PAYLOAD:', payload);
            return{...state,fetching:false,stadium:payload};
        default: return state;
    }
    
}

export default stadiumReducer;