app.service('PokeService', ['$http', function ($http) {
  var API = 'http://pokeapi.co/api/v2';

  this.getAllPokemon = function () {
    // return the promise to the caller
    return $http.get(API + '/pokemon').then(function (response) {
      console.log('Got a response from the API', response);
      return response.data.results; // returned on resolution of promise
    }).catch(function (err) {
      console.log('Error getting info from API', err);
    });
  };

  this.getPokemon = function (pokemon) {
    return $http.get(pokemon.url).then(function(response){
      console.log('Pokemon info', response.data);
      var foundPokemon =  response.data;
      return foundPokemon.sprites.front_default; // image
    }).catch(function(err){
      console.log('Error getting info from API', err);
    })
  };

}]);
