const staff = require("../models/staff.js");


exports.delete = (req, res) => {
    // Delete a student with the specified studentId in the request
    staff.findByIdAndRemove(req.params.staffId)
    .then(staff => {
        if(!staff) {
            return res.status(404).send({
                message: "staff not found with id " + req.params.staffId
            });
        }
        res.send({message: "staff deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "student not found with id " + req.params.staffId
            });                
        }
        return res.status(500).send({
            message: "Could not delete student with id " + req.params.staffId
        });
    });
};