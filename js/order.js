// Get element of form
var delivery = document.getElementById('delivery');
var pickup = document.getElementById('pick-up');
var deliveryAddresss = document.getElementById('delivery-addresss');
var billingAddress = document.getElementById('billing-address');
var sameDelivery = document.getElementById('same-input');

var contactNumber = document.getElementById('contact-number');
var email = document.getElementById('email');

var payPickup = document.getElementById('pay-pickup');
var payOnline = document.getElementById('pay-online');
var visa = document.getElementById('visa');
var mastercard = document.getElementById('mastercard');
var americanExpress = document.getElementById('american-express');
var card = document.getElementById('card');
var orderForm = document.getElementById('order-form');
// End get element of form

//Show delivery address and same as delivery address
delivery.addEventListener('change', function () {
  document.getElementById('shipping-address').style.display = 'block';
  document.getElementById('same-delivery').style.display = 'block';
});

//Hide delivery address and same as delivery address
pickup.addEventListener('change', function () {
  document.getElementById('shipping-address').style.display = 'none';
  document.getElementById('same-delivery').style.display = 'none';
});

// Hide type of credit card and card number
payPickup.addEventListener('change', function () {
  document.getElementById('credit-card').style.display = 'none';
});

// Show type of credit card and card number
payOnline.addEventListener('change', function () {
  document.getElementById('credit-card').style.display = 'block';
});

// Billing address will be filled with the delivery address automatically
sameDelivery.addEventListener('change', function () {
  if (!deliveryAddresss.value) {
    alert('Please enter your delivery address first');
    sameDelivery.checked = false;
  }
  if (sameDelivery.checked) billingAddress.value = deliveryAddresss.value;
  else billingAddress.value = '';
});

// Choose type of credit card before enter credit card number
card.addEventListener('keypress', function (e) {
  if (!visa.checked && !mastercard.checked && !americanExpress.checked) {
    alert('Please choose a type of credit card');
    card.value = '';
  }
});

// Set max length credit card number is 15 when visa is chose
visa.addEventListener('change', function () {
  card.maxLength = 15;
});

// Set max length credit card number is 15 when master card is chose
mastercard.addEventListener('change', function () {
  card.maxLength = 15;
});

// Set max length credit card number is 16 when american express is chose
americanExpress.addEventListener('change', function () {
  card.maxLength = 16;
});

function validate() {
  var errMessage = '';
  var result = true;

  if (!delivery.checked && !pickup.checked) {
    errMessage += 'Please choose a shipping method \n';
  }
  if (delivery.checked && !deliveryAddresss.value.length)
    errMessage += 'Delivery address is not empty\n';

  if (!billingAddress.value.length)
    errMessage += 'Billing address is not empty \n';

  if (!contactNumber.value.length)
    errMessage += 'Contact number is not empty \n';

  if (!email.value.length) errMessage += 'Email is not empty \n';

  if (!payOnline.checked && !payPickup.checked)
    errMessage += 'Please choose a payment method \n';
  if (payOnline.checked) {
    if (!visa.checked && !mastercard.checked && !americanExpress.checked)
      errMessage += 'Please choose a type of credit card \n';
    if (!card.value.length) {
      errMessage += 'Credit card number is not empty \n';
    }
  }

  if (errMessage.length) {
    alert(errMessage);
    result = false;
  }
  return result;
}

function init() {
  var orderForm = document.getElementById('order-form');
  orderForm.onsubmit = validate;
}

window.onload = init;
