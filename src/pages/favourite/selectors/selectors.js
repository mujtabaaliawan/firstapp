import {useSelector} from "react-redux";
import {useState} from "react";

function FavouriteSelectors(){
    const favourite_state = useSelector((state) => state.favourite.value);
    const [favouriteData, setFavouriteData] = useState([]);

    return {
        favourite_state, favouriteData, setFavouriteData
    }
}

export default FavouriteSelectors;