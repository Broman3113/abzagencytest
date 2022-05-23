import {getPageFromDB, getUserFromDB, loadFirstPageFromDB} from "../users/actions";

export const fetchUsers = (page = 1, loadFirst = false) => {
    return dispatch => {
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            if (data.success) {
                if (!loadFirst) {
                    dispatch(getPageFromDB([data.total_pages, data.page]));
                    dispatch(getUserFromDB(data.users));
                } else {
                    dispatch(getPageFromDB([data.total_pages, data.page]));
                    dispatch(loadFirstPageFromDB(data.users));

                }

            } else {

            }
        })
    }
}
