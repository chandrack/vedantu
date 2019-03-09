
import { combineReducers } from 'redux';
import vedantuReducer from './vedantuReducer';
const rootReducer = combineReducers({  
        vedantuReducer:vedantuReducer
});

export default rootReducer;