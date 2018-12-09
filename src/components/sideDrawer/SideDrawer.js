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
            <li>
                <Link to='/'>
                     Home
                </Link>
            </li><br/>
            <li>
                <Link to='/shop_page'>
                    Shop Page
                </Link>
            </li><br/>
            <li>
                <Link to='/cart'>
                  Cart
                </Link>
            </li><br/>
            <li>
                <Link to='/contacts'>
                  Contacts
                </Link>
            </li><br/>
            <li>
                <Link to='/login'>
                    Log In
                </Link>
            </li><br/>
            <li>
                <Link to='/signup'>
                    Sign In
                </Link>
            </li><br/>
            {/* <li>
                <Link to='/admin'>
                    Admin
                </Link>
            </li><br/> */}
        </ul>
    </nav>
    );
};

export default sideDrawer;