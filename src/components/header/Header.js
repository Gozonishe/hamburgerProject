import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu stackable>
          <Link to='/'>
            <Menu.Item icon='at'>
              {/* <img src='/logo.png' /> */}
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
          
          <Menu.Item
            name='testimonials'
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            Testimonials
          </Menu.Item>
          
          <Menu.Menu position='right'>
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

            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      )
    }
  }
  

export default Header;