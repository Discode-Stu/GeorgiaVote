import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
  state= {
    isLoggedIn: false,
    userID: '403510764365946',
    name:'',
    email:'',
    picture:''
  }

  responseFacebook = response => {
    console.log(response)
    if(response.status !== 'unknown')
      this.setState({
        isLoggedIn: true,
        name: response.name,
        email: response.email, 
        picture: response.picture.data.url 
      });
  }

  componentClicked = () => console.log('clicked')

  render() {
    const {name, email, picture} = this.state
    let fbContent;

    this.state.isLoggedIn ? 
      fbContent = (
      <div>
        <img src={picture} alt={this.state.name}></img>
        <h2>Welcome {name}</h2> 
        <h3>Logged in using {email}</h3>  
      </div>
      ) :
      fbContent = (
      <FacebookLogin
        appId="403510764365946"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />
      );
    
    return (
      <div>
        {fbContent}
      </div>
    );
  }
}
