const Department = require("../models/department.js");

exports.create = (req, res) => {
    if (!req.body.name) {
      return res.status(400).send({
        message: "dept content cannot be empty"
      });
    }
    const department = new Department({
      name: req.body.name, 
      location: req.body.location
    });
    department
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "some error occurred while creation of dept."
        });
      });
  };