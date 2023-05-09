import GlobalSelectors from "../../selectors/globalSelectors";
import Selectors from "./selectors/selectors";
import Navigation from "./hooks/navigation";
import UserSelectors from "../../selectors/userSelectors";
import ProfileEditBox from "./components/ProfileEditBox";

function EditProfile(){
    let {navigate} = GlobalSelectors();
    let {token} = UserSelectors();
    let{setTraderImage, navigationUrl, formik} = Selectors(token);

    Navigation(navigationUrl, navigate);


    return (
        <div>
            <ProfileEditBox formik={formik} setTraderImage={setTraderImage} />
        </div>
    )

}

export default EditProfile;
