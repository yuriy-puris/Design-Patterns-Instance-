class Category {
    
    constructor(name, courses = []) {
        this.name = name;
        this.courses = courses;
        this.next = null;
    }         

    setNext(categoryName) {
        this.next = categoryName;
    }

    search(categoryName) {
        const index = this.courses.map(item => item.name).indexOf(categoryName);
        const result = this.courses[index];
        if(result) {
            return {
                name: result.name,
                price: result.price,
                location: this.name
            }
        } else if (this.next) {
            return this.next.search(categoryName);
        } else {
            return `We don't have ${categoryName} course`;
        }
    }

}

module.exports = Category;