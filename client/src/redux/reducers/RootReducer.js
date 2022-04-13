import PostReducer from "./PostReducer";
import {combineReducers} from 'redux'

const RootReducer = combineReducers({post: PostReducer})

export default RootReducer
