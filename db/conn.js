const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sfbest',(err)=>{
    if(err){
        console.log("链接失败")
    }else{
        console.log("链接成功")
    }
});
module.exports=mongoose;