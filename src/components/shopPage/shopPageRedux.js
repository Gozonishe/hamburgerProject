import React, { Component } from 'react';
import ProductListRedux from '../productList/productListRedux';
import { connect } from 'react-redux';
import './shopPageRedux.css';
import Alert from './countdownAlert';

class ShopPageRedux extends Component {
    getCountdown(){
        const {count} = this.props;
        if (count === 0) {
            return <h1 id='coundown'><Alert/></h1>
        }
    }
        
    render() {
    const {count} = this.props;

    return (
        <div className='shop_page' >
            <br/>
            <h2 id = 'topPlace'>Number of Items: {count}</h2>
            <h1 id = 'countdown'>{this.getCountdown()}</h1>
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