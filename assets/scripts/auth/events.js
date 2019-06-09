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

module.exports = {
  onUserSignUp
}
