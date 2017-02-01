var app = angular.module('pokeApp', []);

app.controller('PokemonController', function($http){
  console.log('PokemonController loaded');

  var API = 'http://pokeapi.co/api/v2'

  var ctrl = this;

  ctrl.pokemonList = [{name: 'Squirtle'},
                      {name: 'Bulbasaur'},
                      {name: 'Charmander'},
                      {name: 'Pikachu'}
                     ];

  $http.get(API + '/pokemon').then(function(response){
    console.log('Got a response from the API', response);
    ctrl.pokemonList = response.data.results;
  }).catch(function(err){
    console.log('Error getting info from API', err);
  });

  ctrl.iChooseYou = function(pokemon){
    console.log('Chose', pokemon);
    $http.get(pokemon.url).then(function(response){
      console.log('Pokemon info', response.data);
      pokemon.imageUrl = response.data.sprites.front_default;
    }).catch(function(err){
      console.log('Error getting info from API', err);
    })
  }
});
