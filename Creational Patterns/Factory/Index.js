const UserFactory = require('./UserFactory');

const paul = UserFactory('instructor', 'Paul', 'software engineer', 1000);
const john = UserFactory('student', 'John', 'beginner');


console.log(paul.toString());
console.log(john.toString());