import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProducts} from '../../AC/products';
import ProductCard from '../productCard/productCard';
import "./productListRedux.css";

class ProductListRedux extends Component {
  constructor(props) {
      super(props);  
      this.state = {
      };
    }

  componentDidMount() {
        const {getProducts} = this.props;
        getProducts();
  }    

  getList() {
    const {products, filterText} = this.props;
    
    return products
      .filter(product => product.name.toString().toLowerCase().indexOf(filterText) !== -1 || product.info.toString().toLowerCase().indexOf(filterText) !== -1)
      .map(product => <ProductCard key={product._id} {...product}/>)
  }

  render() {
    return (
        <div className='productList' >
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