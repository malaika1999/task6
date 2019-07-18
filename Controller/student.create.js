const Student = require("../models/student.js");

exports.create = (req, res) => {
   
        console.log(req.body);
          if (!req.body.name) {
            return res.status(400).send({
              message: "student content cannot be empty"
            });
          }
        const student = new Student({
          name: req.body.name, 
          rollNo: req.body.rollNo,
          dateOfBirth: req.body.dataOfBirth
        });
        student
          .save()
          .then(data => {
            res.send(data);
          })
            .catch(err => {
              res.status(500).send({
              message: err.message || "some error occurred while creation of student."
              });
            });
        
  };
  