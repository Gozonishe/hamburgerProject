import React, { Component } from 'react';
import { connect } from 'react-redux';
import {doIncrement, doUmenshit} from '../../AC/index';
import {getProducts} from '../../AC/products';
import './mainPage.css';
import  SimpleSlider from './carousel';

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
        <div className='mainPage' id='mainPage' >
            <SimpleSlider/>
        </div>
    );
  }
}

export default connect((state) => {
  return {
      count: state.count,
  }
}, {doIncrement, doUmenshit, getProducts})(MainPage);
