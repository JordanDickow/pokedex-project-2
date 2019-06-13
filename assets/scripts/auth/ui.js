'use strict'
const store = require('../store')
const onUserSignUpSuccess = responseData => {
  $('.sign-up').toggle()
  console.log(responseData)
  $('.message1').text('Welcome New Trainer!').delay(1000).hide('Welcome New Trainer!')
}

const onUserSignUpFailure = responseData => {
  $('.message1').text('Trainer already exists').delay(1000).hide('Trainer already exists!')
  console.log(responseData)
}

const onUserSignInSuccess = data => {
  $('.message2').text('Oh you again').delay(1000).hide('Oh you again')
  $('.signed-in').toggle()
  $('.logged-in').toggle()
  $('sign-up').toggle()
  store.user = data.user
}

const onUserSignInFailure = responseData => {
  $('.message2').text('Check your info!').delay(1000).hide('Check your info!')
  console.log(responseData)
}

const onUserPassWordSuccess = responseData => {
  $('.message3').text('You changed your password').delay(1000).hide('You changed your password')
  console.log(responseData)
}

const onUserPassWordFailure = responseData => {
  $('.message3').text('You typed the same password!').delay(1000).hide('You typed the same password!')
  console.log(responseData)
}

const onUserSignOutSuccess = responseData => {
  $('.sign-up').toggle()
  $('.signed-in').toggle()
  $('.message1').text('Come Back Soon!').delay(800).hide('Come Back Soon!')
  $('.logged-in').toggle()
  $('.sign-in')
  console.log(responseData)
}

const onUserSignOutFailure = responseData => {
  console.log(responseData)
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
