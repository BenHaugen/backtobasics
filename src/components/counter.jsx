import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/199'
  }
  render() {
    return (
      <div>
      <img src={this.state.imageUrl} alt=""/>
      <span className="count">{this.formatCount()}</span>
      <button className="button">Increment</button>
      </div>
    );
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
  }

}

export default Counter;