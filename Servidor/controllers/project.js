// Load required packages
var Project = require('../models/project');

// Create endpoint /api/project for POSTS
exports.postProject = function(req, res) {
  // Create a new instance of the project model
  
  var project = new Project();

  // Set the project properties that came from the POST data
  project.name = req.body.name;
  project.description = req.body.description;
  project.employees = req.body.employees;
  project.manager = req.body.manager;
  project.date = Date.now();

  // Save the project and check for errors
  project.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Project added', data: project });
  });
};

// Create endpoint /api/project for GET
exports.getProjects = function(req, res) {
  // Use the project model to find all projects
  Project.find((err, projects) => {
    if (err)
      res.send(err);

    res.json({ records: projects });
  });
};

// Create endpoint /api/project/:project_id for GET
exports.getProject = function(req, res) {
  // Use the project model to find a specific project
  Project.findById({ _id: req.params.project_id }, (err, project) => {
    if (err)
      res.send(err);

    res.json({ records: project });
  });
};

// Create endpoint /api/project/:project_id for PUT
exports.putProject = function(req, res) {
  // Use the project model to find a specific project
  Project.findById({ _id: req.params.project_id }, function(err, project) {
    if (err)
      res.send(err);

    // Updating values
    project.name = req.body.name || project.name;
    project.description = req.body.description || project.description;
    project.employees  = req.body.employees || project.employees;
    project.manager 	= req.body.manager || project.manager;

    // Save the project and check for errors
    project.save(function(err) {
      if (err)
        res.send(err);

      res.json({ records: project });
    });
  });
};

// Create endpoint /api/project/:project_id for DELETE
exports.deleteProject = function(req, res) {
  // Use the project model to find a specific project and remove it
  Project.findByIdAndRemove({ _id: req.params.project_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Project removed' });
  });
};