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
    url: config.apiUrl + `/pokemons` + `${ID}`,
    method: 'PATCH',
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
  updatePokemon
}
