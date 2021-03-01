import React, { Component } from 'react';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';
<<<<<<< HEAD
import Forgot from './pages/Forgot';
import Main from './pages/Main';
=======

>>>>>>> 74bc897bb0a324c501c74e9165bcd2cb9290c93c


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


<<<<<<< HEAD
const App = () => {
  {
=======
class App extends Component {
  render(){
>>>>>>> 74bc897bb0a324c501c74e9165bcd2cb9290c93c
  return (
    <Router>
      <Navbar />
        <Route path="/Log-in" exact component={LogIn} />
        <Route path="/Sign-up" exact component={SignUp} />
<<<<<<< HEAD
        <Route path="/Home" exact component={Home} />
        <Route path="/Forgot" exact component={Forgot} />
        <Route path="/Main" exact component={Main} />

=======
        <Route path="/Homepage" exact component={Homepage} />
        <Route path="/Home" exact component={Home} />
>>>>>>> 74bc897bb0a324c501c74e9165bcd2cb9290c93c


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
