import React, { Component } from 'react'
import App from '../App'

export default class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "empty",
      price: "empty",
      quantity: "empty",
      color: "empty"
    }

    console.log('constructor', 1);
  }
  //itemName: "Tshert", price: 50, numOfItems: 5, color: "green",

  addedOrder = (e) => {
    // console.log("e:",e.target.value)
    this.setState({ name: e.target.value })
  }
  addedOrderPrice = (e) => {
    // console.log("e:",e.target.value)
    this.setState({ price: e.target.value })
  }
  addedOrderQuantity = (e) => {
    // console.log("e:",e.target.value)
    this.setState({ quantity: e.target.value })
  }
  addedOrderColor = (e) => {
    // console.log("e:",e.target.value)
    this.setState({ color: e.target.value })
  }


  render() {
    const { addedOrder, addedOrderPrice, addedOrderQuantity, addedOrderColor } = this
    return (
      <div>
        <p>NewOrder</p>
        <input onChange={addedOrder} placeholder="add New Order Name" /> 
        <input onChange={addedOrderPrice} placeholder="add New Order Price" />
        <input onChange={addedOrderQuantity} placeholder="add New Order Quantity " />
        <input onChange={addedOrderColor} placeholder="add New Order Color" />

        <button onClick={()=>{this.props.add(this.state.name,
          this.state.price,this.state.quantity,this.state.color)}} >add</button>
          <button onClick={()=>{this.props.update(this.state.name,
          this.state.price,this.state.quantity,this.state.color)}} >update by id </button>
      {/* <App  New={this.state} /> */}
      </div>
    )
  }
}

