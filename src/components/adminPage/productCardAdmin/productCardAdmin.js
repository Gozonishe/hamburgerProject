import React, {Component} from 'react'
import { Card, Input, Image, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { postProducts } from '../../../AC/products';

class ProductCardAdmin extends Component {
    constructor(props) {
        super(props);  
        this.state = { name: '', price: '' }
      }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })  

    handleClick = () => {
        const { name, price } = this.state
        console.log('There are some values will be sent');
        const resultObj = {
            'name': name,
            'price': price,
        }
        console.log(resultObj);
        // todo: change url to the heroku url
        // todo: add ability to add picture
        fetch('http://localhost:8080/products', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
                name: name,
                price: price,

            })
        }).then(res => res.json())
            .then(res => console.log(res));
    }

    handlePost = () => {
        const {postProducts} = this.props;
        const itemObj= {
            "name": "ABIBAS23",
            "price": 992,
        }
        postProducts(itemObj);
    }

    render() {
        const { name, price } = this.state
        return (
            <div>
            <Card>
                <Image src='https://www.google.ru/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png' />
                <Card.Content>
                <Card.Header>
                    <Input 
                    placeholder='name'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                    />
                </Card.Header>
                <Card.Meta>
                    <Input 
                        placeholder='price'
                        name='price'
                        value={price}
                        onChange={this.handleChange}
                        />
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button onClick={this.handleClick}>Add to Db via Api</Button>
                <Button onClick={this.handlePost}>POST VIA REDUX</Button>
                </Card.Content>
            </Card>

        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, price }, null, 2)}</pre>
        </div>
    )}
}

export default connect(null, { postProducts })(ProductCardAdmin); ;