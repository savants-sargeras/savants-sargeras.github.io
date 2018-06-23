import React from 'react';
import {render} from 'react-dom';

import './../scss/main.scss';

import User from './components/User.jsx';
import Landing from './components/Landing.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx'
import Discord from './components/Discord.jsx'
class App extends React.Component {
  
  //Controller for the web application
  constructor(props) {
    super(props);
    this.state = {
      initial: true,
      cookie: '',
      display: "initial"
    }
    this.displayToHome = this.displayToHome.bind(this);
    this.displayToDiscord = this.displayToDiscord.bind(this);
  }
  
  displayToHome(){
    console.log("Changing display state: home")
    this.setState({
      display: "home"
    })
  }
  
  displayToDiscord(){
    console.log("Changing display state: discord")
    this.setState({
      display: "discord"
    })
  }
  
  componentWillMount() {
    //TODO: Determine cookie validation, if user already visited the site before
  }
  
  render () {
    // if(this.state.initial){
    //   return(
    //     <div>
        
    //       <Landing closeLandingPage={this.closeLandingPage} show={this.state.initial}/>
    //       hidden
    //     </div>
    //   )
    // }
    // else{
    //   return(
    //     <div>
    //       <Landing closeLandingPage={this.closeLandingPage} show={this.state.initial}/>
    //       shown
    //     </div>
    //   )
    // }
    if(this.state.display === "initial"){
      return(
        <Landing controller={this.displayToHome}/>
      )
    }
    else if(this.state.display === "home"){
      return(
        <div>
          <Navbar tab={this.state.display} home={this.displayToHome} discord={this.displayToDiscord}/>
          <Home/>
        </div>
      )
    }
    else if(this.state.display === "discord"){
      return(
        <div>
          <Navbar tab={this.state.display} home={this.displayToHome} discord={this.displayToDiscord}/>
          <Discord/>
        </div>
      )
    }
    else{
      return(
        <User/>
      )
    }
  }
}

render(<App/>, document.getElementById('app'));
