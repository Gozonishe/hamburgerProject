import React  from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';


const sideDrawer = props =>{
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className = {drawerClasses}>
        <ul>
            {/* <li><a href = "/">Home</a></li><br/> */}
            <li>
                <Link to='/'>
                     Home
                </Link>
            </li>
            <li><a href = "/shop_page">Shop Page</a></li><br/>
            
            <li>
                <Link to='/cart'>
                  Cart
                </Link>
            </li>

            <li><a href = "/contacts">Contacts</a></li><br/>
            <li><a href = "/login">Log-In</a></li><br/>
            <li><a href = "/signup">Sign-In</a></li><br/>
            <li><a  href = "/admin">Admin</a></li><br/>
        </ul>
    </nav>
    );
};

export default sideDrawer;