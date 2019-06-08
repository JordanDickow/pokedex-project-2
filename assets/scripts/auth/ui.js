// const store = require('../store')

const onUserSignUpSuccess = responseData => {
  console.log(responseData)
    .addClass('success')
    .removeClass('failure')
}

const onUserSignUpFailure = responseData => {
  console.log(responseData)
    .addClass('failure')
    .removeClass('success')
}
module.exports = {
  onUserSignUpSuccess,
  onUserSignUpFailure
}
