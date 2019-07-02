const Course = require('./Course');

const course = new Course({id: '001', title: 'Book_1', author: 'James'});
course.dbRequest();