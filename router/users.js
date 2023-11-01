const express = require('express');
const router = express.Router();
const usercontroller = require("../controllers/user")

router.get('/users', usercontroller.index)

router.post('/user', usercontroller.store)

router.put('/user/:id',usercontroller.udate)

router.delete('/user/:id',usercontroller.delete)

module.exports = router
