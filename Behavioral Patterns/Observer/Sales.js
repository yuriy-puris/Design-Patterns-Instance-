class Sales {

    constructor() {
        this.sales = [];
    }

    notify(categoryName, discount) {
        console.log(`We have sales for thi following categories`);
        this.sales.push({categoryName, discount});
    }

}

module.exports = Sales;