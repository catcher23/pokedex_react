$(function() {

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var rootEl = document.getElementById('pokedex');

React.render((
  <Router>
    <Route path="/" component={Index}>
      <Route path="pokemon/:pokemonId" component={PokemonDetail} />
      <Route
        path="pokemon/:pokemonId/toys/:toyId"
        components={{pokemon: PokemonDetail, toy: ToyDetail}}/>
    </Route>
  </Router>
), rootEl);
});
