import React, {Component} from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import {addToCart} from '../../AC/order';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import './productCard.css';

class ProductCard extends Component {
    constructor(props){
        super(props);
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }
    handleAddToCart = () => {
        console.log('');
        const {name, price, _id, image, info, addToCart} = this.props;
        const itemInfo = {
            name,
            price,
            _id,
            image,
            info,
        };
        swal({
            title: "Item Added!",
            icon: "success",
            button: "Ok!",
          });
        addToCart(itemInfo);
    }

    render() {
        const {name, price, _id, image, info} = this.props;
        console.log (name, price, image, info);

        return (
    <Card>
        <Image src = {image} height = "300" width = "300" />
         <div className = 'itemCard' >
            <div className = 'infoCard' height = '5000'>
        <Card.Content>
        <Card.Header><strong>{name}</strong></Card.Header>
        <Card.Meta>
            <span className='date'>{price} $</span>
        </Card.Meta>
        <Card.Description>{info} <br/><br/> id: {_id}</Card.Description>
        </Card.Content>
            </div>
        <Card.Content className='extraContent' extra height = "300">
         <Button color = 'teal' className = 'button' onClick = {this.handleAddToCart}>Add to cart</Button>
        </Card.Content>
        </div>
  </Card>
    )}
}

export default connect(null, {addToCart}) (ProductCard);