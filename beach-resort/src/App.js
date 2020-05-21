import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Room from "./pages/Room";
import singleRoom from "./pages/singleRoom";

import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
   <NavBar/>
    <Switch>
   <Route exact path='/' component={Home}/>
   <Route exact path='/rooms'  component={Room}/>
   <Route path='/singleroom:slug' component={singleRoom}/>
   <Route component={Error}/> 
   </Switch>

    </>
  );
}

export default App;
