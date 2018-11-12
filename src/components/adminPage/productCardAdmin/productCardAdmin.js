import React, {Component} from 'react'
import { Card, Input, Image, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { postProducts } from '../../../AC/products';

class ProductCardAdmin extends Component {
    constructor(props) {
        super(props);  
        this.state = { name: '', price: '', image: '', info: '' }
      }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })  

    handleClick = () => {
        const { name, price, image, info } = this.state
        console.log('There are some values will be sent');
        const resultObj = {
            'name': name,
            'price': price,
            'image': image,
            'info': info,
        }
        console.log(resultObj);
        // todo: change url to the heroku url
        // todo: add ability to add picture
        fetch('http://localhost:3000/products', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
                name: name,
                price: price,
                image: image,
                info: info,
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
        const { name, price, image, info } = this.state
        return (
            <div>
            <Card>
                <Image src='https://cdn10.bigcommerce.com/s-4mcngs/product_images/theme_images/gnu_snowboards_sydney_australia__22375.jpg?t=1541465019' />
                <Card.Content>
                <Card.Description><strong>Add new item in the Shop.</strong></Card.Description><br/>
                <Card.Meta>
                    <Input 
                    placeholder='name'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                    />
                </Card.Meta>
                <Card.Meta>
                    <Input 
                        placeholder='price'
                        name='price'
                        value={price}
                        onChange={this.handleChange}
                        />
                </Card.Meta>
                <Card.Meta>
                    <Input 
                        placeholder='image'
                        name='image'
                        value={image}
                        onChange={this.handleChange}
                        />
                </Card.Meta>
                <Card.Meta>
                    <Input 
                        placeholder='info'
                        name='info'
                        value={info}
                        onChange={this.handleChange}
                        />
                </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                <Button onClick={this.handleClick}>Add to Db via Api</Button> 
                <Button onClick={this.handlePost}>POST VIA REDUX</Button>
                </Card.Content>
            </Card>

        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, price, image, info }, null, 2)}</pre>
        </div>
    )}
}

export default connect(null, { postProducts })(ProductCardAdmin); ;