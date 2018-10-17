import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './Toolbar.css';
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';
import Products from '../routes/Products';
import Users from '../routes/Users';
import Contacts from '../routes/Contacts';

const toolbar = props => (
    <div>
    <Router>
        <div>
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <DrawerToggleButton click={props.drawerClickHandler}/>
                    </div>
                    <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
                    <div className="spacer"></div>
                    <div className="toolbar__navigation-items">
                        <ul>
                            <li><Link to="/Products">Products</Link></li>
                            <li><Link to="/Users">Users</Link></li>
                            <li><Link to="/Contacts">Contacts</Link></li>
                        </ul>
                    </div>
                </nav>
             </header>
            <Route path="/Products" component={Products}/>;
            <Route path="/Users" component={Users} />;
            <Route path="/Contacts" component={Contacts} />;    
        </div>
    </Router>
    </div>
);

export default toolbar;
