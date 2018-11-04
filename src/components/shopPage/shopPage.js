import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../productList/productList';

class ShopPage extends Component {
      
    render() {
    const {count} = this.props;    
    return (
        <div className='shop_page' >
            <h1>HELLO FROM SHOP PAGE!!!</h1>
            <h2>Тут будут фильтры</h2>
            <h3>Всего продуктов: {count}</h3>
            <ProductList/>
        </div>
    );
  }
}

export default connect((state) => {
    return {
        count: state.myProductsData.count,
    }
}, {})  (ShopPage);