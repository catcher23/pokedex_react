window.PokemonIndexItem = React.createClass({

  render: function () {
    return(
      <li className="poke-list-item">
        <p>Name: {this.props.pokemon.name}</p>
        <p>Poke Type: {this.props.pokemon.poke_type}</p>
      </li>
    );
  }
});
