import {combineReducers} from 'redux'
import ItemReducer from './item/ItemReducer'
import UserReducer from './user/UserReducer'
const RootReducer = combineReducers({
    item : ItemReducer,
    user : UserReducer
})

export default RootReducer