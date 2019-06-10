curl "https://enigmatic-retreat-33385.herokuapp.com/pokemons/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "pokemon": {
      "name": "'"${NAME}"'"
    }
  }'


echo
