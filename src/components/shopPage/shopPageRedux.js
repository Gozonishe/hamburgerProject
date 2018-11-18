import React, { Component } from 'react';
import ProductListRedux from '../productList/productListRedux';
import { connect } from 'react-redux';
import './shopPageRedux.css';

class ShopPageRedux extends Component {
      
    render() {
    const {count} = this.props;

    return (
        <div className='shop_page' >
            <h3 id = 'topPlace'>Number of Items: {count}</h3>
            <h3>Filters: </h3>
            <ProductListRedux/>
            <p><a href = "#topPlace" >To the top</a></p>
        </div>
    );
  }productListRedux
}

export default connect((state) => {
    return {
        count: state.myProductsData.count,
    }
}, {})  (ShopPageRedux);