var mongoose = require('mongoose');  
var staffSchema = new mongoose.Schema({  
  name: String,
  designation: String,
  age: Number
});
mongoose.model('staff', staffSchema);

module.exports = mongoose.model('staff');