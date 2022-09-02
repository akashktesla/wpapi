import fetch from 'node-fetch'

fetch("dataa.json")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
