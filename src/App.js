import './App.css';
import Navigator from './components/Navbarelements/component';
import Routing from './components/Routingelements/component';
import React from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'shepherd.js/dist/css/shepherd.css';

function App() {
    return (
      <>
          <Navigator />
          <Routing />
          <ToastContainer />

      </>
          );
}

export default App;
