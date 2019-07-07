const Category = require('./Category');

class Finder {

    constructor(name, courses = []) {
        this.name = name;
        this.courses = courses;
        
        const designCategory = new Category('design', courses.design);
        const languageCategory = new Category('language', courses.language);
        const musicCategory = new Category('music', courses.music);

        designCategory.setNext(languageCategory);
        languageCategory.setNext(musicCategory);

        this.category = designCategory;
    }

    findCourse(courseName) {
        return this.category.search(courseName);
    }

}

module.exports = Finder;