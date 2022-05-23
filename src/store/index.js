import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {usersReducer} from "./users/reducer";
import {positionsReducer} from "./positions/reducer";

const rootReducer = combineReducers({
    users: usersReducer,
    positions: positionsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
