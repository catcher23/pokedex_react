window.Index = React.createClass({
  render: function () {
    return(
      <div>
        <div className="pokemon-index">
          <PokemonForm />
          <PokemonsIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});
