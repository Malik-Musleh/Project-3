import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div>
        <p>register</p>
        <input placeholder="type your email" />
            <input type="password" placeholder="type your password" />
            <button>Sign in</button>
            {/* <Link to="/register" >register. . . </Link> */}
      </div>
    )
  }
}

