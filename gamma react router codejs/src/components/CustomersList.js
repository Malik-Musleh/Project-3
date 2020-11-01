import React, { Component } from 'react'
import Customer from './Customer'

export default class CustomersList extends Component {
  render() {
    const customersList=this.props.users.map((elem,i)=><Customer key={i} user={elem} num={i+1}  />)
    return (
      <div  className="custList">
        <p>The Customers List</p>
        {customersList}
      </div>
    )
  }
}
