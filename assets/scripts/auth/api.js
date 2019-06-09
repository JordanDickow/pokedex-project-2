'use strict'
const config = require('../config')
const store = require('../store')

const userSignUp = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData

  })
}

const userSignIn = formData => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData

  })
}

const userPassWord = formData => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

const userSignOut = () => {
  console.log(store)
  console.log('store is', store)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  userSignUp,
  userSignIn,
  userPassWord,
  userSignOut
}
