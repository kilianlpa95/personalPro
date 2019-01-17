// Load required packages
var Emp = require('../models/emp');

// Create endpoint /api/emp for POSTS
exports.postEmp = function(req, res) {
  // Create a new instance of the emp model
  var emp = new UseEmpr();

  // Set the emp properties that came from the POST data
  emp.name = req.body.name;
  emp.description = req.body.description;
  emp.thumbnail = req.body.thumbnail;
  emp.displayed = req.body.displayed;
  emp.date = Date.now();

  // Save the emp and check for errors
  emp.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Emp added', data: emp });
  });
};

// Create endpoint /api/emp for GET
exports.getEmps = function(req, res) {
  // Use the emp model to find all emp
  Emp.find({ displayed: true }, (err, emps) => {
    if (err)
      res.send(err);

    res.json({ records: emps });
  });
};

// Create endpoint /api/emp/:emp_id for GET
exports.getEmp = function(req, res) {
  // Use the emp model to find a specific emp
  Emp.findById({ _id: req.params.emp_id }, { displayed: true }, (err, emp) => {
    if (err)
      res.send(err);

    res.json({ records: emp });
  });
};

// Create endpoint /api/emp/:emp_id for PUT
exports.putEmp = function(req, res) {
  // Use the emp model to find a specific emp
  Emp.findById({ _id: req.params.emp_id }, function(err, emp) {
    if (err)
      res.send(err);

    // Updating values
        recs.name = req.body.name || recs.name;
        recs.description = req.body.description || recs.description;
        recs.thumbnail  = req.body.thumbnail || recs.thumbnail;
        recs.displayed 	= req.body.displayed || recs.displayed;

    // Save the emp and check for errors
    emp.save(function(err) {
      if (err)
        res.send(err);

      res.json({ records: emp });
    });
  });
};

// Create endpoint /api/emp/:emp_id for DELETE
exports.deleteEmp = function(req, res) {
  // Use the emp model to find a specific emp and remove it
  Emp.findByIdAndRemove({ _id: req.params.emp_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Emp removed' });
  });
};