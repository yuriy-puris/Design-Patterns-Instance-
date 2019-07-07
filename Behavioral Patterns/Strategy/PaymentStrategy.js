class PaymentStrategy {

    static Card(user) {
        console.log(`This ${user} will be pay with this Card`);
    }

    static PayPal(user) {
        console.log(`This ${user} will be pay with this PayPal`);
    }

    static AnotherMethod(user) {
        console.log(`This ${user} will be pay with this AnotherMethod`);
    }

}

module.exports = PaymentStrategy;