import {useEffect} from "react";
import FavouriteData from "../services/getFavouriteData"

function FavouriteDataUpdate(token, setFavouriteData, favourite_state){

    useEffect(() => {
        FavouriteData(token, setFavouriteData)
    }, [token, favourite_state, setFavouriteData])
}

export default FavouriteDataUpdate;