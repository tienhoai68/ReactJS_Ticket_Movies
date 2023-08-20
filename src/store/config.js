import {combineReducers, createStore} from "redux";
import { bookTickets } from "./reducers/datGheReducer";


const rootReducer =  combineReducers({
    bookTickets: bookTickets,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());