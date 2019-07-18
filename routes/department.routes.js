module.exports = (app) => {
    const createDept = require('../Controller/department.create.js')
    const deleteDept = require ('../Controller/department.delete.js')
    const findAllDept = require ('../Controller/department.findall.js')
    const findOneDept = require ('../controller/department.findone.js')
    const updateDept = require ('../controller/department.update.js')
  
    app.post("/department", isLoggedIn, createDept.create);
  
    app.get("/department", isLoggedIn, findAllDept.findAll);
    app.get("/department/:departmentId", isLoggedIn, findOneDept.findOne);
    app.put("/department/:departmentId", isLoggedIn, updateDept.update);
    app.delete("/department/:departmentId", isLoggedIn, deleteDept.delete);
  };
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}
  