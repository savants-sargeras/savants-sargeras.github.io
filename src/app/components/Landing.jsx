import React, { Component } from 'react';
import axios from 'axios';

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  

  componentWillMount() {
  }

  render() {
    return (
      <div>
        Initial Landing Page
        <button onClick={this.props.controller}>Click</button>
      </div>
    )
  }
}

export default Landing;
