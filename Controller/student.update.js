const student = require("../models/student.js");

exports.update = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Student content can not be empty"
        });
    }

    // Find note and update it with the request body
    student.findByIdAndUpdate(req.params.studentId, {
        name: req.body.name,
        rollNo: req.body.rollNo,
        dateOfBirth: req.body.dateOfBirth
    }, {new: true})
    .then(student => {
        if(!student) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.studentId
            });
        }
        res.send(student);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.studentId
            });                
        }
        return res.status(500).send({
            message: "Error updating student with id " + req.params.studentId
        });
    });
};