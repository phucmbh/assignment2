// Get element of form
let delivery = document.getElementById('delivery');
let pickup = document.getElementById('pick-up');
let deliveryAddresss = document.getElementById('delivery-addresss');
let billingAddress = document.getElementById('billing-address');
let sameDelivery = document.getElementById('same-input');

let contactNumber = document.getElementById('contact-number');
let email = document.getElementById('email');

let payPickup = document.getElementById('pay-pickup');
let payOnline = document.getElementById('pay-online');
let visa = document.getElementById('visa');
let mastercard = document.getElementById('mastercard');
let americanExpress = document.getElementById('american-express');
let card = document.getElementById('card');
let orderForm = document.getElementById('order-form');
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
  card.setAttribute('maxlength', 15);
});

// Set max length credit card number is 15 when master card is chose
mastercard.addEventListener('change', function () {
  card.setAttribute('maxlength', 15);
});

// Set max length credit card number is 16 when american express is chose
americanExpress.addEventListener('change', function () {
  card.setAttribute('maxlength', 16);
});





//  Check field blank and return error message
orderForm.addEventListener('submit', function (e) {
  let errMessage = '';
  e.preventDefault();

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

  if (errMessage.length) alert(errMessage);
  else orderForm.submit();
});
