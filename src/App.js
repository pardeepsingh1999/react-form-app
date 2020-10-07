import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import EditDoctorDetails from './Components/EditDoctorDetails/EditDoctorDetails';
import EditDoctorTiming from './Components/EditDoctorTiming/EditDoctorTiming';
// import classes from './App.module.css';

function App() {

  return (
    <div className="App">
      <Switch>
        
        <Route exact path="/" render={() => <Redirect to="/edit-doctor-timing" />} />

        <Route path="/edit-doctor-info" component={EditDoctorDetails} />

        <Route path="/edit-doctor-timing" component={EditDoctorTiming} />

      </Switch>
    </div>
  );
}

export default App;
