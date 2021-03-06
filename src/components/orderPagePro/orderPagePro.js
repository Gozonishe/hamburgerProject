import React, { Component } from 'react';
import { Card, Image, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import swal from 'sweetalert';

import {removeFromCart, setContact}  from '../../AC/order';
import './orderLisrPro.css';
import {callTelegram} from '../../AC/telegramSender';


class OrderPagePro extends Component {
    state = {
        orderInfo: ''
    }

handleRemove = (item) => {
    const {removeFromCart} = this.props;
    console.log('remove ' + item.name + item.price );
    removeFromCart(item._id) 

    swal({
        title: "Item Removed!",
        icon: "info",
        button: "Ok!",
      });
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
        <Card id='itemCard'>
            <Image id = 'itemImage' src={item.image} height = "200" width = "200"/>
                <Card.Content id = 'itemContent'>
                    <Card.Header id = 'itemInfo'>{item.info}</Card.Header>
                    <Card.Description id = 'itemPrice'>{item.price} $</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button className = 'delButton' onClick = {() => this.handleRemove(item)}>Delete</Button>
                </Card.Content>
        </Card>
    </div>
        )
    })
}

handleTelegaSendPost = ()=> {
    const {callTelegram} = this.props;
    callTelegram({text: `Order subtotal: ${JSON.stringify(this.getTotalPrice())}$, Customer contact: ${this.props.contacts}`});
  }

handleSubmit = () => {
    this.setState({
    orderInfo: this.props.contacts
    })

    this.state.orderInfo === undefined ||  this.state.orderInfo === null ? 
    console.log('NO DATA') : swal({
                                        title: "Your order has been accepted!",
                                        icon: "success",
                                        button: "Ok!",
                                        })      
}

updateInputValue(evt) {
    this.props.setContact(evt.target.value)
}
 
render() {
    const {count} = this.props;
    return (
        <div className='order_page_pro' >
            <h1 className = 'cartList'>{this.getList()}</h1>
                <div id = 'subtotal'> 
                    <h1 id='subtotalHeader'>Subtotal ({count} items): $<u>{this.getTotalPrice()} </u></h1>
                    <h2><b>Your contact phone number:</b></h2>
                        <div className='contactInfo'>
                            <Form onSubmit={this.handleSubmit} >
                                <Form.Group id='formItems'>
                                    <Form.Input>
                                        <InputMask
                                            placeholder='Phone number' 
                                            name='name'
                                            id='contactInput'
                                            onChange={evt => this.updateInputValue(evt)}
                                            type='text'
                                            required
                                            mask="+7\ (999) 999-9999"
                                            maskChar="_"
                                        />
                                    </Form.Input>
                                    <Form.Button onClick={this.handleTelegaSendPost} color='teal' content='Proceed to checkout' id='submitButton'/>
                                </Form.Group>
                            </Form>
                        </div>
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
        contacts: state.orders.contacts, 
    }
}, {removeFromCart,callTelegram,setContact}) (OrderPagePro);