import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/199',
    tags: ['tag1', 'tag2', 'tag3']
  }

  styles = {
    fontSize: 50,
    fontWeight: 'bold'
  }

  render() {
    // let classes = 'count';
    // classes += {this.state.count === 0}

    return (
      <div>
      <img src={this.state.imageUrl} alt=""/>
      <span style={this.styles} className="count">{this.formatCount()}</span>
      <button className="button">Increment</button>
      <ul>
        {this.state.tags.map(tag => <li>{ tag }</li>)}
      </ul>
      </div>
    );
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
  }

}

export default Counter;
