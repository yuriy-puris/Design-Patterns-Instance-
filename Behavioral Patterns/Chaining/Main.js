const courses = require('./Courses');
const Finder = require('./Finder');

const udemyFinder = new Finder('Finder Udemy', courses);

let searchQuery = 'JavaScript';
let result = udemyFinder.findCourse(searchQuery);

console.log(result);