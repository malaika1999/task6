const staff = require("../models/staff.js");

exports.update = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "staff content can not be empty"
        });
    }

    // Find note and update it with the request body
    staff.findByIdAndUpdate(req.params.staffId, {
        name: req.body.name,
        designation: req.body.designation,
        age: req.body.age
    }, {new: true})
    .then(satff => {
        if(!staff) {
            return res.status(404).send({
                message: "Staff not found with id " + req.params.staffId
            });
        }
        res.send(staff);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Staff not found with id " + req.params.staffId
            });                
        }
        return res.status(500).send({
            message: "Error updating staff with id " + req.params.staffId
        });
    });
};