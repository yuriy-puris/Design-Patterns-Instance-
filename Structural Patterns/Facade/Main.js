const { Course, CourseServiceFacade } = require('./Course');

const myCourse = new Course({
    name: 'JS Course',
    project: 'Currency changes'
});

console.log(myCourse);

CourseServiceFacade.Completed(myCourse);

console.log(myCourse);