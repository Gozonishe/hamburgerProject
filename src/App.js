import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import Header from './components/header/Header';
import Contacts from './components/ContactsPage/Contacts';
import Login from './components/loginPage/Login';
import SignUpPage from './components/signUpPage/signUpPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='appRoot' >
          <Header/>
          <div className='AppWrapper'>
            <Route exact path='/' component={MainPage} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUpPage} />
            {/* <Route exact  ath='/asddsasad' component={someCompodsa} /> */}
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
