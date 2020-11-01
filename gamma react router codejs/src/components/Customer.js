import React, { Component } from 'react'

export default class Customer extends Component {
    render() {
        console.log(this.props.user)
        const { userName, permission, email, password } = this.props.user
// console.log("num:", num)
        return (
            <div className="cust" >
                <p>  {this.props.num}- Customer info</p>
                <p>email={email}   </p>
                <p>user name={userName}</p>
                <p> permission={permission} </p>
            </div>
        )
    }
}