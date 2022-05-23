export const GET_POSITIONS_FROM_DB = 'GET_POSITIONS_FROM_DB';

export const getPositionsFromDB = (positions) => {
    return{
        type: GET_POSITIONS_FROM_DB,
        payload: positions
    }
}
