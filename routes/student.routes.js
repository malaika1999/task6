module.exports = (app) => {
    const createStudent = require('../Controller/student.create.js')
    const deleteStudent = require ('../Controller/student.delete.js')
    const findAllStudent = require ('../Controller/student.findall.js')
    const findOneStudent = require ('../controller/student.findone.js')
    const updateStudent = require ('../controller/student.update.js')
  
    app.post("/student", isLoggedIn, createStudent.create);
  
    app.get("/student", isLoggedIn, findAllStudent.findAll);
    app.get("/student/:studentId", isLoggedIn,findOneStudent.findOne);
    app.put("/student/:studentId", isLoggedIn, updateStudent.update);
    app.delete("/student/:studentId", isLoggedIn, deleteStudent.delete);
  };
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}
  