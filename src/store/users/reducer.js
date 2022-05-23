import {CHANGE_PAGE_NUMBER, GET_PAGE_FROM_DB, GET_USERS_FROM_DB, LOAD_FIRST_PAGE_FROM_DB} from "./actions";

const initialState = {
    page: 1,
    pageInfo: [],
    users: [
    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_FROM_DB:
            return {...state, users: [...state.users, ...action.payload]}
        case GET_PAGE_FROM_DB:
            return {...state, pageInfo: action.payload}
        case LOAD_FIRST_PAGE_FROM_DB:
            return {...state, users: [...action.payload]}
        case CHANGE_PAGE_NUMBER:
            return {...state, page: action.payload}
        default:
            return state
    }
}
