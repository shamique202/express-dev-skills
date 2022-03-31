//perform db logic
const Skill = require('../models/skill'); // always capitalized 

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit
}

function edit(req, res) {
    res.render('skills/edit',
        {
            skill: Skill.getOne(req.params.id)
        })
}

function deleteSkill(req, res) {
    console.log(req.params.id);
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}

function create(req, res) {
    console.log(req.body, ' <- req.body, contents of the form')
    Skill.create(req.body)
    res.redirect('/skill'); //endpoint URL
}
function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req, res) {
    console.log(req.params, " < - req.params in show function")
    res.render('skills/show', {
        skillNum: req.params.id,
        skill: Skill.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}




