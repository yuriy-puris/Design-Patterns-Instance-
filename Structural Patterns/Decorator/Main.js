const {CourseBuilder, HotNew, BestSeller} = require('./CourseBuilder');

const course = new CourseBuilder('Design Patterns').makePaid(100).makeCampain().build();
const hotNew = new HotNew(course);
const bestSeller = new BestSeller(course);

console.log(course.toString(course));
console.log(course.toString(hotNew));
console.log(course.toString(bestSeller));