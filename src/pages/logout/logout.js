import GlobalSelectors from "../selectors/globalSelectors";
import ClearAllStates from "./utility/clearState";
import Navigation from "./hooks/navigation";
import Selectors from "./selectors/selectors";

function Logout() {
  let {dispatch, navigate} = GlobalSelectors();
  let {navigationUrl, setNavigationUrl} = Selectors();

  ClearAllStates(dispatch, setNavigationUrl);
  Navigation(navigationUrl, navigate);

}

export default Logout;