import React, { Component } from 'react';

class ShopPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            count: '',

        };
      }

    componentDidMount() {
        fetch('https://snowstormapi.herokuapp.com/products')
            .then(res => res.json())
            .then(data => this.setState({
                count: data.count,
            }));
      }
      
    render() {
        console.log('render');
    return (
        <div className='shop_page' >
            <h1>HELLO FROM SHOP PAGE!!!</h1>
            <h1>total count: {this.state.count}</h1>
        </div>
    );
  }
}

export default ShopPage;