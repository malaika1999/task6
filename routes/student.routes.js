module.exports = (app) => {
    const createStudent = require('../Controller/student.create.js')
    const deleteStudent = require ('../Controller/student.delete.js')
    const findAllStudent = require ('../Controller/student.findall.js')
    const findOneStudent = require ('../controller/student.findone.js')
    const updateStudent = require ('../controller/student.update.js')
  
    app.post("/student", createStudent.create);
  
    app.get("/student", findAllStudent.findAll);
    app.get("/student/:studentId", findOneStudent.findOne);
    app.put("/student/:studentId", updateStudent.update);
    app.delete("/student/:studentId", deleteStudent.delete);
  };
  