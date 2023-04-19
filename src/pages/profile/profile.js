import React from 'react';
import useDocumentName from "../../hooks/documentname";
import { Container} from 'react-bootstrap';
import ProfileDataUpdate from "./hooks/UpdateData";
import ProfilePictureName from "./components/ProfilePictureName";
import ProfileTraderPersonalData from "./components/ProfileTraderPersonalData";
import UserSelectors from "../selectors/userSelectors";
import Selectors from "./selectors/selectors";

const Profile = () => {
    let {token, isActiveSub, isTrialSub} = UserSelectors();
    let {profileData, setProfileData, traderPictureURL, setTraderPictureURL, isManager} = Selectors();

    useDocumentName('Profile');
    ProfileDataUpdate(token, setProfileData, setTraderPictureURL);


 return (
     <div>
         { (!isActiveSub && !isTrialSub && !isManager) ? (<></>) : (
     <div>
      <Container className="mt-5">
          <ProfilePictureName profileData={profileData} traderPictureURL={traderPictureURL}/>
          <ProfileTraderPersonalData data={profileData} />

      </Container>
    </div>
         )}
     </div>
  );
}
export default Profile;