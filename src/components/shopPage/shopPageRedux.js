import React, { Component } from 'react';
import ProductListRedux from '../productList/productListRedux';

class ShopPageRedux extends Component {
      
    render() {

    return (
        <div className='shop_page' >
            <h1>HELLO FROM SHOP PAGE REDUX!!!</h1>
            <h2>Тут будут фильтры</h2>
            <ProductListRedux/>
        </div>
    );
  }productListRedux
}

export default ShopPageRedux;