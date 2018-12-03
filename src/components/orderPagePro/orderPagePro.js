import React, { Component } from 'react';
import { Card, Input, Image, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {removeFromCart}  from '../../AC/order';
import './orderLisrPro.css';
import {callTelegram} from '../../AC/telegramSender';

class OrderPagePro extends Component {

handleRemove = (item) => {
    const {removeFromCart} = this.props;
    console.log('remove ' + item.name + item.price );
    removeFromCart(item._id) 
}

getTotalPrice () {
    const {itemsFromCart} = this.props;
    return itemsFromCart.reduce((total , item) => total + item.price, 0)
}

getList(){
    const {itemsFromCart} = this.props;
    if (itemsFromCart.length === 0) {
        return <h1>Cart is empty.</h1>
    }
    
    return itemsFromCart.map((item)=>{
        return (
        <div key={item._id}>
            <h2 className = 'nameItem'>{item.name}</h2>
            <Image id = 'itemImage' src = {item.image} height = '140px' width = '140px' />
            <h2>Price: {item.price} $</h2>
            <Button className = 'delButton' onClick = {() => this.handleRemove(item)}>Delete</Button>
        </div>
        )
    })

}

handleTelegaSendPost = ()=> {
    const {callTelegram} = this.props;
    callTelegram({text: `Order count ${JSON.stringify(this.getTotalPrice())} $`});
  }

render() {
    const {count} = this.props;

    return (
        <div className='order_page_pro' >
            <h1></h1>
            <h1 className = 'cartList'>{this.getList()}</h1>
                <div className = 'subtotal'> 
                    <h1>Subtotal: {this.getTotalPrice()} $ ({count} items)</h1>
                    <Button id = 'proceedButton' color = 'teal' onClick={this.handleTelegaSendPost}>Proceed to checkout</Button> 
                    <br/>or<br/>    
                    <a href = '/signup'><strong>Sign in to turn on 1-Click ordering.</strong></a>
                </div>    
        </div>
    );
  } 
}

export default connect((state) => {
    return {
        itemsFromCart: state.cart.items,
        count: state.cart.items.length,
    }
}, {removeFromCart,callTelegram}) (OrderPagePro);