const { application } = require('express')
const express = require('express')
const router = express.Router()
const userModels = require('../models/usersModels')
const {Users} = require('../models')
const db = require('../config/config.json')
const bcrypt = require('bcrypt')
const passwordCheck = require('../utils/passwordCheck')

// get data
router.get('/', async (req, res)=>{
  const users = await Users.findAll()   //.then(user=>console.log(user))
  res.status(200).json({
    data: users,
    metadata: "get all"
})
})

// register
router.post('/register',async(req, res)=>{
  const {username, email, password} = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10 )
  const users = await Users.create({
    username, email, password: encryptedPassword
  })
  res.status(200).json({
    registered : users,
    metadata : "created"
  })
})

//edit
router.put('/edit', async (req, res)=>{
  const{username, email, password, passwordBaru} = req.body

  // const compare = await passwordCheck(email, password)
  const userData = await Users.findOne({where : {email:email}})
  const compare = await bcrypt.compare(password, userData.password)

  const encryptedPassword = await bcrypt.hash(passwordBaru, 10 )
 
  if(compare === true){
    const users = await Users.update({
      username, password: encryptedPassword
    }, {where : {email : email }})

    res.json({
     updated : users,
     metadata : "user updated!"
    })
  }else{
    res.json({
      error : "invalid"
    })
  }
})

//login
router.post('/login', async(req, res)=>{
  const {email, password} = req.body

  const check = await passwordCheck(email, password)
  // const users = await Users.findOne({where: {email:email}})
  // const compare = await bcrypt.compare(password, users.password)
  if(check.compare === true){
    res.status(200).json({
      users : check.userData,
      metadata : "login sukses"
    })
  }else{
    res.status(400).json({
      error : "data invalid"
    })
  }
})

//delete
router.delete('/delete', async (req, res)=>{
  Users.destroy({
    where : {email : req.body.email}
  })
  .then(()=>{
    res.status(200).json("deleted")
  }) .catch(err =>{
    res.status(400).json("failed")
  })
})





module.exports = router