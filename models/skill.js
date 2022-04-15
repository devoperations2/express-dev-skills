const skills = [
    {id: 12345, name: 'snowboarding', done: true},
    {id: 12346, name: 'drums', done: true},
    {id: 12347, name: 'eating', done: true},
    {id: 12348, name: 'sleeping', done: true},
    {id: 12349, name: 'videogames', done: true}
];

module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne,
    update
};
function getAll () {
    return skills
};

function getOne(id) {
    return skills.find(function(skill) {

        return skill.id === id      
    }) 
};
function update(id, skill) {
    id = parseInt(id);
    const updatedSkill = skills.find((skill) => skill.id === id);
    Object.assign(updatedSkill, skill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    console.log(skill)
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  