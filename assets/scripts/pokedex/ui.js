'use-strict'
const showPokedexTemplate = require('../templates/pokedex-listing-handlebars.handlebars')

const onCreatePokemonSuccess = responseData => {
  $('#create-pokemon').trigger('reset')
  $('.message5').text('You found a new Pokemon!').delay(1000).hide('You found a new Pokemon!')
  console.log(responseData)
}

const onCreatePokemonFailure = responseData => {
  $('#create-pokemon').trigger('reset')
  $('Whoops - looks like we have an error!').delay(1000).hide('Whoops-looks like we have an error!')
  console.log(responseData)
}
const onGetPokemonSuccess = data => {
  $('.message6').text('Scroll Down!').delay(800).hide('Scroll Down!')
  console.log(data)
  const showPokedexHtml = showPokedexTemplate({ pokemon: data.pokemons })
  $('.content').html(showPokedexHtml)
}

const onGetPokemonFailure = responseData => {
  $('.message6').text('Looks like the pokeverse is down').delay(800).hide('Looks like the pokeverse is down')
  console.log(responseData)
}
const onUpdatePokemonSuccess = responseData => {
  $('#update-pokemon').trigger('reset')
  $('.message7').text('You renamed your pokemon').delay(800).hide('You renamed your pokemon')
  console.log(responseData)
}
const onUpdatePokemonFailure = responseData => {
  ('#update-pokemon').trigger('reset')
  $('.message7').click('You do not have enough pokmeon yet!').delay(800).hide('You do not have enough pokemon yet!')
  console.log(responseData)
}

const onDeletePokemonSuccess = (responseData) => {
  $('#delete-pokemon').trigger('reset')
  $('.message8').click('You released a Pokemon!').delay(800).hide('You released a pokemon!')
  console.log(responseData)
}

const onDeletePokemonFailure = (responseData) => {
  $('#delete-pokemon').trigger('reset')
  $('.message8').text('Nope!').delay(800).hide('Nope!')
  console.log(responseData)
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
