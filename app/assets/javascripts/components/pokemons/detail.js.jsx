window.PokemonDetail = React.createClass({
  getStateFromStore: function () {
    return { pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSinglePokemon(parseInt(newProps.params.pokemonId));
  },

  componentDidMount: function () {
    PokemonStore.addPokemonDetailChangeListener(this._onChange);
    ApiUtil.fetchSinglePokemon(parseInt(this.props.params.pokemonId));
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonDetailChangeListener(this._onChange);
  },

  render: function () {
    if(this.state.pokemon === undefined) { return <div></div>; }

    return(
      <div>
        <div className="detail">
          <img src={this.state.pokemon.image_url} />
          {['name', 'attack', 'defense', 'poke_type', 'moves'].map(function (attr) {
            return <p key={attr}>{attr}: {this.state.pokemon[attr]}</p>;
          }.bind(this))}
        </div>
          <h2>Toys: </h2>
          <ToysIndex toys={this.state.pokemon.toys} />
      </div>
    );
  }
});
