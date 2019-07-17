const dept = require("../models/department.js");

exports.findAll = (req, res) => {
    dept.find()
      .then(dept => {
        res.send(dept);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "some error occurres while retrieving depts"
        });
      });
  };
