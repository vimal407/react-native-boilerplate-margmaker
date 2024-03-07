import { combineReducers } from 'redux';

const INITIAL_STATE = {
    current: [],
    DDD: [
        'isRed', 
        'isGreen',
        'isPurple',
        'isOrder',
    ],
    color: null,
    id: null,
};

const commonstate = (state = INITIAL_STATE, action) => { 
    switch (action.type) { 
        case 'CLICK_GOOD':
            // console.log('___', action);
            return {...state, color: action.click};
        default: 
            return state
    }
};
 
export default combineReducers({
    values: commonstate,
});
