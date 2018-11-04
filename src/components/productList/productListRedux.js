import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProducts} from '../../AC/products';
import ProductCard from '../productCard/productCard';

class ProductListRedux extends Component {
    constructor(props) {
        super(props);  
        this.state = {};
      }

  componentDidMount() {
        const {getProducts} = this.props;
        getProducts();
  }    


  getList() {
    const {products} = this.props;
    return products.map(product => <ProductCard key={product._id} {...product}/>)
  }

  render() {
    return (
        <div className='main' >
           {this.getList()}
        </div>
    );
  }
}

export default connect((state) => {
    return {
        count: state.myProductsData.count,
        products: state.myProductsData.products,
    }
}, {getProducts})  (ProductListRedux);