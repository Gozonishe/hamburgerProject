import React, {Component} from 'react'
import { Card, Input, Image, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteProducts } from '../../../AC/products';
import '../adminPage.css';

class ProductCardAdminDelete extends Component {
    constructor(props) {
        super(props);  
        this.state = { _id: '' }
      }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })  

    handleClick = () => {
        const { _id } = this.state
        const { deleteProducts } = this.props;
        console.log(_id);
        deleteProducts(_id);
    }

    
    render() {
        const { _id } = this.state
        return (
            <div >
            <Card>
                <Image src='http://3.bp.blogspot.com/-hMexSsa26JY/UZOkhPRu-xI/AAAAAAAAHAE/fm0gpc5qsdo/s640/duncan+macpherson+snowboard.jpg' height='140px' width = '300' />
                <div className = 'controlCard'>
                <Card.Content>
                <Card.Description><br/><strong>Remove item from the Shop.</strong></Card.Description><br/>
                <Card.Meta>
                    <Input 
                    placeholder='_id'
                    name='_id'
                    value={_id}
                    onChange={this.handleChange}
                    />
                </Card.Meta>
                </Card.Content>
                </div>
                <Card.Content extra>
                <Button onClick={this.handleClick}>Remove from the DB</Button> 
                </Card.Content>
            </Card>

        {/* <strong>onRemove:</strong>
        <pre>{JSON.stringify({ _id }, null, 2)}</pre> */}
        </div>
    )}
}

export default connect(null, { deleteProducts })(ProductCardAdminDelete); ;