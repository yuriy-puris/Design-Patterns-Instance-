class Course {
    constructor(data) {
        this.name = data.name;
        this.project = data.project;
        this.complete = data.complete || false;
    }
}

const CourseService = (() => {
    return {
        completed: (course) => {
            course.complete = true;
        },
        save: (course) => {
            console.log(course.name)
        }
    }
})();

const CourseServiceFacade = (() => {

    const complete = (myCourse) => {
        CourseService.completed(myCourse);
        if (myCourse.complete) CourseService.save(myCourse);
    }

    return {
        Completed: complete
    }
})();

module.exports = { Course, CourseService, CourseServiceFacade };