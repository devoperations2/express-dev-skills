const skills = [
    {id: 12345, name: 'snowboarding', done: true},
    {id: 12346, name: 'drums', done: true},
    {id: 12347, name: 'eating', done: true},
    {id: 12348, name: 'sleeping', done: true},
    {id: 12349, name: 'videogames', done: true}
];

module.exports = {
    getAll,
    getById 
    create,
    deleteOne,
    update
};
function getAll () {
    return skills
};

function getById(id) {
    return skills.find(function(skill) {

        return skill.id === id      
    }) 
};
function update(id, todo) {
    id = parseInt(id);
    const updatedTodo = todos.find((todo) => todo.id === id);
    Object.assign(updatedTodo, todo);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    const idx = todos.findIndex((todo) => todo.id === id);
    todos.splice(idx, 1);
  }
  
  function create(todo) {
    todo.id = Date.now() % 1000000;
    todo.done = false;
    todos.push(todo);
  }
  