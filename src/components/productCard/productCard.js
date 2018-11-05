import React, {Component} from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import {addToCart} from '../../AC/order';
import { connect } from 'react-redux';

class ProductCard extends Component {

    handleAddToCart = () => {
        console.log('');
        const {name, price, _id, addToCart} = this.props;
        const itemInfo = {
            name,
            price,
            _id,
        };
        addToCart(itemInfo); 
    }

    

    render() {
        const {name, price} = this.props;
        return (
    <Card>
        <Image src='https://www.google.ru/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png' />
        <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
            <span className='date'>{price} $</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
         <Button onClick = {this.handleAddToCart}>Add to cart</Button>
        </Card.Content>
  </Card>
    )}
}

export default connect(null, {addToCart}) (ProductCard);