const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const db = require("./db")
const router = require('./routes')

app.use(express.json())
app.use(cors())
app.use(router)

console.log(232342342);

const port = 4000
// ||process.env.PORT
app.listen(port, () => {
  console.log(`AUTH ON at http://localhost:${port}`);
});



