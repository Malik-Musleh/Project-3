import React, { Component } from 'react'
import Order from './order'

export default class OrdersList extends Component {

  render() {
    const ordersList=this.props.orders.map((elem,i)=><Order key={i} orders={elem} num={i+1} id={"0"+i}  />)

    return (
      <div className="orderslist">
        <p>Orders List</p>
        {ordersList}
      </div>
    )
  }
}
