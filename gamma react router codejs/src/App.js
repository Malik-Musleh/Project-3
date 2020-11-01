
import React, { Component } from 'react';
import axios from 'axios';
// import express from 'express';
// import cors from 'cors';
// app.use(cors())
// app.use(express.json())
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import OrdersList from './components/OrdersList';
import CustomersList from './components/CustomersList';
import NewOrder from './components/NewItem';
import Register from './components/Register';
import About from './components/About';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ permission: "w,r,u,d", userName: "malek", email: "malek@how.com", password: "1234" },
      { permission: "w,r", userName: "malek2", email: "malek@how.com", password: "1234" }
      ],
      orders: [],
      orderId: "",
      login: true
    }

    console.log('constructor', 1);
  }
  getOrders = () => {
    axios.get("http://localhost:4000/orders").then((res) => {
      // console.log("res:", res.data)
      this.setState({ orders: res.data })
      console.log("get orders done")

    })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidMount = () => this.getOrders()
  addOrder = (nN, nP, nNum, nC) => {
    // req.body.category, req.body.itemName, 
    // req.body.color, b.price, b.id, b.quantity
    let i = 1
    const newOrder = {
      orderId: i++,
      category: "pants",
      itemName: nN,
      color: nC,
      price: nP,
      quantity: nNum,
    }
    // console.log("newOrder:",newOrder  )
    axios.post("http://localhost:4000/orders/add", newOrder).then((res) => {
      // console.log("res:", res.data)
      const Arr = [...this.state.orders]
      Arr.push(newOrder)
      this.setState({ orders: Arr })
      console.log("add order done")

      this.getOrders()
    })
      .catch((err) => {
        console.log(err)
      })
  }
  orderId = (e) => {
    // console.log("e:",e.target.value)
    this.setState({ orderId: e.target.value })
  }
  deleteOrder = () => {
    const deletebyId = Number(this.state.orderId)
    axios.post("http://localhost:4000/orders/delete", { dId: deletebyId }).then((res) => {
      // console.log("res:", res.data)
      console.log("delete order done")

      this.getOrders()
      // this.setState({ orders: res.data })
    })
      .catch((err) => {
        console.log(err)
      })
  }
  updateOrder = (eN, eP, eQ, eC) => {
    const updatedData = {
      eName: eN,
      ePrice: eP,
      eQuantity: eQ,
      eColor: eC,
      eId: this.state.orderId
    }

    axios.put("http://localhost:4000/orders/update", updatedData).then((res) => {
      // console.log("res:", res.data)
      console.log("update done")
      this.getOrders()
      // this.setState({ orders: res.data })
    })
      .catch((err) => {
        console.log(err)
      })
  }
  // componentDidMount() {
  //   console.log('componentDidMount', 3);
  //   this.getAllTasks();
  login = () => {
    this.setState({ login: true })
  }
  logout = () => {
    this.setState({ login: false })
  }


  render() {
    const { orderId, login, logout, getOrders, addOrder, updateOrder, deleteOrder } = this
    console.log("hallo world")
    return (
      <Router>
        <div className="app" >

          <Route path="/" >
            <Home />
            <ul>
              <li><Link to="/order" >OrdersList</Link></li>
              <li><Link to="/customer" > CustomersList </Link></li>
              <li><Link to="/login"> login </Link></li>
              <li><Link to="/about" >about</Link></li>
            </ul>
          </Route>
          <Route exact path="/login" >
            <input type="search" placeholder="type your email" />
            <input type="password" placeholder="type your password" />
            <button onClick={login} >Login</button>
            <button onClick={logout}> logout</button>
            <Link to="/register" >register. . . </Link>
          </Route>
          <Route exact path="/register" render={(props) => <Register {...this.props} />} />
          <Route exact path="/about" render={() => <About {...this.props} />} />

          <Route path="/order" >
            {this.state.login ? (<div> <NewOrder update={updateOrder} add={addOrder} />
              <button onClick={getOrders} >getOrders</button>
              <button onClick={deleteOrder} >deleteOrder</button>
              <button onClick={updateOrder} >updateOrder</button>
              <input onChange={orderId} placeholder="add Id" />

              <OrdersList exact orders={this.state.orders} />

            </div>)
              : (<Link to="/login" > login first to
            see the orders  </Link>)}

          </Route>
          <Route exact path="/customer"  >
            <CustomersList users={this.state.users} />
          </Route>
        </div>
      </Router>
    )
  }
}


 // deleteOrder = () => {
  //   const deletebyId = { 'dId': "1" }
  //   axios.post("http://localhost:4000/ttt",{ dId: 1 }).then((res) => {
  //     console.log("res:", res.data)
  //     // this.getOrders()
  //     // this.setState({ orders: res.data })
  //   })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
