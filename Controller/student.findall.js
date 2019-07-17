const student = require("../models/student.js");

exports.findAll = (req, res) => {
  //var token= getToken(req.headers);
  //if(token){
    student.find()
    .then(student => {
      res.send(student);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occurres while retrieving students"
      });
    });
  //} else {
    //return res.status(403).send({success: false, msg: 'Unauthorized.'});
  //}
  /*getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }*/
  };
//};

