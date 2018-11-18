import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

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

    render() {
      const { activeItem } = this.state
  
      return (
        <Menu fixed='enum top' stackable>
          <Link to='/'>
            <Menu.Item icon='home'>
            </Menu.Item>
          </Link>

          <Link to='/shop_page'>
            <Menu.Item
              name='shop_page_redux'
              active={activeItem === 'shop_page_redux'}
              onClick={this.handleItemClick}
            >
              Shop Page
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
      )
    }
  }
  

  export default connect((state) => {
    return {
        itemsFromCart: state.cart.items,
    }
}, {}) (Header);