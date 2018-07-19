var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var mediSchema = new mongoose.Schema({
    mediName: String,
    mediUse: String
});
var User = mongoose.model("User", mediSchema, "users");
module.exports=User;
