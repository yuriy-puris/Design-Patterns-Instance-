const Instructor = require('./Instructor');
const Student = require('./Student');

const userFactory = (type, name, position, earnings = 0, level = 'beginner') => {
    if (type === 'instructor') {
        return new Instructor(name, position, earnings);
    }
    if (type === 'student') {
        return new Student(name, level);
    }
}

module.exports = userFactory;