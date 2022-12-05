const express = require('express')
const router = express.Router()
const ordersModels = require('../models/ordersModels')
const {Orders} = require('../models')
const db = require('../config/config.json')

// get data
router.get('/', async (req, res)=>{
  Orders.findAll().then(orders =>{res.status(200).json(orders)})
})

// register
router.post('/', (req, res)=>{
  Orders.create({
    name : req.body.name,
    varian : req.body.varian,
    jumlah : req.body.jumlah
  })
  .then(orders =>{
    res.status(200).json(orders)
  }) .catch(err => {
    res.status(400).json(err)
  })
})

//edit
router.put('/:id', async (req, res)=>{
  Items.update({
    name : req.body.name,
    varian : req.body.varian,
    jumlah : req.body.jumlah
  },{
    where : {id : req.body.id}
  }) .then(()=>{
    res.status(200).json("updated")
  }) .catch(err =>{
    res.status(400).json("failed")
  })
})

  //delete
  router.delete('/:id', (req, res)=>{
    Orders.destroy({
      where : {id : req.body.id}
    }) 
    .then(()=>{
      res.status(200).json("deleted")
    }) .catch(err =>{
      res.status(400).json("failed")
  })
  })





module.exports = router