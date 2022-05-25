import {legacy_createStore as createStore, combineReducers } from 'redux';
import cardAdd from '../reducers/cardAdd'
const store = createStore(combineReducers({
    
        cardAdds:cardAdd,   
}),
 {
        cardAdds:[]
    }
)

export default store