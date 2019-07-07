class Shopper {

    constructor(name) {
        this.name= name;
    }

    notify(categoryName, discount) {
        console.log(`${this.name} there is a sale for ${categoryName} courses! ${discount}$ off for every course`);
    }

}

module.exports = Shopper;