import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import RootReducer from "./reducers/RootReducer";
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga'




// const persistedState = localStorage.getItem("reduxState") 
// ? JSON.parse(localStorage.getItem("reduxState"))
// : {};

const sagaMiddleware = createSagaMiddleware()
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk,sagaMiddleware))) // persistedState добавить рядом с рут редюсером


// store.subscribe(()=> {
//    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })



sagaMiddleware.run(rootSaga)
export default store
