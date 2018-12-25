import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import ReactDOM from 'react-dom';
import { Loader } from 'semantic-ui-react';

class Alert extends Component {
// Random component
  
 render(){
  const LoaderExampleInlineCentered = () => <Loader active inline='centered' /> 
  const Completionist = () => <span>Get Ready To Ride!</span>;
  const renderer = ({seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return <div>
                <span>{seconds}</span><br/> 
                <h1><LoaderExampleInlineCentered/></h1>
             </div>
      }
    };
  return(
    <Countdown
    date={Date.now() + 7000}
    renderer={renderer}
  />
  )}
};
ReactDOM.render(<Alert />, document.getElementById("root"));

export default Alert;

