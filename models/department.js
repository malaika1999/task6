var mongoose = require('mongoose');  
var departmentSchema = new mongoose.Schema({  
  name: String,
  location: String
});
mongoose.model('department', departmentSchema);

module.exports = mongoose.model('department');