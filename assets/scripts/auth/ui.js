'use strict'
const store = require('../store')
const onUserSignUpSuccess = responseData => {
  $('#sign-up').trigger('reset')
  $('.sign-up').toggle()
  $('.message1').text('Welcome New Trainer!')
  setTimeout(function () {
    $('.message1').hide()
  }, 2000)
}

const onUserSignUpFailure = responseData => {
  $('#sign-up').trigger('reset')
  $('.message1').text('Trainer already exists')
  setTimeout(function () {
    $('.message1').hide()
  }, 2000)
}

const onUserSignInSuccess = data => {
  $('#sign-in').trigger('reset')
  $('.message2').text('Oh you again')
  $('.signed-in').toggle()
  $('.logged-in').toggle()
  $('sign-up').toggle()
  store.user = data.user
  setTimeout(function () {
    $('.message2').hide()
  }, 2000)
}

const onUserSignInFailure = responseData => {
  $('#sign-in').trigger('reset')
  $('.message2').text('Check your info!').delay(1000)
  setTimeout(function () {
    $('.message2').hide()
  }, 2000)
}

const onUserPassWordSuccess = responseData => {
  $('#change-password').trigger('reset')
  $('.message3').text('You changed your password')
  setTimeout(function () {
    $('.message3').hide()
  }, 2000)
}

const onUserPassWordFailure = responseData => {
  $('#change-password').trigger('reset')
  $('.message3').text('You typed the same password!')
  setTimeout(function () {
    $('.message3').hide()
  }, 2000)
}

const onUserSignOutSuccess = responseData => {
  $('.content').html('')
  $('.sign-up').toggle()
  $('.signed-in').toggle()
  $('.message1').text('Come Back Soon!')
  $('.logged-in').toggle()
  $('#content').hide()
  setTimeout(function () {
    $('.message1')
  }, 2000)
}

const onUserSignOutFailure = responseData => {

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
