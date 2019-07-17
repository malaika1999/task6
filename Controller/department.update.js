const department = require("../models/department.js");

exports.update = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "department content can not be empty"
        });
    }

    // Find note and update it with the request body
    department.findByIdAndUpdate(req.params.departmentId, {
        name: req.body.name,
        loaction: req.body.loaction
        }, {new: true})
    .then(department => {
        if(!department) {
            return res.status(404).send({
                message: "department not found with id " + req.params.departmentId
            });
        }
        res.send(department);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "department not found with id " + req.params.departmentId
            });                
        }
        return res.status(500).send({
            message: "Error updating department with id " + req.params.departmentId
        });
    });
};