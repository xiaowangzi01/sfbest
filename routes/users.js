var express = require('express');
var router = express.Router();
var UserController = require("../controller/userController");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/finduser",UserController.findUser);
router.post("/register",UserController.register);
module.exports = router;
