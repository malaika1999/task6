const staff = require("../models/staff.js");

exports.findOne = (req, res) => {
    staff.findById(req.params.staffId)
      .then(staff => {
        if (!staff) {
          return res.status(404).send({
            message: "staff not found with id" + req.params.staffId
          });
        }
        res.send(staff);
      })
      .catch(err => {
        if (err.kind == "ObjectId") {
          return res.status(404).send({
            message: "staff not found with id " + req.params.staffId
          });
        }
        return res.status(500).send({ message: "error"});
      });
  };