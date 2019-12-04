'use strict'

const form = document.querySelector('.modal__form');

const name = form.querySelector('#full-name');
const email = form.querySelector('#email');
const number = form.querySelector('#number')
const message = form.querySelector('#message');

const allInputs = form.querySelectorAll('.form__input');

const phoneRegularExpression = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

form.addEventListener('submit', (event) => {
  event.preventDefault()

  let errors = form.querySelectorAll('.form__error')
  if (errors.length > 0) {
    errors.forEach(error => error.remove())
  }

  let counter = 0;
  for (let i = 0; i < allInputs.length; i++) {
    if (!allInputs[i].value) {
      let error = document.createElement('span')
      error.className = 'form__error'
      error.innerHTML = '* This field must be filled'

      allInputs[i].after(error)
      counter++
    }
  }

  if (name.value.length < 3) {
    let error = document.createElement('span')
    error.className = 'form__error'
    error.innerHTML = '* Name must be longer than 3 characters'

    name.after(error)
  }
  
  if (name.value.split(' ').length < 2) {
    let error = document.createElement('span')
    error.className = 'form__error'
    error.innerHTML = '* The name must be in the format "FirstName LastName". For example, "Tony Stark"'

    name.after(error)
  }

  if (email.value.indexOf("@") < 1 ||
      email.value.lastIndexOf(".") < email.value.indexOf("@") + 2 ||
      email.value.lastIndexOf(".") + 2 >= email.value.length) {
    let error = document.createElement('span')
    error.className = 'form__error'
    error.innerHTML = '* Email must be valid. For example, "info@wikipedia.org."'

    email.after(error)
  }

  if (!phoneRegularExpression.test(number.value)) {
    let error = document.createElement('span')
    error.className = 'form__error'
    error.innerHTML = '* Phone number must be valid. For example, "+380677331788"'

    number.after(error)
  }

  if (message.value.length < 20) {
    let error = document.createElement('span')
    error.className = 'form__error'
    error.innerHTML = '* Message must be longer than 20 characters'

    message.after(error)
  }

  errors = form.querySelectorAll('.form__error')
  if (errors.length === 0) {
    console.log('All fields is valid')
  }
})

const openModalButton = document.querySelector('.footer__modal-btn')
const closeModalButton = document.querySelector('.modal__close-btn')
const modalWindow = document.querySelector('.modal')

openModalButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth'})

  modalWindow.style.display = 'flex'
})

closeModalButton.addEventListener('click', (event) => {
  event.preventDefault();

  modalWindow.style.display = 'none'
})