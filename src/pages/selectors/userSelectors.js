import {useSelector} from "react-redux";

function UserSelectors(){
    const token = useSelector((state) => state.user.token);
    const isActiveSub = useSelector((state) => state.user.activeSub);
    const isTrialSub = useSelector((state) => state.user.trialSub);

    return {
        token, isActiveSub, isTrialSub
    }
}


export default UserSelectors;