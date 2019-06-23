'use strict'
const store = require('../store')
const onUserSignUpSuccess = responseData => {
  $('#sign-up').trigger('reset')
  $('.sign-up').toggle()
  console.log(responseData)
  $('.message1').text('Welcome New Trainer!').delay(1000)
}

const onUserSignUpFailure = responseData => {
  $('#sign-up').trigger('reset')
  $('.message1').text('Trainer already exists').delay(1000)
  console.log(responseData)
}

const onUserSignInSuccess = data => {
  $('#sign-in').trigger('reset')
  $('.message2').text('Oh you again').delay(1000)
  $('.signed-in').toggle()
  $('.logged-in').toggle()
  $('sign-up').toggle()
  store.user = data.user
}

const onUserSignInFailure = responseData => {
  $('#sign-in').trigger('reset')
  $('.message2').text('Check your info!').delay(1000)
  console.log(responseData)
}

const onUserPassWordSuccess = responseData => {
  $('#change-password').trigger('reset')
  $('.message3').text('You changed your password').delay(1000).hide('You changed your password')
  console.log(responseData)
}

const onUserPassWordFailure = responseData => {
  $('#change-password').trigger('reset')
  $('.message3').text('You typed the same password!').delay(1000).hide('You typed the same password!')
  console.log(responseData)
}

const onUserSignOutSuccess = responseData => {
  $('.content').html('')
  $('.sign-up').toggle()
  $('.signed-in').toggle()
  $('.message1').text('Come Back Soon!').delay(800).hide('Come Back Soon!')
  $('.logged-in').toggle()
  $('#content').hide()
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
