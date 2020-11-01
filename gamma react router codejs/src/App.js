
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
      login: true,
      dEmail: "",
      // edited: {
      //   eUserName:"",
      //   eId: "",
      //   password: "",
      //   ePermission: "",
      //   eBirthDay: "",
      // }
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
  getUsers = () => {
    axios.get("http://localhost:4000/users").then((res) => {
      // console.log("res", res);
      this.setState({ users: res.data })
    }).catch((err) => {
      console.log("err", err);
    })
  }
  email = (e) => {
    // console.log("e:",e.target.value)
    this.setState({ dEmail: e.target.value })
  }
  deleteUsers = () => {
    const deletedUser = this.state.dEmail
    axios.post("http://localhost:4000/users/delete-all", { email: deletedUser }).then((res) => {
      console.log("res", res.data);
      this.setState({ users: res.data })
    }).catch((err) => {
      console.log("err", err);
    })
  }
  deleteUser = () => {
    const deletedUser = this.state.dEmail
    axios.post("http://localhost:4000/users/delete", { email: deletedUser }).then((res) => {
      console.log("res", res.data);
      this.setState({ users: res.data })
    }).catch((err) => {
      console.log("err", err);
    })
  }
  eUserName = (e) => {
    // console.log("e:",e.target.value)
    // console.log("this.edited.eUserName:",this.state.edited.eUserName)
    
    this.setState({ eUserName: e.target.value })
  }
  eId = (e) => {
    // console.log("e:",e.target.value)
    this.setState({eId: e.target.value })
  }
  ePassword = (e) => {
    // console.log("e:",e.target.value)
    this.setState({ePassword: e.target.value })
  }
  ePermission = (e) => {
    // console.log("e:",e.target.value)
    this.setState({ePermission: e.target.value })
  }
  eBirthDay = (e) => {
    // console.log("e:",e.target.value)
    this.setState({ eBirthDay: e.target.value })
  }
  updateUser = () => {
    const updatedUser = {
      eEmail: this.state.dEmail,
      eUserName: this.state.eUserName,
      eId: this.state.eId,
      ePassword: this.state.ePassword,
      ePermission: this.state.ePermission,
      eBirthDay: this.state.eBirthDay,
    }
    console.log(updatedUser)
    axios.put("http://localhost:4000/users/update-user", updatedUser).then((res) => {
      console.log("res updated", res.data);
      this.setState({ users: res.data })
      this.getUsers()
    }).catch((err) => {
      console.log("err", err);
    })
  }

  render() {
    const {updateUser, eUserName, eId,ePassword, ePermission,
    eBirthDay, deleteUser, email, deleteUsers, getUsers, orderId,
      login, logout, getOrders, addOrder, updateOrder, deleteOrder
  } = this
  // console.log("hallo world")
  return(
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
      <button onClick={getUsers} >get all Users</button>
      <button onClick={deleteUsers} >delete all Users by email </button>
      <button onClick={deleteUser} >delete one User by email </button>
      <button onClick={updateUser} >update one User by email </button>
      <input onChange={email} placeholder="delete email" />
      <input onChange={eUserName} placeholder="edit UserName" />
      <input onChange={eId} placeholder="edit Id" />
      <input onChange={ePassword} placeholder="edit Password" />
      <input onChange={ePermission} placeholder="edit Permission" />
      <input onChange={eBirthDay} placeholder="edit BirthDay" />

      <CustomersList users={this.state.users} />
    </Route>
  </div>
      </Router >
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
