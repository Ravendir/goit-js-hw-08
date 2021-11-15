import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  area: document.querySelector('textarea[name="message"]'),
};

const FB_KEY = 'feedback-form-state';
let value = {};

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onText, 500));

savedValue();

function onSubmit(evt) {
  evt.preventDefault();
  console.log(value);

  evt.currentTarget.reset();
  localStorage.removeItem(FB_KEY);
  value = {};
}

function onText(evt) {
  if (evt.target === refs.input) {
    value.email = evt.target.value;
  }
  if (evt.target === refs.area) {
    value.message = evt.target.value;
  }
  localStorage.setItem(FB_KEY, JSON.stringify(value));
}

function savedValue() {
  const savedMsg = JSON.parse(localStorage.getItem(FB_KEY));

  if (savedMsg) {
    refs.input.value = savedMsg.email;
    refs.area.value = savedMsg.message;
  }
}
form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));
