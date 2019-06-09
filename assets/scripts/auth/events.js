'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onUserSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.userSignUp(formData)
    .then(ui.onUserSignUpSuccess)
    .catch(ui.onUserSignUpFailure)
}

const onUserSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.userSignIn(formData)
    .then(ui.onUserSignInSuccess)
    .catch(ui.onUserSignInFailure)
}

const onUserPassWord = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.userPassWord(formData)
    .then(ui.onUserPassWordSuccess)
    .catch(ui.onUserPassWordFailure)
}
const onUserSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.userSignOut(formData)
    .then(ui.onUserSignOutSuccess)
    .catch(ui.onUserSignOutFailure)
}

module.exports = {
  onUserSignUp,
  onUserSignIn,
  onUserPassWord,
  onUserSignOut
}
