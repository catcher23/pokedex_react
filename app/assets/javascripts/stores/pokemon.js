(function () {
  var POKEMONS_INDEX_CHANGE_EVENT = "pokemonsIndexChange";
  var POKEMON_DETAIL_CHANGE_EVENT = "pokemonDetailChange";

  var _pokemons = [];

  var resetPokemons = function (pokemons) {
    _pokemons = pokemons;
  };

  var resetPokemon = function (pokemon) {
    var switched = false;
    _pokemons.forEach(function (p) {
      if(p.id === pokemon.id) {
        _pokemons[_pokemons.indexOf(p)] = pokemon;
        switched = true;
      }
    });
    if(!switched) { _pokemons.push(pokemon); }
  };

  window.PokemonStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _pokemons.slice();
    },

    find: function (id) {
        var pokemon;
        _pokemons.forEach(function(p) {
          if(p.id === id) { pokemon = p; }
        });

        return pokemon;
      },

  addPokemonDetailChangeListener: function (callback) {
    this.on(POKEMON_DETAIL_CHANGE_EVENT, callback);
  },

  removePokemonDetailChangeListener: function (callback) {
    this.removeListener(POKEMON_DETAIL_CHANGE_EVENT, callback);
  },
  addPokemonsIndexChangeListener: function (callback) {
      this.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

  removePokemonsIndexChangeListener: function (callback) {
      this.removeListener(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case PokemonConstants.POKEMONS_RECEIVED:
          resetPokemons(payload.pokemons);
          PokemonStore.emit(POKEMONS_INDEX_CHANGE_EVENT);
          break;
        case PokemonConstants.POKEMON_RECEIVED:
          resetPokemon(payload.pokemon);
          PokemonStore.emit(POKEMON_DETAIL_CHANGE_EVENT);
          break;
      }
    })
  });
 })();
