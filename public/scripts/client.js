var app = angular.module('pokeApp', []);

app.controller('PokemonController', function(PokeService){
  console.log('PokemonController loaded');

  var ctrl = this;
  var currentlySelectedPokemon = {};

  ctrl.pokemonList = [{name: 'Squirtle'},
                      {name: 'Bulbasaur'},
                      {name: 'Charmander'},
                      {name: 'Pikachu'}
                     ];

  ctrl.currentPokemon = {};

  PokeService.getAllPokemon().then(function (pokeList) {
    ctrl.pokemonList = pokeList;
  });

  ctrl.iChooseYou = function(pokemon){
    console.log('Chose', pokemon);
    PokeService.getPokemon(pokemon).then(function (imageUrl) {
      togglePokemon(pokemon);
      ctrl.currentPokemon.imageUrl = imageUrl;
      ctrl.currentPokemon.name = pokemon.name;
    });
  };

  function togglePokemon(pokemon) {
    currentlySelectedPokemon.chosen = false;
    currentlySelectedPokemon = pokemon;
    pokemon.chosen = true;
  }
});
