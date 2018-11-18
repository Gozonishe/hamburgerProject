import React, { Component } from 'react';
import ProductCardAdmin from '../adminPage/productCardAdmin/productCardAdmin';
import './adminPage.css';
import ProductCardAdminDelete from './productCardAdmin/productCardAdminDelete';

class AdminPage extends Component {
    constructor(props) {
        super(props);  
        this.state = {

        };
      }

  componentDidMount() {

  }    

  render() {
    return (
        <div className='adminPage' >
           <ProductCardAdmin />
           <ProductCardAdminDelete />
        </div>
    );
  }
}

export default AdminPage;