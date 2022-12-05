const express = require('express')
const router = express.Router()
const itemsModels = require('../models/itemsModels')
const {Items} = require('../models')
const db = require('../config/config.json')


// get data
router.get('/', async (req, res)=>{
  Items.findAll().then(items =>{res.status(200).json(items)})
})

// register
router.post('/', (req, res)=>{
  Items.create({
    name : req.body.name,
    varian : req.body.varian,
    harga : req.body.harga
  })
  .then(items =>{
    res.status(200).json(items)
  }) .catch(err => {
    res.status(400).json(err)
  })
})

//edit
router.put('/:id', async (req, res)=>{
  Items.update({
    name : req.body.name,
    varian : req.body.varian,
    harga : req.body.harga
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
    Items.destroy({
      where : {id : req.body.id}
    }) 
    .then(()=>{
      res.status(200).json("updated")
    }) .catch(err =>{
      res.status(400).json("failed")
  })
  })






module.exports = router