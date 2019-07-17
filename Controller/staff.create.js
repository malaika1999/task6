const Staff = require("../models/staff.js");

exports.create = (req, res) => {
    if (!req.body.name) {
      return res.status(400).send({
        message: "staff content cannot be empty"
      });
    }
    const staff = new Staff({
      name: req.body.name, 
      designation: req.body.designation,
      age: req.body.age
    });
    staff
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "some error occurred while creation of staff."
        });
      });
  };