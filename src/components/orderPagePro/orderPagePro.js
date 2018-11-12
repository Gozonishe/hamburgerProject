import React, { Component } from 'react';
import { Card, Input, Image, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {removeFromCart}  from '../../AC/order';

class OrderPagePro extends Component {

handleRemove = (item) => {
    const {removeFromCart} = this.props;
    console.log('remove ' + item.name + item.price );
    removeFromCart(item._id) 
}

getList(){
    const {itemsFromCart} = this.props;
    if (itemsFromCart.length === 0) {
        return <h1>Cart is empty.</h1>
    }

    return itemsFromCart.map((item)=>{
        return (
        <div>
            <h2>{item.name}</h2>
            <Image src = {item.image} height = '140px' width = '140px' />
            <h3>Price: {item.price} $</h3>
            <Button onClick = {() => this.handleRemove(item)}>Delete</Button>
        </div>
        )
    })

}

render() {
    
    return (
        <div className='order_page_pro' >
            <h1>{this.getList()}</h1>
        </div>
    );
  } 
}

export default connect((state) => {
    return {
        itemsFromCart: state.cart.items,
    }
}, {removeFromCart}) (OrderPagePro);