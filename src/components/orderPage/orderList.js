import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProducts} from '../../AC/products';
import ProductCard from '../productCard/productCard';
import { Button } from 'semantic-ui-react';

import axios from 'axios';

class OrderList extends Component {
    constructor(props) {
        super(props);  
        this.state = {};
      }

  componentDidMount() {
        const {getProducts} = this.props;
        getProducts();
  }    

  handleTelegaSend(){
    axios.get('https://snowstormapi.herokuapp.com/telegram')
  }

  handleTelegaSendPost = ()=> {
    axios.post('https://snowstormapi.herokuapp.com/telegram', {text: `Oreder count ${JSON.stringify(this.props.orders)}`})
  }


  getList() {
    const {orders} = this.props;
    console.log(orders)
     return orders.map(order => <ProductCard key={order._id} {...order.product}/>)
  }

  render() {
      const { count } = this.props;
    return (
        <div className='main' >
            <Button onClick={this.handleTelegaSend}>TelegaGET</Button>
            <Button onClick={this.handleTelegaSendPost}>TelegaPOST</Button>
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
}, {getProducts})  (OrderList);