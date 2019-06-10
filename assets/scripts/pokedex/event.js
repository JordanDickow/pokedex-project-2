'use-strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreatePokemon = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.createPokemon(formData)
    .then(ui.onCreatePokemonSuccess)
    .catch(ui.onCreatePokemonFailure)
}

const onGetPokemon = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.getPokemon(formData)
    .then(ui.onGetPokemonSuccess)
    .catch(ui.onGetPokemonFailure)
}

const onUpdatePokemon = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.updatePokemon(formData)
    .then(ui.onGetPokemonSuccess)
    .catch(ui.onGetPokemonFailure)
}

module.exports =
{
  onCreatePokemon,
  onGetPokemon,
  onUpdatePokemon
}
