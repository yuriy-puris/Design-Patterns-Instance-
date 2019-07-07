const Shopper = require('./Shopper');
const Category = require('./Category');
const Sales = require('./Sales');

const designCategory = new Category('Design Category');
const webCategory = new Category('Web Category');
const personalCategory = new Category('Personal Category');

const paul = new Shopper('Paul');
const mike = new Shopper('Mike');
const john = new Shopper('John');
const alex = new Shopper('Alex');

const blackFriday = new Sales();

designCategory.subscribe(blackFriday);
webCategory.subscribe(blackFriday);
personalCategory.subscribe(blackFriday);

designCategory.subscribe(paul);
designCategory.subscribe(mike);
designCategory.subscribe(john);


webCategory.subscribe(mike);

personalCategory.subscribe(alex);

designCategory.sale(20);
webCategory.sale(15);
personalCategory.sale(50);

console.log(blackFriday.sales)