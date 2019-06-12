'use-strict'
const showPokedexTemplate = require('../templates/pokedex-listing-handlebars.handlebars')

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

const deletePokemonSuccess = (data) => {
  console.log(data)
  console.log('success')
  const showPokedexHtml = showPokedexTemplate({ pokemon: data.pokemons })
  console.log('success')
  $('.content').html(showPokedexHtml)
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
  deletePokemonSuccess,
  onDeletePokemonFailure

}
