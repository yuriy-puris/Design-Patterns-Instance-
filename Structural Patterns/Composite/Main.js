const Course = require('./Course');
const CourseGroup = require('./CourseGroup');

const js_course = new Course('JS Course', 20);
const node_course = new Course('Node Course', 50);
const python_course = new Course('Python Course', 60);

const language_courses = new CourseGroup('Language Courses', [js_course, node_course, python_course]);


console.log('$' + language_courses.total());
console.log(language_courses.print());