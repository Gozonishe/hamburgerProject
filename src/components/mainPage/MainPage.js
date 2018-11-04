import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {doIncrement, doUmenshit} from '../../AC/index';
import {getProducts} from '../../AC/products';

class MainPage extends Component {

  handleIncrement = () => {
    const {doIncrement} = this.props;
    doIncrement();
  }

  handleReduce = () => {
    const {doUmenshit} = this.props;
    doUmenshit();
  }

  handleFetchProducts = () => {
    const {getProducts} = this.props;
    getProducts('ololos');
  }

  render() {
    return (
        <div className='main' >
            <h1>HELLO FROM MAIN PAGE!!!</h1>
            <Button onClick={this.handleIncrement}>Do Increment</Button>
            <Button onClick={this.handleReduce}>Do Reduce</Button>
            <Button onClick={this.handleFetchProducts}>Get Products</Button>
        </div>
    );
  }
}

export default connect(null, {doIncrement, doUmenshit, getProducts})(MainPage);
