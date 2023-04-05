
const skipTour = (token) => {
        let updateUrl = 'http://127.0.0.1:8000/trader-update';
        fetch(updateUrl, {
        method: "PATCH",
        headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({"tour_mode": false})
        })
}

export default skipTour;