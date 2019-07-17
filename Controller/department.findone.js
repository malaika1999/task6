const department = require("../models/department.js");

exports.findOne = (req, res) => {
    department.findById(req.params.departmentId)
      .then(department => {
        if (!department) {
          return res.status(404).send({
            message: "department not found with id" + req.params.departmentId
          });
        }
        res.send(department);
      })
      .catch(err => {
        if (err.kind == "ObjectId") {
          return res.status(404).send({
            message: "department not found with id " + req.params.departmentId
          });
        }
        return res.status(500).send({ message: "error"});
      });
  };