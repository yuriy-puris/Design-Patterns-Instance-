const PaymentStrategy = require('./PaymentStrategy');

class Payment {
    constructor(strategy='Card') {
        this.strategy = PaymentStrategy[strategy];
    }

    changeStrategy(newStrategy) {
        this.strategy = PaymentStrategy[newStrategy];
        console.log('*******strategy has been change********')
    }

    showPaymentStrategy(user) {
        this.strategy(user);
    }

}

module.exports = Payment;