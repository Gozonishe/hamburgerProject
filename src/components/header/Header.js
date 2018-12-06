import React, { Component } from 'react';
import {Link, Image} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getItemsFromLocalStorage } from '../../AC/order';

import './Header.css';
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';

class Header extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    getTotalPrice () {
      const {itemsFromCart} = this.props;
      const totalPrice = itemsFromCart.reduce((total , item) => total + item.price, 0)
      if (totalPrice !== 0) {
        return ': ' + totalPrice + ' $';
      }
    }

    componentDidMount(){
      this.props.getItemsFromLocalStorage();
    }

    render() {
      const { activeItem } = this.state
  
      return (
        <div className='header'>
        <div className='smallHeader'>
        <div className='toolbar__toggle-button'>
          <DrawerToggleButton click={this.props.drawerClickHandler}/>
        </div>
        <div className='toolbar__logo'><img src='/logotext.png'/></div>
        </div>
        <div className='toolbar__navigation-items'>
        <Menu fixed='enum top' stackable>
          <Link to='/'>
            <Menu.Item icon='home'>
              {/* <img src={'/logotext.png'} size='large'/> */}
            </Menu.Item>
          </Link>

          <Link to='/shop_page'>
            <Menu.Item id='logo'
              active={activeItem === 'shop_page_redux'}
              onClick={this.handleItemClick}
            >
            </Menu.Item>
          </Link>

          <Menu.Menu position='right'>

            <Link to='/cart'>
            <Menu.Item name='order_page_pro' active={activeItem === 'order_page_pro'} onClick={this.handleItemClick}>
                Cart {this.getTotalPrice()} 
            </Menu.Item>
            </Link> 

            <Link to='/contacts'>
            <Menu.Item
              name='contacts'
              active={activeItem === 'contacts'}
              onClick={this.handleItemClick}
            >
              Contacts
            </Menu.Item>
          </Link>

            <Link to='/login'>
              <Menu.Item name='log-in' active={activeItem === 'log-in'} onClick={this.handleItemClick}>
                Log-in
              </Menu.Item>
            </Link>  

            <Link to='/signup'>
              <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
                Sign-in
              </Menu.Item>
            </Link>

            <Link to='/admin'>
              <Menu.Item name='admin' active={activeItem === 'admin'} onClick={this.handleItemClick}>
                Admin
              </Menu.Item>
            </Link>

          </Menu.Menu>
        </Menu>
        </div>
        </div>
      )
    }
  }
  

  export default connect((state) => {
    return {
        itemsFromCart: state.cart.items,
    }
}, {getItemsFromLocalStorage}) (Header);