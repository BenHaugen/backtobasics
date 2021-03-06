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

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
  }

  render() {
    // let classes = 'count';
    // classes += {this.state.count === 0}

    return (
      <div>
        <div>
        <img src={this.state.imageUrl} alt=""/>
        </div>
        <span style={this.styles} className="count">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.renderTags()}
      </div>
    );
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
  }

}

export default Counter;
