import React, { Component } from 'react';
import ProductListRedux from '../productList/productListRedux';
import { connect } from 'react-redux';

class ShopPageRedux extends Component {
      
    render() {
    const {count} = this.props;

    return (
        <div className='shop_page' >
            <h3>Number of Items: {count}</h3>
            <h3>Filters: </h3>
            <ProductListRedux/>
        </div>
    );
  }productListRedux
}

export default connect((state) => {
    return {
        count: state.myProductsData.count,
    }
}, {})  (ShopPageRedux);