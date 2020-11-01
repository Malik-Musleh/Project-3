import React, { Component } from 'react'
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  aEmail = (e) => {
    // console.log("e:",e.target.value)
    // console.log("this.edited.eUserName:",this.state.edited.eUserName)
    
    this.setState({ aEmail: e.target.value })
  }  
  aUserName = (e) => {
    // console.log("e:",e.target.value)
    // console.log("this.edited.eUserName:",this.state.edited.eUserName)
    
    this.setState({ aUserName: e.target.value })
  }
  aId = (e) => {
    // console.log("e:",e.target.value)
    this.setState({aId: e.target.value })
  }
  aPassword = (e) => {
    // console.log("e:",e.target.value)
    this.setState({aPassword: e.target.value })
  }
  aPermission = (e) => {
    // console.log("e:",e.target.value)
    this.setState({aPermission: e.target.value })
  }
  aBirthDay = (e) => {
    // console.log("e:",e.target.value)
    this.setState({ aBirthDay: e.target.value })
  }
  newRegister = () => {
    const addedUser = {
      email: this.state.aEmail,
      userName: this.state.aUserName,
      id: this.state.aId,
      password: this.state.aPassword,
      permission: this.state.aPermission,
      birthDay: this.state.aBirthDay,
    }
    // if (addedUser.email==="") {
      
    axios.post("http://localhost:4000/register", addedUser).then((res) => {
      console.log("res reg", res.data);
      // this.setState({ users: res.data })
      alert(res.data)
    }).catch((err) => {
      console.log("err", err);
    })
  }
  render() {
    const{newRegister,aEmail,aUserName,aId,aPassword,aPermission,aBirthDay}=this
    return (
      <div>
        <p>register</p>
        {/* <input placeholder="type your email" /> */}
            <input onChange={aPassword} type="password" placeholder="type your password" />
            <input onChange={aEmail} placeholder="type your email" />
      <input onChange={aUserName} placeholder="type your UserName" />
      <input onChange={aId} placeholder="type your Id" />
      <input onChange={aPermission} placeholder="type your Permission" />
      <input type="date" onChange={aBirthDay} placeholder="type your BirthDay" />
            <button onClick={newRegister} >Sign in</button>
            {/* <Link to="/register" >register. . . </Link> */}
      </div>
    )
  }
}

