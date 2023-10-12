const express = require('express')
const router = express.Router()
const {createUser, getAllusers, getDetailUser} = require('../handler/v1/user')
router.post('/', createUser)
router.get('/', getAllusers)
router.get('/:userID', getDetailUser)

module.exports = router