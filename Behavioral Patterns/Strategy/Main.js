const Payment = require('./Payment');

const paymentMethod = new Payment();

paymentMethod.showPaymentStrategy('Mike');
paymentMethod.showPaymentStrategy('Paul');


paymentMethod.changeStrategy('PayPal');

paymentMethod.showPaymentStrategy('Alex');
paymentMethod.showPaymentStrategy('Julia');