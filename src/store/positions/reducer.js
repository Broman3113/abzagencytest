import {GET_POSITIONS_FROM_DB} from "./actions";

const initialState = {
    success: null,
    positions: []
}

export const positionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSITIONS_FROM_DB:
            return {
                ...state,
                positions: [...state.positions, ...action.payload.positions],
                success: action.payload.success
            }
        default:
            return state;
    }
}
