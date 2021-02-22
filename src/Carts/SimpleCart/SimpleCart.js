import React, { Component } from 'react';
import './SimpleCart.css';

class SimpleCart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='cartParent' onClick={() => this.props.retrieveCart(this.props.id)}>
        <div className="cart">
          <div className="image">
            <img src={this.props.imgUrl} />
          </div>
          <div className="content">
            <h4 className="heding">{this.props.heading}</h4>
            <h2>
              {this.props.details}
            </h2>
            <h4 className="address">{this.props.address}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleCart;
