import React, { Component } from 'react';
import './shopPageRedux.css';
import ProductListRedux from '../productList/productListRedux';
import { connect } from 'react-redux';
import ItemsFilter from '../itemsFilter/itemsFilter';
import Alert from './countdownAlert';
import {getProducts} from '../../AC/products';

class ShopPageRedux extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
        }
    }

    getCountdown(){
        const {count} = this.props;
        if (count === 0) {
            return <h1 id='coundown'><Alert/></h1>
        }
    }
      
    filterUpdate = (value) => {
        this.setState({
            filterText: value
        })
        console.log(`filter state ${this.state.filterText}`)
    }

    render() {
    const {count} = this.props;

    return (
        <div className='shop_page' >
            <span className='filter'>
            <br/>
                <ItemsFilter filterText={this.state.filterText}
                             filterUpdate={this.filterUpdate}
                />
                {/* <h2 id = 'topPlace'>Number of Items: {count}</h2> */}
            </span>
            <h1 id = 'countdown'>{this.getCountdown()}</h1>
                <ProductListRedux filterText={this.state.filterText}/>
            <p><a href = "#topPlace" >To the top</a></p>
        </div>
    );
  }
}

export default connect((state) => {
    return {
        count: state.myProductsData.count,
    }
}, {getProducts})  (ShopPageRedux);