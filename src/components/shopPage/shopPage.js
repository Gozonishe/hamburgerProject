import React, { Component } from 'react';
import ProductList from '../productList/productList';

class ShopPage extends Component {
      
    render() {

    return (
        <div className='shop_page' >
            <h1>HELLO FROM SHOP PAGE!!!</h1>
            <h2>Тут будут фильтры</h2>
            <ProductList/>
        </div>
    );
  }
}

export default ShopPage;