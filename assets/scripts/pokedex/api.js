'use strict'
const config = require('../config')
const store = require('../store')
const createPokemon = (formData) => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + `/pokemons`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getPokemon = (formData) => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + `/pokemons`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updatePokemon = (formData) => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + `/pokemons/${formData.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deletePokemon = (formData) => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + `/pokemons/${formData.id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
module.exports =
{
  createPokemon,
  getPokemon,
  updatePokemon,
  deletePokemon
}
