import React, { Component } from 'react';
import OrderList from '../orderPage/orderList';
import {getOrder} from '../../AC/order';
import { connect } from 'react-redux';

class OrderPage extends Component {
      
componentDidMount() {
    const {getOrder} = this.props;
    getOrder();
}    

render() {
    return (
        <div className='order_page' >
            <h1>HELLO FROM ORDER PAGE!!!</h1>
            <OrderList/>
        </div>
    );
  } orderList
}

export default connect((state) => {
    return {
        count: state.myProductsData.count,
        products: state.myProductsData.products,
    }
}, {getOrder}) (OrderPage);