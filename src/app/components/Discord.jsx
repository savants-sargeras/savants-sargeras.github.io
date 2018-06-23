import React, { Component } from 'react';
import axios from 'axios';

class Discord extends Component {

  constructor(props) {
    super(props);
    this.state = {
      webhook: "https://discordapp.com/api/webhooks/460143961365807104/zEry_5KjqWz8eLNAIMtt9jMYyfFWmetkE9smeg3mXBuZZOGyC_2VvmC6XqnJIMqToZAQ"
    }
  }

  componentWillMount() {
    axios.get(this.state.webhook)
      .then((response)=>{
        console.log(response);
        console.log(response.data.name);
        console.log()
        var post = {
          name: response.data.name,
          content: 'Hello, I\'m a god'
        }
        axios.post(this.state.webhook, post)
          .then((response)=>{
            console.log(response);
          })
      })
  }

  render() {
    return (
      <div>
        Discord Application.... coming soon.
      </div>
    );
  }
}

export default Discord;
