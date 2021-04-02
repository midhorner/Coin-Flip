import React, { Component } from 'react';
import './Coin.css';
// instructor sets the images as default props in the parent - I like keeping the images in the coin component, since they are the coin
import heads from './heads.jpg';
import tails from './tails.jpg';

class Coin extends Component{
  render() {    
    return(
      <div>
        <img className="coin" src={this.props.face === "heads" ? heads : tails} alt={this.props.face} />
        {/* outcome state passed as prop and sets className
        source images imported and used by calling heads/tails */}
      </div>
    )
  }
}

export default Coin;