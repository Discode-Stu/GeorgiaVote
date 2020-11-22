import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InstagramLogin from 'react-instagram-login';
 



export default class Instagram extends Component {
  state= {
    isLoggedIn: false,
    userID: '403510764365946',
    name:'',
    email:'',
    picture:''
  }

  responseInstagram = (response) => {
    console.log(response);
  }

  // responseFacebook = response => {
  //   console.log(response)
  //   if(response.status !== 'unknown')
  //     this.setState({
  //       isLoggedIn: true,
  //       name: response.name,
  //       email: response.email, 
  //       picture: response.picture.data.url 
  //     });
  // }

  render() {
    const {name, email, picture} = this.state
    let igContent;

    this.state.isLoggedIn ? 
      igContent = (
      <div>
        <img src={picture} alt={this.state.name}></img>
        <h2>Welcome {name}</h2> 
        <h3>Logged in using {email}</h3>  
      </div>
      ) :
      igContent = (
        <InstagramLogin
        clientId="403510764365946"
        buttonText="Login with Instagram"
        onSuccess={this.responseInstagram}
        onFailure={this.responseInstagram}
      />
      );
    
    return (
      <div>
        {igContent}
      </div>
    );
  }
}
