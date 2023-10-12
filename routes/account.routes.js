const express = require('express')
const router = express.Router()
const {createAccount, getAllaccounts, getDetailAccount} = require('../handler/v1/account')
router.post('/', createAccount)
router.get('/', getAllaccounts)
router.get('/:accountID', getDetailAccount)

module.exports = router