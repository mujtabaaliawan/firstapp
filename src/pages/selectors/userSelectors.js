import {useSelector} from "react-redux";

function UserSelectors(){
    const token = useSelector((state) => state.user.token);
    const isActiveSub = useSelector((state) => state.user.activeSub);
    const isTrialSub = useSelector((state) => state.user.trialSub);
    const isManager = useSelector((state) => state.user.manager);

    return {
        token, isActiveSub, isTrialSub, isManager
    }
}


export default UserSelectors;