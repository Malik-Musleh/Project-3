const mongoose= require("mongoose")
const bcrypt = require('bcrypt')
const users = new mongoose.Schema({
    userName:{type:String,require:true},
    userId:{type:Number,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    permissions:{type:String,require:true},
    birthday:{type:Number,require:true},

    
})
const orders = new mongoose.Schema({
    itemName:{type:String,require:true},
    price:{type:Number,require:true},
    numOfItems:{type:Number,require:true},
    color:{type:String,require:true},
    orderId:{type:Number,require:true}
})
// users.pre("save",async function(){
//     this.password=await bcrypt.hash.this.password
//     console.log(this);
// })
const ordersModule = mongoose.model("orders",orders)

const usersModule = mongoose.model("users",users)
module.exports ={usersModule,ordersModule}
