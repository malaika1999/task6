module.exports = (app) => {
    const createStaff = require('../Controller/staff.create.js')
    const deleteStaff = require ('../Controller/staff.delete.js')
    const findAllStaff = require ('../Controller/staff.findall.js')
    const findOneStaff = require ('../controller/staff.findone.js')
    const updateStaff = require ('../controller/staff.update.js')
  
    app.post("/staff", isLoggedIn, createStaff.create);
  
    app.get("/staff", isLoggedIn, findAllStaff.findAll);
    app.get("/staff/:staffId", isLoggedIn, findOneStaff.findOne);
    app.put("/staff/:staffId", isLoggedIn, updateStaff.update);
    app.delete("/staff/:staffId", isLoggedIn, deleteStaff.delete);
  };
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}
  