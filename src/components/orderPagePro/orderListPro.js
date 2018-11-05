import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProducts} from '../../AC/products';
import ProductCard from '../productCard/productCard';
import { Button } from 'semantic-ui-react';

import axios from 'axios';

class OrderListPro extends Component {
    constructor(props) {
        super(props);  
        this.state = {};
      }

  componentDidMount() {

  }    

    render() {
      const { count } = this.props;
    return (
        <div className='main' >
            <h1> Orders mount: {count}</h1>
           {this.getList()}          
        </div>
    );
  }
}

export default connect((state) => {
    return {
        count: state.orders.count,
        orders: state.orders.orders,
    }
}, {getProducts})  (OrderListPro);