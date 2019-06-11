'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('../../assets/scripts/auth/events.js')
const pokedexEvent = require('../../assets/scripts/pokedex/event.js')
$(() => {
// User events

  $('#sign-up').on('submit', authEvents.onUserSignUp)
  $('#sign-in').on('submit', authEvents.onUserSignIn)
  $('#change-password').on('submit', authEvents.onUserPassWord)
  $('#sign-out').on('submit', authEvents.onUserSignOut)
  // Poke´dex events
  $('#create-pokemon').on('submit', pokedexEvent.onCreatePokemon)
  $('#get-pokemon').on('submit', pokedexEvent.onGetPokemon)
  $('#update-pokemon').on('submit', pokedexEvent.onUpdatePokemon)
  $('#delete-pokemon').on('submit', pokedexEvent.onDeletePokemon)
})
