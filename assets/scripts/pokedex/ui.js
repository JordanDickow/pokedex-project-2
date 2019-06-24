'use-strict'
const showPokedexTemplate = require('../templates/pokedex-listing-handlebars.handlebars')

const onCreatePokemonSuccess = responseData => {
  $('#create-pokemon').trigger('reset')
  $('.message5').text('You found a new Pokemon!')
  setTimeout(function () {
    $('.message5').hide()
  }, 2000)
  console.log(responseData)
}

const onCreatePokemonFailure = responseData => {
  $('#create-pokemon').trigger('reset')
  $('.message5').text('Whoops - looks like we have an error!')
  setTimeout(function () {
    $('.message5').hide()
  }, 2000)
  console.log(responseData)
}
const onGetPokemonSuccess = data => {
  $('#get-pokemon').click(function () {
    $('.message6').text('Scroll Down!')
  })
  setTimeout(function () {
    $('.message6').hide()
  }, 2000)
  console.log(data)
  const showPokedexHtml = showPokedexTemplate({ pokemon: data.pokemons })
  $('.content').html(showPokedexHtml)
}

const onGetPokemonFailure = responseData => {
  $('.message6').text('Looks like the pokeverse is down')
  setTimeout(function () {
    $('.message6').hide()
  }, 2000)
  console.log(responseData)
}
const onUpdatePokemonSuccess = responseData => {
  $('#update-pokemon').trigger('reset')
  $('.message7').text('You renamed your pokemon')
  setTimeout(function () {
    $('.message7').hide()
  }, 2000)
  console.log(responseData)
}
const onUpdatePokemonFailure = responseData => {
  console.log(responseData)
  $('#update-pokemon').trigger('reset')

  $('.message7').text('You do not have enough pokmeon yet!')
  setTimeout(function () {
    $('.message7').hide()
  }, 2000)
}

const onDeletePokemonSuccess = (responseData) => {
  $('#delete-pokemon').trigger('reset')
  $('.message8').text('You released a Pokemon!')
  setTimeout(function () {
    $('.message8').hide()
  }, 2000)
  console.log(responseData)
}

const onDeletePokemonFailure = (responseData) => {
  $('#delete-pokemon').trigger('reset')
  $('.message8').text('Nope!')
  setTimeout(function () {
    $('.message8').hide()
  }, 2000)
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
