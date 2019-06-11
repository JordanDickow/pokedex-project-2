'use strict'
const store = require('../store')
const onUserSignUpSuccess = responseData => {

  console.log(responseData)
  console.log('success')
}

const onUserSignUpFailure = responseData => {
  console.log(responseData)
  console.log('failure')
}

const onUserSignInSuccess = data => {

  store.user = data.user
  console.log(store.user)
  console.log('success')
}

const onUserSignInFailure = responseData => {
  console.log(responseData)
  console.log('failure')
}

const onUserPassWordSuccess = responseData => {
  console.log(responseData)
  console.log('success')
}

const onUserPassWordFailure = responseData => {
  console.log(responseData)
  console.log('failure')
}

const onUserSignOutSuccess = responseData => {
  console.log(responseData)
  console.log('success')
}

const onUserSignOutFailure = responseData => {
  console.log(responseData)
  console.log('failure')
}
module.exports = {
  onUserSignUpSuccess,
  onUserSignUpFailure,
  onUserSignInSuccess,
  onUserSignInFailure,
  onUserPassWordSuccess,
  onUserPassWordFailure,
  onUserSignOutSuccess,
  onUserSignOutFailure
}
