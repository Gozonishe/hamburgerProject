import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {doIncrement, doUmenshit} from '../../AC/index';
import {getProducts} from '../../AC/products';
import './mainPage.css';

class MainPage extends Component {

  handleIncrement = () => {
    const {doIncrement} = this.props;
    doIncrement();
  }

  handleReduce = () => {
    const {doUmenshit} = this.props;
    doUmenshit();
  }
  
  render() {

    const {count} = this.props;

    return (
        <div className='mainPage' >
            <h1>Snow Strorm Snowboarding Store</h1>
            <h1>Snow Strorm Snowboarding Store</h1>
            <h1>Snow Strorm Snowboarding Store</h1>
            <img class = 'mainBackground' src = "https://learnex.com.mx/home/wp-content/uploads/2017/12/snowb.jpg"/> 
            <Button onClick={this.handleIncrement}>Do Increment</Button>
            <Button onClick={this.handleReduce}>Do Reduce</Button>
          <h1>{count}</h1>

        </div>
    );
  }
}

export default connect((state) => {
  return {
      count: state.count,
  }
}, {doIncrement, doUmenshit, getProducts})(MainPage);
