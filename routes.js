// const app = require("./app")
const express = require('express');
// app.use(express.json())
const app = express()
const { usersModule, ordersModule } = require("./schema")
const { register, logIn, getUsers, deleteUser, deleteAllUsers,
    updateUser,
    getOrders, addOrder, getOrder, updateOrder, deleteOrder } = require("./controller")

const middleware = require("./middlewares")
const authRouter = express.Router()
authRouter.get('/', (req, res) => {
    res.json("hallo world")
})
authRouter.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        res.json(await register(req.body))
        console.log(2);
    } catch (err) {
        throw err
    }
})
authRouter.get("/protect", logIn, middleware, (req, res) => {
    try {
        res.json("res from jwt")
    } catch (error) {
        throw error
    }
})
authRouter.get('/login', async (req, res) => {
    try {
        console.log(req.body);
        res.json(await logIn(req.body))
        console.log(2);
    } catch (err) {
        throw err
    }
})
authRouter.delete('/users/delete',/* middleware,*/ async (req, res) => {
    // res.json(await getUsers())
    res.json(await deleteUser(req.body))

})
authRouter.delete('/users/delete-all',/* middleware,*/ async (req, res) => {
    // res.json(await getUsers())
    res.json(await deleteAllUsers(req.body))

})
authRouter.get('/users',/* middleware,*/ async (req, res) => {
    // res.json(await getUsers())
    res.json(await usersModule.find({}))

})
authRouter.put('/users/update-user',/* middleware,*/ async (req, res) => {
    // res.json(await getUsers())
    res.json(await updateUser(req.body))

})
authRouter.get('/orders', async (req, res) => {
    // res.json(await getOrders(req.body))
    res.json(await ordersModule.find({}))
})
authRouter.get('/orders/add', async (req, res) => {
    const b = req.body
    res.json(await addOrder(req.body.category, req.body.itemName, req.body.color, b.price, b.id, b.quantity))
})
authRouter.get('/orders/find', async (req, res) => {
    res.json(await getOrder(req.body))

})
authRouter.put('/orders/update', async (req, res) => {
    res.json(await updateOrder(req.body))
})
authRouter.delete('/orders/delete', async (req, res) => {
    res.json(await deleteOrder(req.body))
})

console.log(12222342423);
authRouter.all("*", (req, res, next) => {
    const err = new Error("Error 404 :path not found")
    err.status=404
    next(err)
})

authRouter.use((err, req, res, next) => {
    res.status(err.status)
    res.json({
        error: {
            message: err.message,
            status: err.status
        }
    })
})
module.exports = authRouter

//jwt
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXI0QGdtYWlsLmNvbSIsInBlcm1pc3Npb25zIjpbInIiLCJ3Il0sImlhdCI6MTYwMjg2MDk1OSwiZXhwIjoxNjM4ODYwOTU5fQ.ZMv2iP7K3c8vbb8Q7Lnfeffuj5RR2cN0tdMihV9Xb8c


// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXI0QGdtYWlsLmNvbSIsInBlcm1pc3Npb25zIjpbInIiLCJ3Il0sImlhdCI6MTYwMjg1NzQ5MiwiZXhwIjoxNjM4ODU3NDkyfQ.Lnwq5tB2DAXiNZElNPWZTzQzE5AFye6oZS5dbT0QwRY"