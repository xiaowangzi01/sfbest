const UserModel = require("../model/userModel");
var findUser = (req,res)=>{
	console.log('111')
	UserModel.findUser({name:req.body.name},(data)=>{
		if(data.length>0){
			res.json({
				ret:true,
				data:true
			})
		}else{
			res.json({
				ret:true,
				data:false
			})
		}
	})
}


var register = (req,res)=>{
	UserModel.register({name:req.body.name,password:req.body.password,ip:req.ip,time:new Date()},()=>{
        res.json({
            ret:true,
            data:true
        })
    })
}

module.exports = {
	register,
	findUser
}