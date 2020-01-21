import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal';







// import SettingsContainer from './profile/settings_container';

const App = () => (
  <div className={'mainDiv'}>
    <div className={'NavDivWidth'}>
      <NavBarContainer />
    </div>
    <div className={'body'}> 
    <Switch>
      
    </Switch>
      <Modal />
    </div>
  </div>
);

export default App;