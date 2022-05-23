import {getPositionsFromDB} from "../positions/actions";

export const fetchPositions = () => {
    return dispatch => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                dispatch(getPositionsFromDB(data));
            })
    }
}
