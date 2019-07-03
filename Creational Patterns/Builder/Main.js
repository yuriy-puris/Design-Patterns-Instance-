// use chaining and have accsess for new instance when doing build

const CourseBuilder = require('./CourseBuilder');

const course_1 = new CourseBuilder('Design pattern 1').makePaid(100).makeCampain().build();
const course_2 = new CourseBuilder('Design pattern 2').build();

course_1.toString();
course_2.toString();