const exprees = require('express');
const user = require('../models/user');
const router = exprees.Router();
const {userSignup,userLogin,getUser}=require('../controller/user');

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.get('/user/:id',getUser)

module.exports = router;
