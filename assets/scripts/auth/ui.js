'use strict'
// const store = require('../store')
const onUserSignUpSuccess = responseData => {
  console.log(responseData)
  console.log('success')
}

const onUserSignUpFailure = responseData => {
  console.log(responseData)
  console.log('failure')
}
module.exports = {
  onUserSignUpSuccess,
  onUserSignUpFailure
}
