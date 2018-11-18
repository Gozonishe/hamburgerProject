import React, {Component} from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import {addToCart} from '../../AC/order';
import { connect } from 'react-redux';
import './productCard.css';

class ProductCard extends Component {

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
        addToCart(itemInfo); 
    }

    render() {
        const {name, price, _id, image, info} = this.props;

        console.log (name, price, image, info);

        return (
    <Card>
        <Image src = {image} height = "300" width = "300" />
         <div className = 'itemCard' >
        <Card.Content>
        <Card.Header><strong>{name}</strong></Card.Header>
        <Card.Meta>
            <span className='date'>{price} $</span>
        </Card.Meta>
        <Card.Description>{info} <br/><br/> id: {_id}</Card.Description>
        </Card.Content>
        <Card.Content extra height = "300"><br/>
         <Button className = 'button' onClick = {this.handleAddToCart}>Add to cart</Button>
        </Card.Content>
        </div>
  </Card>
  
    )}
    
}

export default connect(null, {addToCart}) (ProductCard);