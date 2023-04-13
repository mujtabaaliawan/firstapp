import './App.css';
import Navigator from './components/Navbarelements/component';
import Routing from './components/Routingelements/component';
import React from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'shepherd.js/dist/css/shepherd.css';
import 'react-tooltip/dist/react-tooltip.css'
import './styles/tour.css'
import {useSelector} from "react-redux";
import LoadingAnimation from "./components/LoadingComponent/component";

function App() {
    let isLoading = useSelector((state) => state.loading.value);
    return (
      <>
          <Navigator />
          <Routing />
          <ToastContainer />
          {isLoading && <LoadingAnimation />}
      </>
          );
}

export default App;
