import React, { Component } from 'react';
import Coin from './Coin';
import './Display.css';

class Display extends Component {
  state = { clicked: false, flipped: 0, heads: 0, tails: 0, outcome: null };
  // clicked = hides coin until button is pressed for first time, flipped, head, tails = counts that are displayed, outcome = gets passed as prop and sets className to display proper image
  randomFlip = (e) => {
    let flip = Math.floor(Math.random() * 2) + 1;
    // instructor logic uses a helper function that takes an array and returns a random index - he makes an array in default props of heads image  and tails image. His coin flip function then returns the obejct according to which "side" or index was selected - that's how he pulls the info and passes it down. Watch this, study this, and learn how to implement it.

    if (flip === 1) {
      this.setState(c => ({
        heads: c.heads + 1,
        outcome: "heads"
      }));
    }
    if (flip === 2) {
      this.setState(c => ({
        tails: c.tails + 1,
        outcome: "tails"
      }));
    }  
    // instructor returns an object and manipulates that - uses ternary instead of if/else - LEARN THIS
    // outcome 1 = heads/2 = tails and state changes with call back - only use heads in the ternary (coin.js)
    this.setState(c => ({
      clicked: c.clicked = true, flipped: c.flipped += 1
    }));
    // flipped count and show coin change state with call back
  }  
  handleClick = (e) => {
    this.randomFlip();
  }
  // standard handleClick function
  render() {    
    return(
      <div>
        <h1>Flip The Coin!</h1>
        <div>
          {this.state.outcome && <Coin face={this.state.outcome} />}
          {/* setting booleans like this is an easy way to avoid using ternaries and css to display things */}
        </div>
        <button onClick={this.handleClick}>Flip!</button>
        <h1>total flips: {this.state.flipped}</h1>
        <h1>total heads: {this.state.heads}</h1>
        <h1>total tails: {this.state.tails}</h1>
      </div>
    );
  }
}

export default Display;