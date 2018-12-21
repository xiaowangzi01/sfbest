const mongoose = require("../db/conn");

const UserModel = mongoose.model("user",({name:String,password:String,ip:String,time:String}))

var findUser = (userInfor,callback)=>{
	UserModel.find(userInfor).then((data)=>{
        callback(data);
    })
}

var register = (userInfo,callback)=>{
    new UserModel(userInfo).save().then(()=>{
        callback();
    })
}
module.exports={
	findUser,
	register
}