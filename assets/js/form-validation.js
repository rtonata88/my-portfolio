const form = document.getElementById('contact-form');
const emailError = document.querySelector('span.error');

const isEmailValid = (email) => {
  const regex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  return regex.test(email.value);
};

const checkEmail = (email) => {
  // console.log(isEmailValid(email));
  let valid = true;
  if (!isEmailValid(email)) {
    valid = false;
  }
  return valid;
};

form.addEventListener('submit', (event) => {
  // prevent the form from submitting
  event.preventDefault();

  const { email } = form.elements;

  if (!checkEmail(email)) {
    email.setCustomValidity(
      'Please enter a valid email address and in lowercase letters.',
    );
    emailError.textContent = 'Please enter a valid email address and in lowercase letters.';
  } else {
    email.setCustomValidity('');
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
    form.submit();
  }
});

const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('message');

const store = () => {
  const inputs = {
    fullname: fullname.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('formInput', JSON.stringify(inputs));
};
// On change of email, update the storage
fullname.addEventListener('change', () => {
  store();
});

email.addEventListener('change', () => {
  store();
});

message.addEventListener('change', () => {
  store();
});

const populateForm = () => {
  const storage = localStorage.getItem('formInput');
  fullname.value = JSON.parse(storage).fullname;
  email.value = JSON.parse(storage).email;
  message.value = JSON.parse(storage).message;
};
populateFrm();
