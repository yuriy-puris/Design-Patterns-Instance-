const CourseDB = require('./CourseDB');

class Course {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
    }

    dbRequest () {    
        CourseDB.dbInfo(this);
    }
}

module.exports = Course;