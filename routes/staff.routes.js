module.exports = (app) => {
    const createStaff = require('../Controller/staff.create.js')
    const deleteStaff = require ('../Controller/staff.delete.js')
    const findAllStaff = require ('../Controller/staff.findall.js')
    const findOneStaff = require ('../controller/staff.findone.js')
    const updateStaff = require ('../controller/staff.update.js')
  
    app.post("/staff", createStaff.create);
  
    app.get("/staff", findAllStaff.findAll);
    app.get("/staff/:staffId", findOneStaff.findOne);
    app.put("/staff/:staffId", updateStaff.update);
    app.delete("/staff/:staffId", deleteStaff.delete);
  };
  