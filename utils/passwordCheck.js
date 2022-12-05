const bcrypt = require('bcrypt')
const UserModel = require('../models/usersModels')
const{Users} = require('../models')


const passwordCheck = async (email, password) => {
  const userData = await Users.findOne({where : {email:email}})
  const compare = await bcrypt.compare(password, userData.password)
  return {compare, userData}
}

module.exports = passwordCheck