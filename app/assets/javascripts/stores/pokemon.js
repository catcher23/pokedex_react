(function () {

  window.PokemonStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _pokemons.slice();
    },

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

      }
    })
  });
 })();
