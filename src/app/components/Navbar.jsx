import React, { Component } from 'react';
import axios from 'axios';

import '../css/Navbar.scss';

class Navbar extends Component {
    
  //Initial state should show the home page.    
  constructor(props) {
    super(props);
    this.state = {
        active: this.props.tab
    }
    this.activeHome = this.activeHome.bind(this);
    this.activeDiscord = this.activeDiscord.bind(this);
  }
  activeHome(){
      this.setState({
          active: "home"
      })
      this.props.home();
  }
  
  activeDiscord(){
      this.setState({
          active: "discord"
      })
      this.props.discord();
  }
  
  componentWillMount() {
  }
//TODO: css and javascript needs to be added to make navbar functional
//https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
  render() {
    return (
      <div class="topnav">
        <a href="#home" class={this.state.active === "home" ? 'active' : ''} onClick={this.activeHome}>Home</a>
        <a href="#discord" class={this.state.active === "discord" ? 'active' : ''} onClick={this.activeDiscord}>Discord</a>
      </div>
    )
  }
}

export default Navbar;
