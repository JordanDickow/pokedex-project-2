const onCreatePokemonSuccess = responseData => {
  console.log(responseData)
  console.log('success')
}

const onCreatePokemonFailure = responseData => {
  console.log(responseData)
  console.log('success')
}

const onGetPokemonSuccess = responseData => {
  console.log(responseData)
  console.log('success')
}


const onGetPokemonFailure = responseData => {
  console.log(responseData)
  console.log('success')
}
module.exports = {
  onCreatePokemonSuccess,
  onCreatePokemonFailure,
  onGetPokemonSuccess,
  onGetPokemonFailure
}
