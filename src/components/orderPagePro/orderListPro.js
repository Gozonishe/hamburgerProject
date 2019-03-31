import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProducts} from '../../AC/products';

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