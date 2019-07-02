// Constructor

class Course {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    toString() {
        console.log(this.title + '... Author of the course...' + this.author);
    }
}

const course_1 = new Course('Book_1', 'James');
course_1.toString();