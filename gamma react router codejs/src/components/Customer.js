import React, { Component } from 'react'

export default class Customer extends Component {
    render() {
        // console.log(this.props.user)
        const { birthday, userId, userName, permission, email, password } = this.props.user
        // console.log("num:", num)
        return (
            <div className="cust" >
                <p>  {this.props.num}- Customer info</p>
                <p>email={email}   </p>
                <p>user name={userName}</p>
                <p> permission={permission} </p>
                <p>user id -- {userId} --</p>
                <p>birthday={birthday}</p>
            </div>
        )
    }
}
//birthday: 2
// email: "user4@gmail.com"
// password: "$2b$10$TdGMMN3IdzQ5DXDhyacbfO.S0aIBUVrtDvWYhCXYW1gvRQlOI7ThO"
// permissions: "r ,w ,u ,d"
// userId: 1
// userName: "ahmed"