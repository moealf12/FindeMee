import React from 'react';
import logo from './logo.svg';
import './comps/home/home.css'

import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './comps/home/land.js'
import Reg from './comps/regester/reg.js'
import {
    Container,
    Icon,

    List,
    ListItem,
    Offcanvas,
    OffcanvasContainer,
    Navbar,
    NavbarContainer,
    NavbarSticky,
    Section,
    NavbarDropdown,
    Button,
    NavItem
} from 'uikit-react';
function App() {
  return (
  <Router>
    <Switch>
      <Route  path='/' exact component={Home}/>
    <Route  path='/regster' exact component={Reg}/>
    </Switch>
  </Router>
  );
}

export default App;
