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

const getPokemon = () => {
  return $.ajax({
    url: config.apiUrl + '/pokemons/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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

const deletePokemon = function (id) {
  return $.ajax({
    url: config.apiUrl + '/pokemons/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports =
{
  createPokemon,
  getPokemon,
  updatePokemon,
  deletePokemon
}
