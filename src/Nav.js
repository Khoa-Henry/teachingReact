import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import AboutYou from './pages/AboutYou/AboutYou';
import Calendar from './pages/Calendar/Calendar';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import SideNav from './components/SideNav/SideNav';

export default function nav(){
    return(
        <Router>
            {/* <NavBar/> */}
            <SideNav/>
            <Switch>
                <Route exact path="/aboutyou">
                    <AboutYou />
                </Route>
                <Route exact path="/calendar">
                    <Calendar />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}