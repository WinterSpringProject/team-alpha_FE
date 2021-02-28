import React, { Component } from 'react';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';
import Forgot from './pages/Forgot';
import Main from './pages/Main';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


const App = () => {
  {
  return (
    <Router>
      <Navbar />
        <Route path="/Log-in" exact component={LogIn} />
        <Route path="/Sign-up" exact component={SignUp} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Forgot" exact component={Forgot} />
        <Route path="/Main" exact component={Main} />



        <Route path="/" exact component={Homepage} />
        <Switch>
        <Route path='/' exact/>
        </Switch>
        <Sidebar />

    </Router>
  );
  }
}

export default App;
