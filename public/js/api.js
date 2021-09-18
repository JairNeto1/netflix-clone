const fetch = require('fetch')

const base_url = 'https://api.themoviedb.org/3/'
const api_key = 'api_key=a06f6de12c4b33db6e6e9d0ccd82bb20'
const best_rated_api = base_url + 'movie/top_rated?' + api_key

getBestRated(best_rated_api)

function getBestRated(url) {
  function fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
}
