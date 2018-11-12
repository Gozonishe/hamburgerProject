import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import Header from './components/header/Header';
import Contacts from './components/ContactsPage/Contacts';
import Login from './components/loginPage/Login';
import SignUpPage from './components/signUpPage/signUpPage';
import ShopPageRedux from './components/shopPage/shopPageRedux';
import AdminPage from './components/adminPage/AdminPage';
import OrderPagePro from './components/orderPagePro/orderPagePro';

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
            <Route path='/admin' component={AdminPage} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='/shop_page' component={ShopPageRedux} />
            <Route path='/cart' component={OrderPagePro} />
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
