var mongoose = require('mongoose');  
var studentSchema = new mongoose.Schema({  
  name: String,
  rollNo: String,
  dateOfBirth: String
});
mongoose.model('student', studentSchema);

module.exports = mongoose.model('student');