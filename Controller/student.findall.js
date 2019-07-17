const student = require("../models/student.js");

exports.findAll = (req, res) => {
    student.find()
      .then(student => {
        res.send(student);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "some error occurres while retrieving students"
        });
      });
  };
