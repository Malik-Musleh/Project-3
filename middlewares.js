const jwt = require('jsonwebtoken');
const express = require('express');
const { logIn } = require('./controller');
const app = express();
module.exports = async (req, res, next) => {
    //    console.log("locat1",logIn());
    // req.headers.authorization.split(` `).Push(logIn())
    if (!req.headers.authorization) {
        res.json("please enter the jwt")
    }
    console.log("head", req.headers.authorization);
    console.log("sssssssssssssssssssssssssssssssssssssss", req.headers.authorization.split(` `)[1]);


    const token = req.headers.authorization.split(` `)[1]
    jwt.verify(token, process.env.SECRET, (err, result) => {
        if (err) res.json(err)
        console.log("result");
        // res.json("no login")
        next()
    })
    next()
}