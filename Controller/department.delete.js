const department = require("../models/department.js");


exports.delete = (req, res) => {
    // Delete a student with the specified studentId in the request
    department.findByIdAndRemove(req.params.departmentId)
    .then(department => {
        if(!department) {
            return res.status(404).send({
                message: "department not found with id " + req.params.departmentId
            });
        }
        res.send({message: "department deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "department not found with id " + req.params.departmentId
            });                
        }
        return res.status(500).send({
            message: "Could not delete department with id " + req.params.departmentId
        });
    });
};