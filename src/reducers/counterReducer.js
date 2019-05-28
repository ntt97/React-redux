import * as types from '../actions/types'


const initialState = 0;
export default counterReducer =(state=initialState,action) =>{
    
    switch(action.type){
        case types.INCREASE:{
            return state+1
        }
        case types.DECREASE:{
            return state-1
        }
        default:
            return state
    }
}