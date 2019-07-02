// Constructor with prototype

class Course {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

Course.prototype.toString = function () {
    console.log(this.title + '... Author ...' + this.author)
}

const course_1 = new Course('Book_1', 'Adam');
course_1.toString();