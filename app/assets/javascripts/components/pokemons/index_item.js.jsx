window.PokemonIndexItem = React.createClass({

  mixins: [ReactRouter.History],
  showDetail: function () {
    this.history.pushState(null, '/pokemon/' + this.props.pokemon.id, {});
  },

  render: function () {
    return(
      <li onClick={this.showDetail} className="poke-list-item">
        <p>Name: {this.props.pokemon.name}</p>
        <p>Poke Type: {this.props.pokemon.poke_type}</p>
      </li>
    );
  }
});
