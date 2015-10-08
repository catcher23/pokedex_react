window.PokemonsIndex = React.createClass({
  getInitialState: function (){
    return { pokemons: PokemonStore.all() };
  },

  _onChange: function () {
    this.setState({ pokemons: PokemonStore.all() });
  },

  componentDidMount: function () {
    PokemonStore.addPokemonsIndexChangeListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonsIndexChangeListener(this._onChange);
  },

  render: function () {
    return(
      <ul>
        {this.state.pokemons.map(function (pokemon) {
          return <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />;
        })}
      </ul>
    );
  }
});
