const student = require("../models/student.js");

exports.findOne = (req, res) => {
    student.findById(req.params.studentId)
      .then(student => {
        if (!student) {
          return res.status(404).send({
            message: "student not found with id" + req.params.studentId
          });
        }
        res.send(student);
      })
      .catch(err => {
        if (err.kind == "ObjectId") {
          return res.status(404).send({
            message: "student not found with id " + req.params.studentId
          });
        }
        return res.status(500).send({ message: "error"});
      });
  };