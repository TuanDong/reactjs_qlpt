import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import configureStore from './redux/configureStore';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MenuComponent from './components/MenuComponent';
import ModalComponent from './components/ModalComponent';
// import ListRoomComponent from './components/list_room/ListRoomComponent';
import ListRenterComponent from './components/list_renter/ListRenterComponent';
import ListRoomContainer from './containers/roomContainer/list_room_container'

const store = configureStore();

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <div className="App">
          <HeaderComponent />
          <MenuComponent />
          <div className="main-content">
            <div className="main-content-inner">
              <div className="page-content">
                <Switch>
                  <Route exact path="/">
                    {/* <ListRoomComponent /> */}
                    <ListRoomContainer />
                  </Route>
                  <Route path="/renter">
                    <ListRenterComponent />
                  </Route>
                  <Route path="/roomrent">
                    
                  </Route>
                </Switch>
                <ModalComponent />
              </div>
            </div>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
