import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input[name="email"]'),
  area: document.querySelector('textarea[name="message"]'),
};
const FEEDBACK_KEY = 'feedback-form-state';

let value = {};

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onText, 500));

function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
  console.log(value);
}

function onText(e) {
  if (e.target === refs.input) {
    value.email = e.target.value;
  }
  if (e.target === refs.area) {
    value.message = e.target.value;
  }
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(value));
}

function fillingForm() {
  const takeValue = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  if (takeValue) {
    refs.input.value = takeValue.email;
    refs.area.value = takeValue.message;
  }
}
// fillingForm();
