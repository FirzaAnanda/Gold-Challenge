const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const userEndpoint = require('./routes/usersRoutes')
app.use('/usersRoutes', userEndpoint)

const itemEndpoint = require('./routes/itemsRoutes')
app.use('/itemsRoutes', itemEndpoint)

const orderEndpoint = require('./routes/ordersRoutes')
app.use('/ordersRoutes', orderEndpoint)

app.listen(3600, ()=>{
  console.log('running on 3600');
})