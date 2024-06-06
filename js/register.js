let registerForm = document.getElementById('register-form');
let username = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('email');
let address = document.getElementById('address');
let postcode = document.getElementById('postcode');
let male = document.getElementById('male');
let female = document.getElementById('female');
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let language = document.getElementById('language');

// Check field blank and return error message
registerForm.addEventListener('submit', function (e) {
  let errMessage = '';
  e.preventDefault();

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

  if (errMessage.length) alert(errMessage);
  else registerForm.submit();
});
