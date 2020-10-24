const {usersModule,ordersModule} = require("./schema")
const { orders, users, roles } = require('./models');
const db = require("./db")

const bcrypt = require('bcrypt') // for hashing
const dotenv = require('dotenv')// for hide  in .env file
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const nUsers= new usersModule({
    userName:"user.userName",
    userId:2,
    email:"user.email",
    password:"addUser.password",
    permissions:"{r,w,u,d}",
    birthday:2,
  }).save((err,result)=>
  {if(err){console.log(err);}
else 
console.log("result:",result);
})
  
  // console.log("users:",nUsers);




  const register = async (user) => {
  // console.log(user);
  if (!user.email.includes("@")||!user.email.includes(".com")) {
    return  "Please enter your email currect"
  }
  // const newUser = users.filter((u) => {
  //   return u.email === user.email
  // })
  const newUser =await usersModule.find({email:user.email},(err)=>{
console.log(err);
  })
  console.log("newUser:",newUser);
  if (newUser.length === 0) {
    const addUser = user
    addUser.ID = 2;
    addUser.password = await bcrypt.hash(user.password, Number(process.env.SALT))
    // if (user.birthDay==="") {
    //   return "Please enter your birthday"
    // }
    // if (user.userName.length<4||user.userName.includes("#")) {
    //   return "Please enter your user name currect"

    // }
    new usersModule({
      userName:user.userName,
      userId:user.id,
      email:user.email,
      password:addUser.password,
      permissions:"r ,w ,u ,d",
      birthday:user.birthDay,
    }).save((err)=>{console.log(err); })
    console.log("newUser:",newUser)
    // users.push(addUser)
    // console.log("added", users)
    return `welcome to our website MR.${user.userName.toUpperCase()}`
  } else {
    return "user is here in data base"

    // console.log('salt ', Number(process.env.SALT));
  }
}
// console.log(users);

const logIn = async (user) => {
  const newUser = await usersModule.find({email:user.email},(err)=>{
    console.log(err);
      })
  // users.filter((u) => {
  //   return u.email === user.email
  // }) 
  console.log(newUser);
  const addedUser = user

  // addedUser.password = await bcrypt.hash(addedUser.password, Number(process.env.SALT))
  // console.log("hashed",addedUser.password );
  if (newUser.length === 0) {
    return "password or email is incorrect"
  } else {

    console.log("passsssssssssed", await bcrypt.compare(user.password, newUser[0].password))
    if (await bcrypt.compare(user.password, newUser[0].password)) {
      const permission = await usersModule.find({userId:user.Id},(err)=>{
        console.log(err);
          })
      // roles.filter((p) => {
      //   return p.id === newUser[0].role_id
      // })
      // console.log(newUser[0].email)
      const payload = {
        email: newUser[0].email,
        permissions: newUser[0].permissions
      }
      const options = {
        expiresIn: process.env.TOKEN_EXPIRATION
      }
      
      // console.log(jwt.sign(payload, process.env.SECRET, options));
      
      
      
      return jwt.sign(payload, process.env.SECRET, options)
    
    } else {
      return "password is incorrect"
    }
  }
}


// console.log( jwt.sign(payload, process.env.SECRET, options));

const getUsers = async (user) => {
  console.log(1);
return await nUsers.find({})
}
const deleteUser = async (user) => {
  console.log(1);
return await  usersModule.deleteOne({email:user.email},(err)=>{
  console.log(err);
}
)
}
const deleteAllUsers = async (user) => {
  console.log(1);
return await  usersModule.deleteMany({email:user.email},(err)=>{
  console.log(err);
}
)
}
const updateUser = async (user) => {
  console.log(1);
  const newPass=await bcrypt.hash(user.ePassword,Number(process.env.SALT))
  console.log("newPass:", newPass);
return await  usersModule.updateOne({email:user.eEmail},{
  userName:user.eUserName,
  userId:user.eId,
  email:user.eEmail,
  password:newPass,
  permissions:user.ePermission,
  birthday:user.eBirthDay,
}
  ,(err)=>{
  console.log(err);
}
)
}
const getUser = async (user) => {
  console.log(1);
  return users

}
var m = 6
const addOrder = async (oCategory, oName, oColor,oPrice,oId,quantity) => {
  const newOrder ={}
  // newOrder.Name = oName
  // newOrder.Color = oColor
  newOrder.Id= m++
  newOrder.Id=newOrder.Id.toString()
  // newOrder.Price=oPrice
const allOrders=await new ordersModule({
  itemName:oName,
    price:oPrice,
    numOfItems:quantity,
    color:oColor,
    orderId:newOrder.Id
}).save((err,result)=>{if(err){console.log(err);}
else{console.log(result)}
})
console.log("allOrders:", allOrders);
  // orders.push(newOrder)
  // return orders
return await ordersModule.find({})
}
const getOrders = async (order) => {
  console.log(1);
  return orders

}
const getOrder = async (order) => {
  const myOrder = await ordersModule.findOne({orderId:order.fId},(err,result)=>{
    if(err){console.log(err)}
    else{console.log(result);}
  })
  return myOrder
  
  // const ord =order
  // const myOrder =  orders.filter((o)=>{
  //   return  o.id===order.id
  // })
  // if (myOrder.length===0) {
  //   return"wrong id given"
  // }
  // console.log("my",myOrder);
  // return myOrder

}
const updateOrder=async(order)=>{
const updated =await ordersModule.update({orderId:order.eId}, 
  {itemName:order.eName,
  price:order.ePrice,
  numOfItems:order.eQuantity,
  color:order.eColor,
  // orderId:Order.eId
})
  return updated
  // let myOrder =  orders.filter((o)=>{
  //   return  o.id===order.id
  // })
  // if (myOrder.length===0) {
  //   return"wrong id given"
  // }
  // console.log("my1",myOrder);
  // myOrder[0].name=order.eName
  // myOrder[0].color=order.eColor
  // myOrder[0].price=order.ePrice

  // console.log("my2",myOrder);
  // return 
  
}
const deleteOrder=async(order)=>{
  const deleted = await ordersModule.deleteOne({orderId:order.dId},(err,result)=>{
    if(err){console.log(err)}
    else{console.log(result);}
  })
  return deleted
  //  for (let index = 0; index < orders.length; index++) {
  //   if (orders[index].id===order.id) {
  //     orders.splice(index,1)
  //     index--
      // return orders
    // }
// } 
    
  
  return orders
}

module.exports = {
  register,
  logIn,
  getUsers,
  deleteUser,
  deleteAllUsers,
  updateUser,
  getOrders,
  addOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  

}