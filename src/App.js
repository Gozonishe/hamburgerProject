import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminPage from './components/adminPage/AdminPage';
import Contacts from './components/ContactsPage/Contacts';
import Header from './components/header/Header';
import Login from './components/loginPage/Login';
import MainPage from './components/mainPage/MainPage';
import OrderPagePro from './components/orderPagePro/orderPagePro';
import ShopPageRedux from './components/shopPage/shopPageRedux';
import SignUpPage from './components/signUpPage/signUpPage';

import SideDrawer from './components/sideDrawer/SideDrawer';
import BackDrop from './components/backDrop/BackDrop';


class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () =>{
    this.setState((prevState)=>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <BackDrop click={this.backdropClickHandler}/>;
    }

    return (
      <Router>
        <div className='appRoot' >
          <Header drawerClickHandler = {this.drawerToggleClickHandler}/>
          <SideDrawer show = {this.state.sideDrawerOpen}/>
          {backdrop}
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
