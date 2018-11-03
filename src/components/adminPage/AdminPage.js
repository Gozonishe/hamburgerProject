import React, { Component } from 'react';
import ProductCardAdmin from '../adminPage/productCardAdmin/productCardAdmin';

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
        <div className='admin_page' >
           <h1>HELLO ADMIN</h1>
           <ProductCardAdmin name='azazaza' price = '1111'/>
        </div>
    );
  }
}

export default AdminPage;