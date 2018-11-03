import React, { Component } from 'react';
import ProductCard from '../productCard/productCard';

class ProductList extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            productsData: [],
            count: 0,
        };
      }

  componentDidMount() {
    fetch('https://snowstormapi.herokuapp.com/products')
    .then(res => res.json())
    .then(data => this.setState({
        count: data.count,
        productsData: data.products,
     }))
  }    


  getList() {
    const {productsData} = this.state;
    return productsData.map(product => <ProductCard key={product._id} {...product}/>)
  }

  render() {
    return (
        <div className='main' >
           {this.getList()}
        </div>
    );
  }
}

export default ProductList;