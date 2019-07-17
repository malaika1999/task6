const staff = require("../models/staff.js");

exports.findAll = (req, res) => {
    staff.find()
      .then(staff => {
        res.send(staff);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "some error occurres while retrieving staffs"
        });
      });
  };
