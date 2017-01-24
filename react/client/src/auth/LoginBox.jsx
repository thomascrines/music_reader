import React from 'react'
const SignIn = require('./SignIn')
const SignUp = require('./SignUp')
const SignOut = require('./SignOut')

const LoginBox = React.createClass({
  getInitialState: function() {
    return {currentUser: null}
  },

  setUser: function(user) {
    this.setState({currentUser: user})
  },

  fetchUser: function() {
    var url = this.props.url + 'users.json'
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200) {
       var recievedUser = JSON.parse(request.responseText)
       this.setUser(recievedUser)
     } else if (request.status ===401) {
      this.setUser(false)
    } else {
      browserHistory.goBack()
    }
  }
  request.send()
}, 

componentDidMount: function() {
  this.fetchUser()
},

render: function () {
  var mainDiv = <div>
  <h4>Sign in/Sign up</h4>
  <SignIn url={this.props.url + 'users/sign_in.json'} onSignIn={this.setUser}>
  </SignIn>
  <SignUp url={this.props.url + 'users.json'} onSignUp={this.setUser}>Sign Up</SignUp>
  </div>
  if(this.state.currentUser) {
    mainDiv = <div>
    <h4>User account: {this.state.currentUser.email}</h4>
    <SignOut url={this.props.url + 'users/sign_out.json'} onSignOut={this.setUser} />
    </div>
  } return (
    <div>{mainDiv}</div>)
}
})

module.exports = LoginBox
