import React from 'react';
import useDocumentName from "../../hooks/documentname";
import { Container} from 'react-bootstrap';
import ProfileDataUpdate from "./hooks/UpdateData";
import ProfilePictureName from "./components/ProfilePictureName";
import ProfileTraderPersonalData from "./components/ProfileTraderPersonalData";
import UserSelectors from "../selectors/userSelectors";
import Selectors from "./selectors/selectors";
import "./styles/profile.css";
import Navigation from "../logout/hooks/navigation";
import GlobalSelectors from "../selectors/globalSelectors";

const Profile = () => {
    let {token, isActiveSub, isTrialSub, isManager} = UserSelectors();
    let {profileData, setProfileData, traderPictureURL,
        setTraderPictureURL, navigationUrl, setNavigationUrl} = Selectors();
    let {navigate} = GlobalSelectors();

    useDocumentName('Profile');
    ProfileDataUpdate(token, setProfileData, setTraderPictureURL);
    Navigation(navigationUrl, navigate);

 return (
     <div>
         { (!isActiveSub && !isTrialSub && !isManager) ? (<></>) : (
     <div>
      <Container className="mt-5">
          <ProfilePictureName profileData={profileData} traderPictureURL={traderPictureURL}
          setNavigationUrl={setNavigationUrl} />
          <ProfileTraderPersonalData data={profileData} />

      </Container>
    </div>
         )}
     </div>
  );
}
export default Profile;