module.exports = (app) => {
    const createDept = require('../Controller/department.create.js')
    const deleteDept = require ('../Controller/department.delete.js')
    const findAllDept = require ('../Controller/department.findall.js')
    const findOneDept = require ('../controller/department.findone.js')
    const updateDept = require ('../controller/department.update.js')
  
    app.post("/department", createDept.create);
  
    app.get("/department", findAllDept.findAll);
    app.get("/department/:departmentId", findOneDept.findOne);
    app.put("/department/:departmentId", updateDept.update);
    app.delete("/department/:departmentId", deleteDept.delete);
  };
  