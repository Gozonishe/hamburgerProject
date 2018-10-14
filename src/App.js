import React, { Component } from 'react';

import Toolbar from './components/toolbar/Toolbar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';

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
    this.setState({sideDrawerOpen: false});
  }; 

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <BackDrop click={this.backdropClickHandler}/>;
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
        <p>This is a page content</p>
        </main>
      </div>
    );
  }
}

export default App;
