export const GET_USERS_FROM_DB = "GET_USERS_FROM_DB";
export const GET_PAGE_FROM_DB = "GET_PAGE_FROM_DB";
export const LOAD_FIRST_PAGE_FROM_DB = "LOAD_FIRST_PAGE_FROM_DB";
export const CHANGE_PAGE_NUMBER= "CHANGE_PAGE_NUMBER";

export const getUserFromDB = (users) => {
    return {
        type: GET_USERS_FROM_DB,
        payload: users
    }
}

export const getPageFromDB = (pageInfo) => {
    return {
        type: GET_PAGE_FROM_DB,
        payload: pageInfo
    }
}

export const loadFirstPageFromDB = (users) => {
    return {
        type: LOAD_FIRST_PAGE_FROM_DB,
        payload: users
    }
}

export const changePageNumber = (page) => {
    return {
        type: CHANGE_PAGE_NUMBER,
        payload: page
    }
}
