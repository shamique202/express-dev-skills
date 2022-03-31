// The ids can be generated using:
// Date.now() % 1000000
const skills = [
    { id: 125223, skill: 'Application Development', learned: true },
    { id: 127904, skill: 'Web Design', learned: true },
    { id: 139608, skill: 'Database Design', learned: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}
function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

