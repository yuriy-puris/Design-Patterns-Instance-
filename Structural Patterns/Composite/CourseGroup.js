class CourseGroup {
    constructor(title, composite = []) {
        this.title = title;
        this.composite = composite;
    }

    total() {
        return this.composite.reduce((result, nextElem) => result + nextElem.total(), 0);
    }

    print() {
        this.composite.forEach(elem => elem.print());
    }

}

module.exports = CourseGroup;