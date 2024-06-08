function validate() {
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  var email = document.getElementById('email');
  var address = document.getElementById('address');
  var postcode = document.getElementById('postcode');
  var male = document.getElementById('male');
  var female = document.getElementById('female');
  var item1 = document.getElementById('item1');
  var item2 = document.getElementById('item2');
  var item3 = document.getElementById('item3');
  var language = document.getElementById('language');

  var errMessage = '';
  var result = true;

  if (!username.value.length) errMessage += 'Username is not empty\n';

  if (!password.value.length) {
    errMessage += 'Password is not empty\n';
  } else if (password.value.trim().length < 9) {
    errMessage += 'Password is at least 9-character long\n';
  }

  if (!email.value.length) errMessage += 'Email is not empty\n';

  if (!address.value.length) errMessage += 'Address is not empty \n';

  if (!postcode.value.length) errMessage += 'Postcode is not empty \n';
  else if (!/^[0-9]{4}$/.test(postcode.value))
    errMessage += 'Postcode is 4-digit \n';

  if (!male.checked && !female.checked)
    errMessage += 'Please choose a gender \n';

  if (!item1.checked && !item2.checked && !item3.checked)
    errMessage += 'Please choose a favorite item \n';

  if (!language.value.length) errMessage += 'Please choose a language \n';

  if (errMessage.length) {
    alert(errMessage);
    result = false;
  }
  return result;
}

function init() {
  var regForm = document.getElementById('register-form');
  regForm.onsubmit = validate;
}

window.onload = init;
