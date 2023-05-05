import {set_tourMode} from "../../pages/login/reducers/userSlice";

const skipTour = (token, dispatch) => {
    let updateUrl = 'http://127.0.0.1:8000/trader-update';
    fetch(updateUrl, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({"tour_mode": false})
    })
    .then(response => {
        if (response.ok) {
            dispatch(set_tourMode(false));
        }
    })
        .catch(error => console.log(error))
}

export default skipTour;