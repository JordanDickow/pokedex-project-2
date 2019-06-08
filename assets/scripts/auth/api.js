'use strict'
const config = require('../config')
// const store = require('../store')

const userSignUp = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData

  })
}
module.exports = {
  userSignUp
}
