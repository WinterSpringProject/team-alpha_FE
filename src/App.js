import React, { Component } from 'react';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignInSide from './pages/SignInSide';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';


class App extends Component {
  render(){
  return (
    <Router>
      <Navbar />
        <Route path="/Log-in" exact component={LogIn} />
        <Route path="/Sign-up" exact component={SignUp} />
        <Route path="/Sign-in-side" exact component={SignInSide} />
        <Route path="/Home" exact component={Home} />


        <Route path="/" exact component={SignInSide} />
        <Switch>
        <Route path='/' exact/>
        </Switch>
    </Router>
  );
  }
}

export default App;
