const courseDB = () => {
    return {
        dbInfo: (course) => {
            console.log(`Book id: ${course.id} ... Author ${course.author}`)
        }
    }
}

module.exports = courseDB();