import React, { Component } from 'react';
import ProductListRedux from '../productList/productListRedux';
import { connect } from 'react-redux';
import './shopPageRedux.css';

class ShopPageRedux extends Component {
      
    render() {
    const {count} = this.props;

    return (
        <div className='shop_page' >
            <br/>
            <h2 id = 'topPlace'>Number of Items: {count}</h2>
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