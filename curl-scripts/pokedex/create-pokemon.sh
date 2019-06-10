curl "https://enigmatic-retreat-33385.herokuapp.com/pokemons" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "pokemon": {
      "name": "'"${NAME}"'"
    }
  }'

echo
