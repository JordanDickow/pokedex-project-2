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

const onUpdatePokemonSuccess = responseData => {
  console.log(responseData)
  console.log('successs')
}

const onUpdatePokemonFailure = responseData => {
  console.log(responseData)
  console.log('failure')
}

const onDeletePokemonSuccess = responseData => {
  console.log(responseData)
  console.log('success')
}

const onDeletePokemonFailure = responseData => {
  console.log(responseData)
  console.log('failure')
}
module.exports = {
  onCreatePokemonSuccess,
  onCreatePokemonFailure,
  onGetPokemonSuccess,
  onGetPokemonFailure,
  onUpdatePokemonSuccess,
  onUpdatePokemonFailure,
  onDeletePokemonSuccess,
  onDeletePokemonFailure

}
