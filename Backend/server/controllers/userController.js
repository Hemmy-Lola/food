const Users = require("../models/userModel")

// login user

const loginUsers = async (req, res) => {
    res.json({message: 'login user'})
}


// signup user

const signupUsers = async (req, res) => {
    res.json({message: 'signup user'})
}

module.exports = { signupUsers , loginUsers}