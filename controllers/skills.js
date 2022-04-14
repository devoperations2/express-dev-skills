
const Skill = require('../models/skill');
const {render} = require('../server'),

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function newSkill(req, res) {
    res.render('skills/new');
  }
function create(req, res) {
    // console.log(req.body);
    skill.create(req.body);
    res.redirect('/skills'); 
  }
function deleteSkill(req, res) {
    Todo.deleteOne(req.params.crazyamazing);
    // When data has been changed, we redirect (POST, PUT, DELETE requests)
    res.redirect('/skills');  // Provide the PATH, not a template when redirecting
  }
function edit(req, res) {
    const todo = Skill.getOne(req.params.id);
    res.render('skills/edit', { skill });
  }
  
function update(req, res) {
    req.body.done = !!req.body.done;
    Todo.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
  }
function show (req, res) {
    const param = parseInt(req.params.id);
    const skill = Skill.getById(param);
    res.render('skills/show', {skill});
}
function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
}
